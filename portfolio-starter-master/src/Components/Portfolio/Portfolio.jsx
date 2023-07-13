import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/BlogApp.png"
import Ecommerce from "../../img/Portfolio1.png"
import HOC from "../../img/weather.png"
import MusicApp from "../../img/BookCollection.png"
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="portfolio" id='Projects'>
        {/* Heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <a href='https://blogapplicationmernstack.netlify.app/' target='_blank'>
                    <img src={Sidebar} alt="" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://github.com/ssbhardwaj/Book_Store' target='_blank'>
                    <img src={Ecommerce} alt="" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href='https://github.com/ssbhardwaj/Book_Store' target='_blank'>
                    <img src={MusicApp} alt="" />
                </a>
                
            </SwiperSlide>
            <SwiperSlide>
            <a href='https://weathersitessb.netlify.app/' target='_blank'>
            <img src={HOC} alt="" />
                </a>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio
