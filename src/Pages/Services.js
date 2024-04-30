import Aos from "aos";
import Header from "../Components/Header/Header"
import { useEffect } from "react";

const Services = () => {

  useEffect(() => {
    Aos.init({ duration: 1200, delay: 1, });
  }, [])
  return (
    <>

      <Header />

      <div className="pt-20 bg-white">
        <div data-aos='fade-up' className="heading  mb-20 xl:ml-[250px] lg:ml-[50px] ml-[50px]">
          <h1 className='text-[#e65f78] '>Services</h1>
          <h1 className='text-[30px] font-bold'>Quality Services</h1>
        </div>


        <div className="items 2xl:px-[200px] xl:px-[100px] lg:px-[50px] px-10 pt-5 py-20 grid xl:grid-cols-3 lg:grid-cols-2 gap-5">

          <div data-aos='fade-up' className="item01 shadow-lg ">
            <div className="pl-14 pt-5 pr-16 mb-5 space-y-5">
              <p className="text-[#e65f78] text-[40px] font-bold "><i class="fa-regular fa-lightbulb"></i></p>
              <p className=" text-[18px]">Web Design</p>
              <p className=" text-justify">I love designs and it's the first step before creating any website as I can give layout to my imagination. </p>
            </div>
          </div>


          {/* -------- 2 ------------- */}

          <div data-aos='fade-up' className="item02 shadow-lg ">
            <div className="pl-14 pt-5 pr-16 mb-5 space-y-5">
              <p className="text-[#e65f78] text-[40px] font-bold "><i class="fa-solid fa-laptop-code"></i></p>
              <p className=" text-[18px]">Web Development</p>
              <p className=" text-justify">I'm a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS , Tailwind CSS,JavaScript and React Js dabbling with Express JS and Node Js; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well. </p>
            </div>
          </div>

          {/* -------- 3 ------------- */}

          <div data-aos='fade-up' className="item03 shadow-lg ">
            <div className="pl-14 pt-5 pr-16 mb-5 space-y-5">
              <p className="text-[#e65f78] text-[40px] font-bold "><i class="fa-regular fa-paper-plane"></i></p>
              <p className=" text-[18px]">Problem Solving</p>
              <p className=" text-justify">I love solving problems whether programming problems or real life problems. </p>
            </div>
          </div>


        </div>

      </div>
    </>
  )
}
export default Services