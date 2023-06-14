import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularItem from "../../Home/PopularItem/PopularItem";
const Menu = () => {
    console.log(menuImg)
    return (
        <div>
            <Helmet>
                <title>Tastyc Restaurant | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                tittle='OUR MENU'
                text='Would You Like To Try a Disk'
            ></Cover>
            <PopularItem></PopularItem>
            <Cover
                img={menuImg}
                tittle='OUR MENU'
                text='Would You Like To Try a Disk'
            ></Cover>
            <PopularItem></PopularItem>
            <Cover
                img={menuImg}
                tittle='OUR MENU'
                text='Would You Like To Try a Disk'
            ></Cover>
            <PopularItem></PopularItem>
        </div>
    );
};

export default Menu;