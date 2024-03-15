import React from 'react'
import "../../style/HomeSlider.css"
import Slider from 'react-slick'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Link } from "react-router-dom";



const HomeSlider = () => {

  const [text] = useTypewriter({
    words: ['Frontend Developer', 'Web Designer', 'Backend Developer'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  })

  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <>
      <Slider {...settings} className="overflow-hidden">

        <div className="slider_01 text-white h-[825px]">
          <div className="Heading flex justify-between">
            <p className='text-[60px] pl-10 pt-5 font-bold'><i class="fa-solid fa-bolt"></i></p>
          </div>

          <div className="Details 2xl:ml-[230px] sm:ml-[100px] ml-[50px] mt-[180px]">
            <p className='text-[50px] font-semibold'>I'm Sahil Ali</p>
            <h1>
              <span className='text-[30px] font-semibold'>{text}</span>
              <span><Cursor /></span>
            </h1>
            <button className='border-2 border-white px-4 py-2 font-semibold mt-4'>HIRE ME</button>
          </div>

        </div>

        {/* ---------slider 2 ------------ */}

        <div className="slider_02 text-white h-[825px]">
          <div className="Heading flex justify-between">
            <p className='text-[60px] pl-10 pt-5 font-bold'><i class="fa-solid fa-bolt"></i></p>
          </div>

          <div className="Details 2xl:ml-[230px] sm:ml-[100px] ml-[50px] mt-[180px]">
            <p className='text-[50px] font-semibold'>I'm Sahil Ali</p>
            <h1>
              <span className='text-[30px] font-semibold'>{text}</span>
              <span><Cursor /></span>
            </h1>
            <button className='border-2 border-white px-4 py-2 font-semibold mt-4'> <Link to="/Contact"><p>Hire Me</p></Link></button>
          </div>

        </div>

        {/* ----------- slider 03 -------------- */}


        <div className="slider_03 text-white h-[825px]">
          <div className="Heading flex justify-between">
            <p className='text-[60px] pl-10 pt-5 font-bold'><i class="fa-solid fa-bolt"></i></p>

          </div>

          <div className="Details 2xl:ml-[230px] sm:ml-[100px] ml-[50px] mt-[180px]">
            <p className='text-[50px] font-semibold'>I'm Sahil Ali</p>
            <h1>
              <span className='text-[30px] font-semibold'>{text}</span>
              <span><Cursor /></span>
            </h1>
            <button className='border-2 border-white px-4 py-2 font-semibold mt-4'>HIRE ME</button>
          </div>

        </div>

      </Slider>


    </>
  )
}
export default HomeSlider