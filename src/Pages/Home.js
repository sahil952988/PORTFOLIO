import { Helmet } from "../Components/Helmet/Helmet"
import HomeSlider from "../Components/UI/HomeSlider"
import NeedaService from "../Components/UI/NeedaService"
import About from "./About"
import Services from "./Services"

const Home = () => {
  return (
    <>
      <Helmet title='Portfolio'>
        <HomeSlider />
        <About />
        <Services />
        <NeedaService />
      </Helmet>
    </>
  )
}
export default Home