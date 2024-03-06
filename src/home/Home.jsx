import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import HeroBg from './../assets/hero-bg.svg'
import frontBackImg from './../assets/front-back-card-img.png'
import passportImg from './../assets/passport-img.png'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='px-10 md:px-24 bg-slate-100 py-24 flex gap-10 items-center flex-wrap md:flex-nowrap'>
        <div className='md:w-1/2'>
          <h1 className='text-3xl md:text-5xl font-bold leading-1'>Automate Your Printing Tasks With <span className='text-blue-700'>Print Cardify</span></h1>
          <p className='mt-4 md:text-lg mb-5'>Our automated printing solutions revolutionize your card production process, ensuring seamless quality and timely delivery. Say goodbye to manual tasks and hello to streamlined operations. Let's elevate your printing experience together.</p>
          <Link to="contact-us" className='mt-24 px-12 py-4 bg-blue-600 text-white rounded hover:bg-blue-500'>Contact Us</Link>
        </div>
        <div className='hidden md:block md:w-1/2'>
          <img src={HeroBg} className='w-4/5 m-auto'/>
        </div>
      </div>
      <div className='flex justify-around px-24 py-24 flex-wrap gap-4'>
        
      <Link to="front-back-card" className='w-[320px] h-[360px] py-5 rounded border bg-slate-50 hover:shadow-lg flex flex-col justify-between items-center'><img src={frontBackImg} className='w-[180px]'/><h3 className='text-center text-xl px-10 font-medium'>Front/Back Cards Bunch Maker </h3></Link>
      <Link to="passport-photo"  className='w-[320px] h-[360px] py-5 rounded border bg-slate-50 hover:shadow-lg flex flex-col justify-between items-center'><img src={passportImg} className='w-[180px]'/><h3 className='text-center text-xl px-10 font-medium'>Passport Photo Bunch Maker</h3></Link>

      </div>
      <Footer />
    </>
  )
}

export default Home