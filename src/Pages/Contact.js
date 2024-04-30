import {
  Card,
  Input,
  Button,
} from "@material-tailwind/react";
import "../style/Contact.css"
import { useFormik } from "formik";
import * as Yup from 'yup';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, delay: 1, });
  }, [])

  const crudSchema = Yup.object().shape({
    username: Yup.string().min(5).max(25).required(),
    email: Yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'please provide valid email').required(''),
    textarea: Yup.string().min(20).max(100).required(),
  })
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      textarea: '',
    },
    onSubmit: (val) => {
      console.log(val);
    },
    validationSchema: crudSchema
  });
  return (
    <>

      <Header />

      <div className="contact py-20">
        <h1 data-aos='fade-up' className="text-[40px] font-bold text-center text-white pb-20 font-serif">SAY HELLO!</h1>

        <div className="form flex justify-center sm:mx-0 mx-5">
          <form data-aos='fade-up' onSubmit={formik.handleSubmit} className="lg:w-[50%] sm:w-[75%] w-full bg-white rounded-xl ">

            <div className="form_itmes flex  flex-col gap-4 mx-5 mt-5">
              <div className="flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-5">
                <div className="w-full">
                  <Input
                    name='username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    size="lg" label="Your Name" />
                  {formik.errors.email && formik.touched.email && <h1 className='text-pink-800'>{formik.errors.username}</h1>}
                </div>

                <div className="w-full">
                  <Input
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    size="lg" label="Email" />
                  {formik.errors.email && formik.touched.email && <h1 className='text-pink-800'>{formik.errors.email}</h1>}
                </div>
              </div>

              <div>
                <textarea
                  name="textarea"
                  value={formik.values.textarea}
                  onChange={formik.handleChange}
                  className='border-[1.5px] border-gray-600 outline-none rounded-[10px] px-5 pt-5 w-full'
                  id="Message" cols="30" rows="10" placeholder='Message' required></textarea>
                {formik.errors.textarea && formik.touched.textarea && <h1 className='text-pink-800'>{formik.errors.textarea}</h1>}
              </div>
            </div>

            <div className="sumbit_btn my-5 mx-5 ">
              <Button className="w-full" type='submit'>
                Sumbit
              </Button>
            </div>

          </form>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </>

  )
}
export default Contact