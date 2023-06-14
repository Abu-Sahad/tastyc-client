import { useEffect, useState } from "react";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const PopularItem = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data.filter(item => item.category === 'popular')
                setMenu(popularItem)
            })
    }, [])
    return (
        <section className="mb-12">
            <SectionTittle
                subHeading={'check it menu'}
                heading={'from our menu'}
            ></SectionTittle>
            <div className="grid md:grid-cols-2 gap-14">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularItem;