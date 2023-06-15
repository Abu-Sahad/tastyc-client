import { useEffect, useState } from "react";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <SectionTittle subHeading='What Our Clients Say' heading='TESTIMONIALS'></SectionTittle>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="mx-24 my-16 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    className="text-[#CD9003] my-10"
                                    readOnly
                                />
                                <p>{review.details}</p>
                                <h3 className="text-[#CD9003] text-3xl">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;