import React from 'react'
import MainBanner from '../(homepage)/mainbanner'
import About from '@/components/About'
import Vision from './vision'
import AboutDsc from '@/components/AboutDsc'
import Contact from '@/components/contact'

const page = () => {
  return (
    <>
      <MainBanner title={'About Us'} />
      <About />
      <Vision />
      <AboutDsc />
      <Contact />
    </>
  )
}

export default page