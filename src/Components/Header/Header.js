import React, { useRef } from 'react'
import "../../style/Header.css"
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';


const Header = () => {

  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  return (
    <>
      <Headroom>
        <div className="main fixed w-full flex justify-between md:bg-[#212529] bg-white">

          <div className="lg:py-4 py-3 lg:pl-12 ml-3 md:hidden">
            <p className="logo text-[#FE5D37] lg:text-[40px] text-[25px] font-bold space-x-2"><i class="fa-solid fa-bolt-lightning"></i> </p>
          </div>

          <div className="hidden lg:block ml-[200px]">
            <div className=" flex space-x-7 font-semibold cursor-pointer py-4 text-white">
              <Link to="/Home"> <p className='hover:text-[#FE5D37] focus:text-[#FE5D37]'>Home</p></Link>
              <Link to="/About"><p className='hover:text-[#FE5D37]   '>About Me</p></Link>
              <Link to="/Services"><p className='hover:text-[#FE5D37]'>Services</p></Link>
              <Link to="/Portfolio"><p className='hover:text-[#FE5D37]'>Portfolio</p></Link>
              <Link to="/Testimonial"><p className='hover:text-[#FE5D37]'>Testimonial</p></Link>
              <Link to="/Contact"><p className='hover:text-[#FE5D37]'>Contact</p></Link>

            </div>
          </div>



          <div className="menu lg:hidden   rounded-[15px] px-3  mr-5 mb-3 mt-2 " onClick={toggleMenu}>
            <p className='text-[30px]'><i class="fa-solid fa-bars"></i></p>
          </div>
        </div >


        {/* ============  MOBILE MUNEU ============ */}

        <div className="Nav  lg:hidden" onClick={toggleMenu} ref={menuRef}>
          <div className=" flex flex-col space-y-7 bg-[#212529] text-white font-semibold cursor-pointer pl-5 py-10 ">
            <Link to="/Home"> <p className='hover:bg-gray-500 py-3 pl-2'>Home</p></Link>
            <Link to="/AboutUs"><p className='hover:bg-gray-500 py-3 pl-2   '>About Me</p></Link>
            <Link to="/Classes"><p className='hover:bg-gray-500 py-3  pl-2'>Services</p></Link>
            <Link to="/Classes"><p className='hover:bg-gray-500 py-3  pl-2'>Portfolio</p></Link>
            <Link to="/Classes"><p className='hover:bg-gray-500 py-3  pl-2'>Testimonial</p></Link>
            <Link to="/Classes"><p className='hover:bg-gray-500 py-3  pl-2'>Contact</p></Link>
          </div>
        </div>
      </Headroom>
    </>
  )
}
export default Header