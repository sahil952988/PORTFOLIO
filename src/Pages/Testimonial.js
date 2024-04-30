import React, { useEffect } from 'react'
import testimonialimg01 from "../Assets/testimonialimg01.png"
import testimonialimg02 from "../Assets/testimonialimg02.png"
import testimonialimg03 from "../Assets/testimonialimg03.png"
import testimonialimg04 from "../Assets/testimonialimg04.png"
import Slider from 'react-slick'
import Header from '../Components/Header/Header'
import Aos from 'aos'

const Testimonial = () => {

  useEffect(() => {
    Aos.init({ duration: 1200, delay: 1, });
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>

      <Header />

      <h1 data-aos='fade-up' className='xl:px-[220px] md:px-[100px] px-[50px] bg-white text-[40px] font-bold pt-20'>TESTIMONIALS</h1>

      <Slider {...settings} className="overflow-hidden xl:px-[220px] md:px-[100px] px-[50px] bg-white py-20" >
        <div className="testimonial py-4 px-3 w-[25%]">

          <div className="mt-5 flex justify-center gap-4">
            <img src={testimonialimg01} alt="" className="w-[160px] h-[160px] rounded-full" />
          </div>
          <div className=''>

            <h6 className="mb-0 mt-3  text-[#000d6b] text-center text-[26px] font-semibold">Jessica Jones</h6>
            <p className="section__description text-[#6f6f6f] text-center text-[13px] font-bold">CEO,RANDOM COMPANY</p>

          </div>

          <h1 className="section__description md:text-[14.4px] text-[17px] text-[#7c8a97] font-semibold mt-5">
            <i class="fa-solid fa-quote-left"></i>
            <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ad, omnis totam iusto quia? Excepturi itaque quaerat, quia unde delectus rem error dignissimos in iusto.</span>
            <i class="fa-solid fa-quote-right"></i>
          </h1>
        </div>

        {/* -----------testimonial 2 --------------------- */}

        <div className="testimonial py-4 px-3 w-[25%]">

          <div className="mt-5 flex justify-center gap-4">
            <img src={testimonialimg02} alt="" className="w-[160px] h-[160px] rounded-full" />
          </div>
          <div className=''>

            <h6 className="mb-0 mt-3  text-[#000d6b] text-center text-[26px] font-semibold">Peter Parker</h6>
            <p className="section__description text-[#6f6f6f] text-center text-[13px] font-bold">CEO,RANDOM COMPANY</p>

          </div>

          <h1 className="section__description md:text-[14.4px] text-[17px] text-[#7c8a97] font-semibold mt-5">
            <i class="fa-solid fa-quote-left"></i>
            <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ad, omnis totam iusto quia? Excepturi itaque quaerat, quia unde delectus rem error dignissimos in iusto.</span>
            <i class="fa-solid fa-quote-right"></i>
          </h1>
        </div>
        {/* -----------testimonial 3 --------------------- */}

        <div className="testimonial py-4 px-3 w-[25%]">

          <div className="mt-5 flex justify-center gap-4">
            <img src={testimonialimg03} alt="" className="w-[160px] h-[160px] rounded-full" />
          </div>
          <div className=''>

            <h6 className="mb-0 mt-3  text-[#000d6b] text-center text-[26px] font-semibold ">Micheal Clark</h6>
            <p className="section__description text-[#6f6f6f] text-center text-[13px] font-bold">CEO,RANDOM COMPANY</p>

          </div>

          <h1 className="section__description md:text-[14.4px] text-[17px] text-[#7c8a97] font-semibold mt-5">
            <i class="fa-solid fa-quote-left"></i>
            <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ad, omnis totam iusto quia? Excepturi itaque quaerat, quia unde delectus rem error dignissimos in iusto.</span>
            <i class="fa-solid fa-quote-right"></i>
          </h1>
        </div>


        {/* -----------testimonial 4 --------------------- */}


        <div className="testimonial py-4 px-3 w-[25%]">

          <div className="mt-5 flex justify-center gap-4">
            <img src={testimonialimg04} alt="" className="w-[160px] h-[160px] rounded-full" />
          </div>
          <div className=''>

            <h6 className="mb-0 mt-3  text-[#000d6b] text-center text-[26px] font-semibold">Tom Aldahn</h6>
            <p className="section__description text-[#6f6f6f] text-center text-[13px] font-bold">CEO,RANDOM COMPANY</p>

          </div>

          <h1 className="section__description md:text-[14.4px] text-[17px] text-[#7c8a97] font-semibold mt-5">
            <i class="fa-solid fa-quote-left"></i>
            <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ad, omnis totam iusto quia? Excepturi itaque quaerat, quia unde delectus rem error dignissimos in iusto.</span>
            <i class="fa-solid fa-quote-right"></i>
          </h1>
        </div>
      </Slider>

    </>
  )
}
export default Testimonial