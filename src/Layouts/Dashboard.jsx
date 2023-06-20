import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendar, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa'
import { GiHamburger, GiShop } from 'react-icons/gi'
import { BiMessageAltDetail } from 'react-icons/bi'
import useCart from "../hooks/useCart";
const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on Data
    const isAdmin = true;
    //const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservations"> <FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                        </> : <>
                            <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home </NavLink></li>
                            <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History </NavLink></li>
                            <li><NavLink to='/dashboard/allUsers'><FaShoppingCart></FaShoppingCart>MyCart</NavLink></li>

                        </>
                    }
                    <div className="divider"></div>

                    <li><NavLink to='/'><FaHome></FaHome> Home </NavLink></li>
                    <li><NavLink to='/menu'> <GiHamburger></GiHamburger> Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'> <GiHamburger></GiHamburger> Our Order</NavLink></li>
                    <li><NavLink><GiShop></GiShop>Shop</NavLink></li>
                    <li><NavLink> <BiMessageAltDetail></BiMessageAltDetail> Contract</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;