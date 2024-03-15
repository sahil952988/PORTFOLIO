import { Navigate, Route, Routes } from "react-router-dom"
import About from "../Pages/About"
import Services from "../Pages/Services"
import Portfolio from "../Pages/Portfolio"
import Contact from "../Pages/Contact"
import Home from "../Pages/Home"
import Testimonial from "../Pages/Testimonial"



const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Testimonial' element={<Testimonial />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />

      </Routes>
    </>
  )
}
export default Routing