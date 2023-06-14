import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
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
        </div>
    );
};

export default Home;