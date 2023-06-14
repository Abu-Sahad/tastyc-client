import SectionTittle from "../../../components/SectionTittle/SectionTittle";

import chef from '../../../assets/home/slide1.jpg'


const ChefRecommend = () => {
    return (
        <div className="mt-12 mb-12">
            <SectionTittle
                heading={'CHEF RECOMMENDS'}
                subHeading={'Should Try'}
            ></SectionTittle>

            <div className="grid md:grid-cols-3">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="w-full h-full">
                        <img src={chef} alt="Shoes" className="rounded-xl h-[300px] w-[432px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937]" style={{ borderBottom: '3px solid #BB8506', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>Add To Cart</button>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="w-full h-full">
                        <img src={chef} alt="Shoes" className="rounded-xl h-[300px] w-[432px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937]" style={{ borderBottom: '3px solid #BB8506', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>Add To Cart</button>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="w-full h-full">
                        <img src={chef} alt="Shoes" className="rounded-xl h-[300px] w-[432px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary bg-[#E8E8E8] text-[#BB8506] hover:bg-[#1F2937]" style={{ borderBottom: '3px solid #BB8506', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>Add To Cart</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommend;