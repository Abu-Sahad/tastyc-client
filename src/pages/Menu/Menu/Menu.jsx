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
const Menu = () => {
    const [menu] = useMenu()
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

            <div className="grid md:grid-cols-2 gap-14 mb-10 mt-10">
                {
                    menu.filter(item => item.category === 'offered').map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Desert></Desert>
            <div className="grid md:grid-cols-2 gap-14 mb-10 mt-10">
                {
                    menu.filter(item => item.category === 'dessert').map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Pizza></Pizza>
            <div className="grid md:grid-cols-2 gap-14 mb-10 mt-10">
                {
                    menu.filter(item => item.category === 'pizza').map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Salad></Salad>
            <div className="grid md:grid-cols-2 gap-14 mb-10 mt-10">
                {
                    menu.filter(item => item.category === 'salad').map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Sopu></Sopu>
            <div className="grid md:grid-cols-2 gap-14 mb-10 mt-10">
                {
                    menu.filter(item => item.category === 'soup').map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default Menu;