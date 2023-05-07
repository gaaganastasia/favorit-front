import "./ImageSwiper.css";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";

function ImageSwiper(props) {
  // console.log(props.product)
  
  // const CarouselUI = ({ position, handleClick, children }) => (
  //   <>
  //     <div className="product__arrow product__arrow_left" onClick={handleClick} data-position={position - 1}></div>
  //     <div className="product__arrow product__arrow_right" onClick={handleClick} data-position={position + 1}></div>
  //     <div className="swiper__container">
  //         {children}
  //     </div>
  //   </>
  // );
  // const Carousel = makeCarousel(CarouselUI);

  const photoList = props.photos;

  return (
    <>
      {/* <div className="product__arrow product__arrow_left"></div>
      <div className="product__arrow product__arrow_right"></div> */}
      {(props.product && props.product.video) || (photoList && photoList.length !== 0) ? 
        <>
        <div className="product__arrow product__arrow_left"></div>
        <div className="product__arrow product__arrow_right"></div>
        <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={40}
            speed={1000}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".product__arrow_right",
              prevEl: ".product__arrow_left"
            }}
            modules={[Autoplay, Navigation]}
            className="swiper__container"
          >
          {
            props.product && props.product.mainImage &&
            <SwiperSlide className="swiper__element">
              <img alt="Фото товара" src={props.product.mainImage} className="swiper__img"></img>
            </SwiperSlide>
          }
          {
            (photoList && photoList.length !== 0) &&
            photoList.map((photo, i) => {
              return (
                <SwiperSlide key={i} className="swiper__element">
                  <img alt="Фото товара" src={photo.link} className="swiper__img"></img>
                </SwiperSlide>
              );
            })
          }
          {
            props.product && props.product.video &&
            <SwiperSlide className="swiper__element">
              <a target="_blank" href={props.product.video} className="swiper__video-link"></a>
            </SwiperSlide>
          }
        </Swiper>
        </>
        :
        <>
          {/* <div className="product__arrow product__arrow_left"></div>
          <div className="product__arrow product__arrow_right"></div> */}
          <img alt="Фото товара" src={props.product.mainImage} className="swiper__container"></img>
        </>
      }
    </>
  );
}

export default ImageSwiper;
