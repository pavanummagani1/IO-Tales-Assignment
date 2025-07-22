import React from 'react'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroSection'
import ProductShowcase from '../components/ProductShowcase'
import AboutSection from '../components/About'
import Testimonials from '../components/Testimonials'
import FaqSection from '../components/FAQs'
import PartnerSection from '../components/PartnerSection'
import OurArticles from '../components/Ourarticles'
import Footer from '../components/Footer'
import CarouselSection from '../components/CarouselSection'

export const Homepage = () => {
  return (
    <>
    <Navbar/>
    <HeroCarousel/>
    <ProductShowcase/>
    <CarouselSection/>
    <AboutSection/>
    <Testimonials/>
    <FaqSection/>
    <PartnerSection/>
    <OurArticles/>
    <Footer/>
    </>
  )
}
