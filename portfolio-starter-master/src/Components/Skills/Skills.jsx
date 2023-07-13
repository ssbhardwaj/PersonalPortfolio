import React from 'react'
import './Skills.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic6 from "../../img/nodejs.png"
import profilePic1 from "../../img/cpp.png"
import profilePic8 from "../../img/bootstrap.png"
import profilePic4 from "../../img/css.png"
import profilePic7 from "../../img/expressjs.png"
import profilePic9 from "../../img/github1.png"
import profilePic3 from "../../img/html.png"
import profilePic2 from "../../img/java.png"
import profilePic5 from "../../img/javascript.png"
import { Pagination } from "swiper"
import 'swiper/css/pagination'
import 'swiper/css'

const SoftSkills = () => {
  const s_skills = [
    {
      img:profilePic1,
      tpye:"CSS",
      review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione, doloribus molestiae obcaecati incidunt error maxime placeat! Non adipisci nesciunt pariatur quo natus, earum sequi numquam nihil repellat ad exercitationem.",
    },
    {
      img:profilePic2,
      tpye:"Bootstrap",
      review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione, doloribus molestiae obcaecati incidunt error maxime placeat! Non adipisci nesciunt pariatur quo natus, earum sequi numquam nihil repellat ad exercitationem.",
    },
    {
      img:profilePic3,
      tpye:"C++",
      review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione, doloribus molestiae obcaecati incidunt error maxime placeat! Non adipisci nesciunt pariatur quo natus, earum sequi numquam nihil repellat ad exercitationem.",
    },
    {
      img:profilePic4,
      tpye:"Node JS",
      review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione, doloribus molestiae obcaecati incidunt error maxime placeat! Non adipisci nesciunt pariatur quo natus, earum sequi numquam nihil repellat ad exercitationem.",
    },
    {
      img:profilePic5,
      tpye:"ExpressJS",
      review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione, doloribus molestiae obcaecati incidunt error maxime placeat! Non adipisci nesciunt pariatur quo natus, earum sequi numquam nihil repellat ad exercitationem.",
    },
    {
      img:profilePic6,
      tpye:"GitHub",
      review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione, doloribus molestiae obcaecati incidunt error maxime placeat! Non adipisci nesciunt pariatur quo natus, earum sequi numquam nihil repellat ad exercitationem.",
    },
    {
      img:profilePic7,
      tpye:"HTML",
      review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione, doloribus molestiae obcaecati incidunt error maxime placeat! Non adipisci nesciunt pariatur quo natus, earum sequi numquam nihil repellat ad exercitationem.",
    },
    {
      img:profilePic8,
      tpye:"JAVA",
      review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione, doloribus molestiae obcaecati incidunt error maxime placeat! Non adipisci nesciunt pariatur quo natus, earum sequi numquam nihil repellat ad exercitationem.",
    },
    {
      img:profilePic9,
      tpye:"JAVASCRIPT",
      review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla ratione, doloribus molestiae obcaecati incidunt error maxime placeat! Non adipisci nesciunt pariatur quo natus, earum sequi numquam nihil repellat ad exercitationem.",
    },
  ]
  return (
    <div className="t-wrapper" id='SoftSkills'>
        <div className="t-heading">
          <span> Few </span>
          <span> Skills </span>
          <span> which I am learning and trying to be better.....</span>
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
