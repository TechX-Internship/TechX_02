'use client'
import React from 'react'
import style from '@/app/style/text.module.css'
import Button from '@/components/Button'
import { usePathname } from 'next/navigation'

const MainBanner = ({ title }) => {
    const pathname = usePathname()
    return (
        <section className={`${style.bg01} overflow-hidden`}>
            <div className="container pt-28">
                <div className={`row`}>
                    <div className="flex col-6 justify-center flex-col">
                        {
                            pathname === '/' ?
                                <>
                                    <p className={`${style.Subdsc} mb-0`}>Excellence in Healthcare Services</p>
                                    <h1 className={`${style.Title}`}>Your Wellness <span style={{ borderBottom: '3px solid #72569D' }}>Journey</span> Begins Here</h1>
                                    <p className={`${style.Dsc} mb-0`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat vel tortor aliquam ornare. Vestibulum blandit lorem non sodales molestie. Phasellus nec finibus nulla.</p>
                                    <div className='mt-8'><Button props='Get a Appointment' status={true}/></div>
                                </>
                                :
                                <>
                                    <h1 className={`${style.Title} capitalize`}>{title}</h1>
                                    <p className='text-[25px] font-normal text-[#1E144F]'>Home / <span className='text-[25px] font-bold capitalize'>{title}</span> </p>
                                </>
                        }

                    </div>
                    <div className={`${style.bgGra} col-6 ms-auto relative`} style={{
                        borderRadius: '49.125rem', height: '44.0625rem'
                    }}>
                        <img src="./assets/Banner.png" className={`${style.image}`} alt="" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default MainBanner