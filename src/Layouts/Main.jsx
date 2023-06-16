import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login')
    const noHeaderFootersign = location.pathname.includes('signUp')
    return (
        <div>
            {noHeaderFooter || noHeaderFootersign || <NavBar />}
            <Outlet />
            {noHeaderFooter || noHeaderFootersign || <Footer />}
        </div>
    );
};

export default Main;