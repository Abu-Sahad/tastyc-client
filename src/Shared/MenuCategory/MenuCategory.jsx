import { Link } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";
import Cover from "../Cover/Cover";

const MenuCategory = ({items,tittle,img}) => {
    return (
        <div>
            {tittle&& <Cover img={img} tittle={tittle}></Cover>}
             <div className="grid md:grid-cols-2 gap-14 mb-10 mt-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
            <Link to={`/order/${tittle}`}> <button className="btn btn-outline border-0 border-b-4 mt-4  mb-4">Order Your Food</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;