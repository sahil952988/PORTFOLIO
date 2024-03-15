
import portfolioimg01 from "../Assets/portfolioimg01.png"
import portfolioimg02 from "../Assets/portfolioimg02.png"
import portfolioimg03 from "../Assets/portfolioimg03.png"
import portfolioimg04 from "../Assets/portfolioimg04.png"
import portfolioimg05 from "../Assets/portfolioimg05.png"
import "../style/Portfolio.css"

const Portfolio = () => {

  return (
    <>
      <div className=" bg-white 2xl:px-[200px] xl:px-[150px] lg:px-[50px] px-[30px] py-16 ">

        <h1 className='text-[20px]  text-[#000d6b]'>Explore my work samples that I have done so far</h1>
        <h1 className="text-[40px] font-bold">Portfolio</h1>

        <div className="item grid xl:grid-cols-3 lg:grid-cols-2 gap-5 pt-5">



          <div className="wrapper  ">

            <div className="image  bg-[#132347] px-5 py-5">
              <div className="img">
                <h1 className='text-[18px] text-[#e65f78] font-semibold'>Food Delivery E-commerce Website</h1>
                <p className='pt-3 text-white'>The Website created using React.js, Redux Toolkit and Reactstrap. Fully Responsive for all devices</p>

                <div className="skills flex space-x-5 pt-5">
                  <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>React Js</h1>
                  <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>Redux Toolkit</h1>
                  <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>Reactstrap</h1>
                </div>

                <div className=" pt-7">
                  <img src={portfolioimg01} alt="food delivery img" />
                </div>
              </div>
            </div>

            <div className="content">
              <div className="live_website pt-5 flex space-x-5">
                <a className='border-2 border-red-600 text-[18px] px-4 py-2 rounded-[8px]  text-white' href="https://pizza-delivery-alpha.vercel.app/Home" target="_blank">Live</a>

                <a className='border-2 border-red-600 text-[18px] px-4 py-2 rounded-[8px]  text-white' href="https://github.com/sahil952988" target="_blank">Github</a>
              </div>
            </div>

          </div>





          {/* ------ second work ------------ */}
          <div className="works bg-[#132347] px-5 py-5">
            <h1 className='text-[18px] text-[#e65f78] font-semibold'>Calculator Website</h1>
            <p className='pt-3 text-white'>The Website created using React.js, Redux Toolkit and Reactstrap. Fully Responsive for all devices</p>

            <div className="skills flex space-x-5 pt-5">
              <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>React Js</h1>
              <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>Math</h1>
              <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>Frontend</h1>
            </div>

            <div className="img pt-7">
              <img src={portfolioimg04} alt="food delivery img" />
            </div>


            <div className="live_website pt-5 flex space-x-5">
              <a className='border-2 border-red-600 text-[18px] px-4 py-2 rounded-[8px] text-white' href="https://calculator-five-ivory.vercel.app/" target="_blank">Live</a>
              <a className='border-2 border-red-600 text-[18px] px-4 py-2 rounded-[8px] text-white' href="https://github.com/sahil952988" target="_blank">Github</a>
            </div>

          </div>


          {/* ----- third work --------------- */}

          <div className="works bg-[#132347] px-5 py-5">
            <h1 className='text-[18px] text-[#e65f78] font-semibold'>Car Rent E-commerce Website</h1>
            <p className='pt-3 text-white'>The Website created using React.js, Redux Toolkit and Reactstrap. Fully Responsive for all devices</p>

            <div className="skills flex space-x-5 pt-5">
              <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>React Js</h1>
              <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>Frontend</h1>
              <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>Reactstrap</h1>
            </div>

            <div className="img pt-7">
              <img src={portfolioimg02} alt="food delivery img" />
            </div>


            <div className="live_website pt-5 flex space-x-5">
              <a className='border-2 border-red-600 text-[18px] px-4 py-2 rounded-[8px] text-white' href="https://cart-rent.vercel.app/" target="_blank">Live</a>
              <a className='border-2 border-red-600 text-[18px] px-4 py-2 rounded-[8px] text-white' href="https://github.com/sahil952988" target="_blank">Github</a>
            </div>

          </div>

          {/* ----- fourth work ------- */}
          <div className="works bg-[#132347] px-5 py-5" >
            <h1 className='text-[18px] text-[#e65f78] font-semibold'>Pre School Kider Website</h1>
            <p className='pt-3 text-white'>The Website created using React.js, Redux Toolkit and Reactstrap. Fully Responsive for all devices</p>

            <div className="skills flex space-x-5 pt-5">
              <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>React Js</h1>
              <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>Frontend</h1>
              <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>Reactstrap</h1>
            </div>

            <div className="img pt-7">
              <img src={portfolioimg05} alt="food delivery img" />
            </div>


            <div className="live_website pt-5 flex space-x-5">
              <a className='border-2 border-red-600 text-[18px] px-4 py-2 rounded-[8px] text-white' href="https://preschool-kider.vercel.app/Home" target="_blank">Live</a>
              <a className='border-2 border-red-600 text-[18px] px-4 py-2 rounded-[8px] text-white' href="https://github.com/sahil952988/preschool-kider" target="_blank">Github</a>
            </div>

          </div>


          {/* ------ Fifth Work -------------- */}
          <div className="works bg-[#132347] px-5 py-5" >
            <h1 className='text-[18px] text-[#e65f78] font-semibold'>Movie Website</h1>
            <p className='pt-3 text-white'>The Website created using React.js, Redux Toolkit and Reactstrap. Fully Responsive for all devices</p>

            <div className="skills flex space-x-5 pt-5">
              <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>React Js</h1>
              <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>Frontend</h1>
              <h1 className='bg-gray-400 text-white rounded-[8px] px-2 '>Reactstrap</h1>
            </div>

            <div className="img pt-7">
              <img src={portfolioimg03} alt="food delivery img" />
            </div>


            <div className="live_website pt-5 flex space-x-5">
              <a className='border-2 border-red-600 text-[18px] px-4 py-2 rounded-[8px] text-white' href="https://movie-project-delta.vercel.app/" target="_blank">Live</a>
              <a className='border-2 border-red-600 text-[18px] px-4 py-2 rounded-[8px] text-white' href="https://github.com/sahil952988" target="_blank">Github</a>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}
export default Portfolio