const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item
    return (

        <div className="card w-96 bg-base-100 shadow-xl mb-3">
            <figure className="w-full h-full">
                <img src={image} alt="Shoes" className="h-[300px] w-[432px]" />
                <p className="absolute top-0 right-0 p-2 mr-4 mt-4 bg-slate-900 text-white mt-4">${price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-primary bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937]" style={{ borderBottom: '3px solid #BB8506', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>Add To Cart</button>

                </div>
            </div>
        </div>


    );
};

export default FoodCard;