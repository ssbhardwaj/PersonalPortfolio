import React from 'react'
import './SoftSkills.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic4 from "../../img/we.jpg"
import profilePic3 from "../../img/tw.jpg"
import profilePic2 from "../../img/tm.jpg"
import profilePic1 from "../../img/l.jpg"
import profilePic7 from "../../img/hw.jpg"
import { Pagination } from "swiper"
import 'swiper/css/pagination'
import 'swiper/css'

const SoftSkills = () => {
  const s_skills = [
    {
      img:profilePic1,
      tpye:"Leadership",
      review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione, doloribus molestiae obcaecati incidunt error maxime placeat! Non adipisci nesciunt pariatur quo natus, earum sequi numquam nihil repellat ad exercitationem.",
    },
    {
      img:profilePic2,
      tpye:"Time Management",
      review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione, doloribus molestiae obcaecati incidunt error maxime placeat! Non adipisci nesciunt pariatur quo natus, earum sequi numquam nihil repellat ad exercitationem.",
    },
    {
      img:profilePic3,
      tpye:"Team Work",
      review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione, doloribus molestiae obcaecati incidunt error maxime placeat! Non adipisci nesciunt pariatur quo natus, earum sequi numquam nihil repellat ad exercitationem.",
    },
    {
      img:profilePic4,
      tpye:"Work Ethics",
      review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione, doloribus molestiae obcaecati incidunt error maxime placeat! Non adipisci nesciunt pariatur quo natus, earum sequi numquam nihil repellat ad exercitationem.",
    },
    {
      img:profilePic7,
      tpye:"Hard Work",
      review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione, doloribus molestiae obcaecati incidunt error maxime placeat! Non adipisci nesciunt pariatur quo natus, earum sequi numquam nihil repellat ad exercitationem.",
    },
  ]
  return (
    <div className="t-wrapper" id='SoftSkills'>
        <div className="t-heading">
          <span> A few </span>
          <span> Soft Skills </span>
          <span> within me.....</span>
          <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
          <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>
        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
          {
            s_skills.map((client, index)=>{
              return(
                <SwiperSlide key={index}>
                  <div className="testimonial">
                    <img src={client.img} alt="" />
                    <span>{client.tpye}</span>
                    {/* <span>{client.review}</span> */}
                  </div>
                </SwiperSlide>
              ) 
            })
          }
        </Swiper>
    </div>
  )
}

export default SoftSkills
