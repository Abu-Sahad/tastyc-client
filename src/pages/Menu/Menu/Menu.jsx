import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularItem from "../../Home/PopularItem/PopularItem";
import Desert from "../Desert/Desert";
import Pizza from "../Pizza/Pizza";
import Salad from "../Salad/Salad";
import Sopu from "../Soup/Sopu";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import MenuCategory from "../../../Shared/MenuCategory/MenuCategory";
const Menu = () => {
    const [menu] = useMenu()
    const offer = menu.filter(item => item.category === 'offered')
    const desert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')

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

            <SectionTittle heading='todays offer' subHeading='Do Not miss'></SectionTittle>

            <MenuCategory items={offer}></MenuCategory>
            <Desert></Desert>
            <MenuCategory items={desert}></MenuCategory>
            <Pizza></Pizza>
            <MenuCategory items={pizza}></MenuCategory>
            <Salad></Salad>
            <MenuCategory items={salad}></MenuCategory>
            <Sopu></Sopu>
            <MenuCategory items={soup}></MenuCategory>
        </div>
    );
};

export default Menu;