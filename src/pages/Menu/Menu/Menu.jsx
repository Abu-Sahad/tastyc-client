import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularItem from "../../Home/PopularItem/PopularItem";
import Desert from "../Desert/Desert";
import Pizza from "../Pizza/Pizza";
import Salad from "../Salad/Salad";
import Sopu from "../Soup/Sopu";
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
            <Desert></Desert>
            <PopularItem></PopularItem>
            <Pizza></Pizza>
            <PopularItem></PopularItem>
            <Salad></Salad>
            <PopularItem></PopularItem>
            <Sopu></Sopu>
            <PopularItem></PopularItem>
        </div>
    );
};

export default Menu;