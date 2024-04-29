import React from 'react'
import "../style/Contact.css"
import {
  Card,
  CardBody,
  CardFooter,
  Input,
  Button,
} from "@material-tailwind/react";
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact py-20">
        <h1 className="text-[40px] font-bold text-center text-white pb-20 font-serif">SAY HELLO!</h1>

        <div className="form flex justify-center sm:mx-0 mx-5">
          <Card className="lg:w-[50%] sm:w-[75%] w-full">

            <CardBody className="flex  flex-col gap-4">
              <div className="flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-5">
                <Input label="Name" size="lg" required />
                <Input label="Email" size="lg" required />
              </div>
              <textarea className='border-[1.5px] border-gray-600 outline-none rounded-[10px] px-5 pt-5' id="Message" cols="30" rows="10" placeholder='Message' required></textarea>
            </CardBody>

            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth>
                Submit
              </Button>
            </CardFooter>

          </Card>
        </div>

        <div className="Footer">
          <Footer />
        </div>


      </div>
    </>
  );
}
export default Contact