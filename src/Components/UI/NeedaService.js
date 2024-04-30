import { Link } from "react-router-dom"
import "../../style/NeedaService.css"
import { useEffect } from "react";
import Aos from "aos";

const NeedaService = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, delay: 1, });
  }, [])
  return (
    <>
      <div data-aos='fade-up' className="needaservice flex flex-col justify-center py-16 space-y-5">
        <div>
          <p data-aos='fade-up' className="text-white text-[40px] font-bold text-center">NEED A SERVICE ?</p>
        </div>
        <div data-aos='fade-up' className="button flex justify-center">
          <button className="rounded-full px-3 py-2 hover:bg-black hover:text-white font-bold bg-white"><Link to='/Contact'>SAY HELLO!</Link></button>
        </div>
      </div>
    </>
  )
}
export default NeedaService