import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendar, FaHome } from 'react-icons/fa'
import { GiHamburger,GiShop } from 'react-icons/gi'
import { BiMessageAltDetail} from 'react-icons/bi'
const Dashboard = () => {
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
                    <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home </NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History </NavLink></li>
                    <li><NavLink to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart>MyCart</NavLink></li>
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