import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import LogIn from "../pages/LogIn/LogIn";
import SingUp from "../pages/SingUp/SingUp";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../pages/Dashboard/Mycart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: < Home />,
            },
            {
                path: "menu",
                element: < Menu />,
            },
            {
                path: "order/:category",
                element: < Order />,
            },
            {
                path: "login",
                element: < LogIn />,
            },
            {
                path: "signUp",
                element: < SingUp />,
            }
        ],
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "myCart",
                element: < MyCart />,
            },
            {
                path: "allUsers",
                element: < AllUsers/>,
            },
        ]
    }
]);