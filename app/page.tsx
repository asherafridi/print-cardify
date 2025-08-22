import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroBg from '@/public/assets/hero-bg.svg'
import frontBackImg from '@/public/assets/front-back-card-img.png'
import passportImg from '@/public/assets/passport-img.png'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='px-10 md:px-24 bg-slate-100 py-24 flex gap-10 items-center flex-wrap md:flex-nowrap'>
        <div className='md:w-1/2'>
          <h1 className='text-3xl md:text-5xl font-bold'>Automate Your Printing Tasks With <span className='text-blue-700'>Print Cardify</span></h1>
          <p className='mt-4 md:text-lg mb-5'>Our automated printing solutions provide advanced layouts for automatic front and back card printing as well as passport photo bunch printing. Say goodbye to manual effort with our streamlined process designed for efficiency, accuracy, and high-quality output. Whether you need cards in bulk or professional passport photo layouts, our technology ensures fast delivery and flawless results every time.</p>
        </div>
        <div className='hidden md:block md:w-1/2'>
          <img src='/assets/hero-bg.svg' className='w-4/5 m-auto' />
        </div>
      </div>
      <div className='flex justify-around px-24 py-24 flex-wrap gap-4'>

        <a href="front-back-card" className='w-[320px] h-[360px] py-5 rounded border bg-slate-50 hover:shadow-lg flex flex-col justify-between items-center'><Image alt='front-image' src={frontBackImg} className='w-[180px]' /><h3 className='text-center text-xl px-10 font-medium'>Front/Back Cards Bunch Maker </h3></a>
        <a href="passport-photo" className='w-[320px] h-[360px] py-5 rounded border bg-slate-50 hover:shadow-lg flex flex-col justify-between items-center'><Image alt='back-image' src={passportImg} className='w-[180px]' /><h3 className='text-center text-xl px-10 font-medium'>Passport Photo Bunch Maker</h3></a>

      </div>
      <Footer />
    </>
  )
}

export default Home