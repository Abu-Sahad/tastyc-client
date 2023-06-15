import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({items}) => {
    return (
        <div>
             <div className="grid md:grid-cols-2 gap-14 mb-10 mt-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;