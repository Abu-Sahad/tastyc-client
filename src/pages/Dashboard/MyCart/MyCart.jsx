import React, { useContext } from 'react';
import SectionTittle from '../../../components/SectionTittle/SectionTittle';
import useCart from '../../../hooks/useCart';
import { AuthContext } from '../../../Providers/AuthProvider';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart,refetch] = useCart();
    const { loading } = useContext(AuthContext)
    console.log(cart);

    const handleDeleteCartItem = (row) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${row._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    // Check if the cart is undefined
    if (typeof cart === 'undefined') {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    // Calculate the total length of the cart array
    const totalLength = cart.length;

    // Sum all the prices in the cart array
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    console.log(totalLength, totalPrice);

    return (
        <div className='bg-[#e0dcdc] h-full w-full'>
            <SectionTittle heading='WANNA ADD MORE?' subHeading='My Cart'></SectionTittle>
            <div className='flex justify-around mb-10'>
                <p className='uppercase font-semibold text-2xl'>Total Items: {totalLength}</p>
                <p className='uppercase font-semibold text-2xl'>Total Price: {totalPrice}</p>
                <button className="btn btn-warning">pay</button>
            </div>

            <div className='ms-16 me-16 rounded-xl bg-white p-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Food</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((row, index) => <tr
                                    key={row._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={row.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {row.name}
                                    </td>
                                    <td>{row.price}</td>
                                    <td>
                                        <button onClick={() => handleDeleteCartItem(row)} className="btn btn-ghost text-2xl bg-[#a82b2b] text-white rounded-sm"><RiDeleteBin2Fill></RiDeleteBin2Fill></button>
                                    </td>
                                </tr>)
                            }




                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
