'use client'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import style from '../app/style/header.module.css'
import Button from './Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {

  const pathname = usePathname()

  return (
    <header className='absolute w-100 top-0 z-10' style={{ borderBottom: '1px solid #E6E6E6' }}>
      <div className="container">
        <div className={`${style.header} d-flex align-items-center justify-content-between my-3`}>
          <div className={style.logo}>
            <img src='./assets/logo.png' alt="" />
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <ul className='d-flex gap-4 mb-0'>
              <li><Link href="/" className={`${style.tag} ${pathname === '/' ? 'font-bold active' : 'fw-light'} `}>Home</Link></li>
              <li><Link href="/about" className={`${style.tag} ${pathname === '/about' ? 'font-bold active' : 'fw-light'} `}>About Us</Link></li>
              <li><Link href="/service" className={`${style.tag} ${pathname === '/service' ? 'font-bold active' : 'fw-light'} `}>Services</Link></li>
              <li><Link href="" className={`${style.tag} fw-light `}>Reviews</Link></li>
              <li><Link href="/blog" className={`${style.tag} ${pathname === '/blog' ? 'font-bold active' : 'fw-light'} `}>Blog</Link></li>
              <li><Link href="/contact" className={`${style.tag} ${pathname === '/contact' ? 'font-bold active' : 'fw-light'} `}>Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <Button props={'Get a Appointment'} status={true} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header