import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import Featured from "../Featured/Featured";
import InfoPage from "../InfoPage/InfoPage";
import PopularItem from "../PopularItem/PopularItem";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Tastyc Restaurant | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <InfoPage></InfoPage>
            <PopularItem></PopularItem>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;