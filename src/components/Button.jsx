'use client'
import React from 'react'
import style from '../app/style/button.module.css'

function Button(props) {
    return (
        <button className={style.button}>{props.props} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M12 19.5C11.8013 19.5012 11.6069 19.4432 11.4413 19.3334C11.2758 19.2236 11.1468 19.067 11.0706 18.8835C10.9944 18.7001 10.9746 18.4981 11.0137 18.3033C11.0527 18.1086 11.1489 17.9299 11.29 17.79L16.59 12.5L11.29 7.21003C11.1261 7.01873 11.0405 6.77265 11.0502 6.52097C11.06 6.2693 11.1643 6.03056 11.3424 5.85246C11.5205 5.67437 11.7592 5.57004 12.0109 5.56032C12.2626 5.55059 12.5087 5.6362 12.7 5.80003L18.7 11.8C18.8862 11.9874 18.9907 12.2408 18.9907 12.505C18.9907 12.7692 18.8862 13.0227 18.7 13.21L12.7 19.21C12.5137 19.3948 12.2623 19.4989 12 19.5Z" fill="white" />
            <path d="M5.99996 19.5C5.80133 19.5012 5.60686 19.4431 5.44134 19.3333C5.27582 19.2235 5.14675 19.0669 5.07059 18.8835C4.99442 18.7 4.97461 18.4981 5.01368 18.3033C5.05275 18.1086 5.14893 17.9299 5.28996 17.79L10.59 12.5L5.28996 7.21C5.10165 7.0217 4.99586 6.7663 4.99586 6.5C4.99586 6.2337 5.10165 5.97831 5.28996 5.79C5.47826 5.6017 5.73365 5.49591 5.99996 5.49591C6.26626 5.49591 6.52165 5.6017 6.70996 5.79L12.71 11.79C12.8962 11.9774 13.0007 12.2308 13.0007 12.495C13.0007 12.7592 12.8962 13.0126 12.71 13.2L6.70996 19.2C6.61734 19.2945 6.5069 19.3697 6.38502 19.4212C6.26315 19.4727 6.13226 19.4995 5.99996 19.5Z" fill="white" />
        </svg> </button>
    )
}

export default Button