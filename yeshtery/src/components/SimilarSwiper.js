
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";

const SimilarSwiper = () => {
    return (

        <div className="container similar mt-4 mb-4">
            <div className="row">
                <h1 className="titleSimilar">Similar Products</h1>
                <span className="subSimilar">You may like these products</span>
            </div>

            <div className="SimilarSwiper mt-3">

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <div className="similarCard">
                            <div className="similarImage">
                                <img src="images/similar1.webp" alt="" />
                                <div className="disSimilar mt-3">
                                    <h5 className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    </h5>
                                    <div className="d-flex">
                                        <span className="Price ms-2">9,999 <span className="sticer">LE</span></span>
                                        <del className="oldPrice ms-3">9,999 <span className="sticer">LE</span></del>
                                        <span id="offer" className="ms-3">30% Off</span>
                                        <span id="handlImage" className="ms-3 ">
                                            <img src="images/adidas.png" alt="" />
                                        </span>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="similarCard">
                            <div className="similarImage">
                                <img src="images/similar2.jpg" alt="" />
                                <div className="disSimilar mt-3">
                                    <h5 className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    </h5>
                                    <div className="d-flex">
                                        <span className="Price ms-2">9,999 <span className="sticer">LE</span></span>
                                        <del className="oldPrice ms-3">9,999 <span className="sticer">LE</span></del>
                                        <span id="offer" className="ms-3">30% Off</span>
                                        <span id="handlImage" className="ms-3 ">
                                            <img src="images/adidas.png" alt="" />
                                        </span>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="similarCard">
                            <div className="similarImage">
                                <img src="images/similar3.jpg" alt="" />
                                <div className="disSimilar mt-3">
                                    <h5 className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    </h5>
                                    <div className="d-flex">
                                        <span className="Price ms-2">9,999 <span className="sticer">LE</span></span>
                                        <del className="oldPrice ms-3">9,999 <span className="sticer">LE</span></del>
                                        <span id="offer" className="ms-3">30% Off</span>
                                        <span id="handlImage" className="ms-3 ">
                                            <img src="images/adidas.png" alt="" />
                                        </span>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="similarCard">
                            <div className="similarImage">
                                <img src="images/similar4.jpg" alt="" />
                                <div className="disSimilar mt-3">
                                    <h5 className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    </h5>
                                    <div className="d-flex">
                                        <span className="Price ms-2">9,999 <span className="sticer">LE</span></span>
                                        <del className="oldPrice ms-3">9,999 <span className="sticer">LE</span></del>
                                        <span id="offer" className="ms-3">30% Off</span>
                                        <span id="handlImage" className="ms-3 ">
                                            <img src="images/adidas.png" alt="" />
                                        </span>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </SwiperSlide>

                </Swiper>


            </div>
        </div>
    )
}

export default SimilarSwiper;
