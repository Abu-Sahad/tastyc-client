import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import Featured from "../Featured/Featured";
import InfoPage from "../InfoPage/InfoPage";
import PopularItem from "../PopularItem/PopularItem";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <InfoPage></InfoPage>
            <PopularItem></PopularItem>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
        </div>
    );
};

export default Home;