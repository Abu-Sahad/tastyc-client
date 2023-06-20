import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const { user } = useContext(AuthContext)

    //jwt
    const token = localStorage.getItem('access-token')

    //end jwt


    const { refetch, data: cart } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
    
            })
            return res.json();
        }
    })
    return [cart, refetch]
};

export default useCart;