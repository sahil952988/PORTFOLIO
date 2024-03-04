import React from 'react'
import "../style/About.css"
import ava01 from "../Assets/ava01.jpg"
import certificate from "../Assets/MERNSTACK CERTIFICATE.pdf"
import cv from "../Assets/My resume.pdf"
import { Cursor, useTypewriter } from 'react-simple-typewriter'
const About = () => {

  const [text] = useTypewriter({
    words: ['Web Developer', 'Graphic Designer'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  return (
    <>
      <div className="bg-white py-16">

        <div className="heading mb-32 xl:ml-[280px] lg:ml-[50px] ml-[50px]">
          <h1 className='text-[#e65f78] '>BIOGRAPHY</h1>
          <h1 className='text-[30px] font-bold'>About Me</h1>
        </div>
        <div className="item lg:flex">

          <div className="left_side 2xl:ml-[280px] xl:ml-[120px] lg:ml-[50px] sm:ml-[100px] ml-5">
            <div className="img">
              <img className="absolute ml-7 mt-[-25px]  lg:w-[300px] sm:w-[350px] w-[300px] h-[400px]" src={ava01} alt="about" />

              <p className="border-[10px] border-[#cc7722]  lg:w-[290px] sm:w-[320px] w-[300px] h-[400px] ">
              </p>
            </div>

          </div>
          {/* ------------------right_side----------- */}
          <div className="sm:pl-[100px] pl-5 lg:mt-0 mt-16 ">

            <div className="Details flex ">
              <p className='text-[20px] font-semibold'>I'm Sahil Ali and</p>
              <h1>
                <span className='text-[20px] font-semibold ml-3 text-[#e65f78]'>{text}</span>
                <span><Cursor /></span>
              </h1>
            </div>


            <p className="pt-[45px] text-justify xl:pr-[350px] sm:pr-20 pr-5  text-[16px]">Hi! My name is Sahil Ali. I am a Web Developer, and I'm very passionate and dedicated to my work.As a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>

            <div className="flex pt-10 sm:pr-10  ">
              <div className="lef side space-y-2">
                <p><i class="fa-solid fa-gift"></i>  Birthday : 2003/01/01</p>
                <p><i class="fa-solid fa-envelope"></i> Mail: sahilacc000@gmail.com</p>
                <p><i class="fa-solid fa-location-dot"></i> Current Location:Kathmandu,Nepal</p>
                <p><i class="fa-solid fa-location-dot"></i>  Permanent Location:Bihar,India</p>
              </div>


              <div className="pl-6">
                <p><i class="fa-solid fa-calendar-days"></i>  Age: 20</p>
                <p className="py-2"><i class="fa-solid fa-gamepad"></i>  interests: Playstation, Reading</p>
                <p><i class="fa-solid fa-graduation-cap"></i>  Degree: Web Developer</p>
                <p className="py-2"> <i class="fa-solid fa-phone"></i> Phone: +977 9809364854</p>
              </div>
            </div>

            <div className="downloads flex space-x-5">
              <a href={certificate} download="certificate" target='_blank'>
                <button className="bg-[#e65f78] text-white mt-5 h-[60px]  px-[12px]">Download Certificate</button>
              </a>

              <a href={cv} download="Sahil ALi -resume" target='_blank'>
                <button className="bg-[#e65f78] text-white mt-5 h-[60px]  px-[12px]">Download Resume</button>
              </a>

            </div>
          </div>



        </div>
      </div>
    </>
  )
}
export default About