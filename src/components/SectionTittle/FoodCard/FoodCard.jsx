import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { _id, image, name, recipe, price } = item
    const [, refetch] = useCart()
    const handleFoodCardItem = (item) => {
        console.log(item)

        if (user && user.email) {
            const cartItem = { menuItem: _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item add to on Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Order Food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }
    return (

        <div className="card w-96 bg-base-100 shadow-xl mb-3">
            <figure className="w-full h-full">
                <img src={image} alt="Shoes" className="h-[300px] w-[432px]" />
                <p className="absolute top-0 right-0 p-2 mr-4 mt-4 bg-slate-900 text-white mt-4">${price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleFoodCardItem(item)} className="btn btn-primary bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937]" style={{ borderBottom: '3px solid #BB8506', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>Add To Cart</button>

                </div>
            </div>
        </div>


    );
};

export default FoodCard;