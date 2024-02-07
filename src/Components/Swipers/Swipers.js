import React from 'react'
import "./Swipers.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { testimonial } from '../../../../clients/src/Static/db';
const Swipers = () => {
  return (
    <div className='swiper'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      {
        testimonial.map((testimonial,index)=>{
          return (
            <SwiperSlide key={index} >
            <div className='testimonial_card' > 
            <h3>{testimonial.title}</h3>
             <h4> {testimonial.star}  </h4>
              <img src={testimonial.img} alt='' />
              <h5>{testimonial.name}</h5>
              <p>{testimonial.details}</p>
            </div>
  
          </SwiperSlide>
          )
        })
      }
      </Swiper>

    </div>
  )
}

export default Swipers