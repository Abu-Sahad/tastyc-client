import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import MenuCategory from "../../../Shared/MenuCategory/MenuCategory";
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
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
                tittle='our menu'
                text='Would You Like To Try a Disk'
            ></Cover>

            <SectionTittle heading='todays offer' subHeading='Do Not miss'></SectionTittle>

            <MenuCategory items={offer}></MenuCategory>
            <MenuCategory items={desert} tittle='dessert' img={desertImg}></MenuCategory>
            <MenuCategory items={pizza} tittle='pizza' img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} tittle='salad' img={saladImg}></MenuCategory>
            <MenuCategory items={soup} tittle='soup' img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;