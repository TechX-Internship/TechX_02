import React from 'react'
import MainBanner from '../(homepage)/mainbanner'
import Articals from '@/components/Articals'

const page = () => {
  return (
    <>
      <MainBanner title={'Blog'} />
      <Articals status={true} />
    </>
  )
}

export default page