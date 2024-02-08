
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import Routing from "../Routes/Routing"


const Layout = () => {
  return (
    <>
      <Routing />

      <div>
        <Header />
      </div>

      <div>
        <Footer />
      </div>


    </>
  )
}
export default Layout