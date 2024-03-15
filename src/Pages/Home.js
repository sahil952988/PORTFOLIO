import Header from "../Components/Header/Header"
import { Helmet } from "../Components/Helmet/Helmet"
import HomeSlider from "../Components/UI/HomeSlider"
import NeedaService from "../Components/UI/NeedaService"

import About from "./About"
import Contact from "./Contact"
import Portfolio from "./Portfolio"
import Services from "./Services"
import Testimonial from "./Testimonial"

const Home = () => {
  return (
    <>
      <Helmet title='Portfolio'>

        <HomeSlider />
        <Header />
        <About />
        <Services />
        <NeedaService />
        <Portfolio />
        <Testimonial />
        <Contact />
      </Helmet>
    </>
  )
}
export default Home