
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

const SwibarCards = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="../images/image1.jpg" alt="" style={{ width: "100%", height: "100%" }} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../images/image2.jpg" alt="" style={{ width: "100%", height: "100%" }} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../images/image3.jpg" alt="" style={{ width: "100%", height: "100%" }} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../images/image4.jpg" alt="" style={{ width: "100%", height: "100%" }} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../images/image5.jpg" alt="" style={{ width: "100%", height: "100%" }} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../images/image6.jpg" alt="" style={{ width: "100%", height: "100%" }} />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default SwibarCards;
