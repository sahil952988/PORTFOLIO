import { Helmet } from "../Components/Helmet/Helmet"
import HomeSlider from "../Components/UI/HomeSlider"
import NeedaService from "../Components/UI/NeedaService"
import Testimonial from "../Components/UI/Testimonial"
import About from "./About"
import Contact from "./Contact"
import Portfolio from "./Portfolio"
import Services from "./Services"

const Home = () => {
  return (
    <>
      <Helmet title='Portfolio'>
        <HomeSlider />
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