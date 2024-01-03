import React from 'react'
import MainBanner from '../(homepage)/mainbanner'
import Consulting from '@/components/consulting'
import Say from '@/components/says'

const page = () => {
  return (
    <>
      <MainBanner title={`Service's`} />
      <Consulting status={false} />
      <Say />
    </>
  )
}

export default page