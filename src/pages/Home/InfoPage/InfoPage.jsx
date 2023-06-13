import chefServiceImage from '../../../assets/home/chef-service.jpg';

const InfoPage = () => {
    return (
        <div
            className="bg-cover bg-center h-[572px] mt-[90px] mb-[90px] flex items-center"
            style={{ backgroundImage: `url(${chefServiceImage})` }}
        >
            <div className="text-center bg-white text-black w-3/4 h-3/4 mx-auto my-auto flex justify-center items-center">
                <div>
                    <h1 className="text-4xl">Testyc Boss</h1>
                    <p className="mt-4 w-3/4 mx-auto">
                        Tastyc is a Restaurant WordPress Theme best suited for restaurant, cafe, seafood, coffee, pub, bars, bakery, pizza, bistro, coffee shop, fine dining, catering and any food business who need attractive and effective way to promote your food related services.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoPage;
