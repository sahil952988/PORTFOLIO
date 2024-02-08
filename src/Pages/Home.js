import HomeSlider from "../Components/UI/HomeSlider"
import NeedaService from "../Components/UI/NeedaService"
import About from "./About"
import Services from "./Services"

const Home = () => {
  return (
    <>
      <HomeSlider />
      <About />
      <Services />
      <NeedaService />
    </>
  )
}
export default Home