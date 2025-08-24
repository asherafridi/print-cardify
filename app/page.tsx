import Navbar from '@/components/Navbar'
import {Footer} from '@/components/Footer'
import frontBackImg from '@/public/assets/front-back-card-img.png'
import passportImg from '@/public/assets/passport-img.png'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </>
  )
}

export default Home