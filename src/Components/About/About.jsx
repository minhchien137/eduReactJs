import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
            <img src= {about_img} alt="" className='about-img'  />
            <img src= {play_icon} alt="" className='play-icon' />
      </div>

      <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow</h2>
            <p>
            XYZ University of Technology is one of the leading educational institutions in Vietnam, distinguished by its advanced training programs and a team of highly experienced lecturers. With a mission to nurture high-quality human resources, the university continuously innovates its teaching methods, emphasizing practical training and strong connections with the industry. Students here not only gain in-depth professional knowledge but also develop essential soft skills, creative thinking, and the adaptability needed to thrive in modern work environments.
            </p>

            <p>
            "With a spacious, modern, and green campus, XYZ University of Technology offers students an ideal learning environment. Classrooms are equipped with advanced teaching facilities, a state-of-the-art digital library, and internationally standardized laboratories, enabling students to effectively access and apply their knowledge. In addition, the on-campus dormitories and multi-functional sports complex contribute to a dynamic and well-rounded student life.
            </p>


     </div>

    </div>
  )
}

export default About
