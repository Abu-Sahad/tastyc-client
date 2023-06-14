import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import featureImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured pt-20 bg-fixed text-white mb-20 bg-slate-500 bg-opacity-50">
            <SectionTittle subHeading="Check it out" heading="from our menu"></SectionTittle>
            <div className="md:flex justify-center items-center px-36 pt-12 pb-20">
                <div className="w-full h-full">
                    <img className="" src={featureImg} alt="" />
                </div>
                <div className="ms-10 space-y-4">
                    <h3>March 20, 2023</h3>
                    <h3 className="uppercase">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quasi natus error mollitia atque repellendus fugit delectus aspernatur doloremque pariatur voluptates, tempora in. Veniam placeat ipsum animi voluptate debitis minima.</p>
                    <button className="p-3  hover:bg-[#1F2937] rounded-xl" style={{ borderBottom: '3px solid #FFFFFF', borderTop: 'none', borderLeft: 'none', borderRight: 'none', }}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;