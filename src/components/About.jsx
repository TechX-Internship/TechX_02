import React from 'react'
import style from '@/app/style/text.module.css'
import Button from './Button'

const About = ({ status }) => {
    return (
        <section className={`container py-20`}>
            <div className="row">
                <div className="col-6 px-3">
                    <div className="img">
                        <img src="./assets/AboutImg01.png" style={{ width: '30.3125rem', height: '14.25rem', borderRadius: '0.4rem', borderRight: '3px solid #1E144F' }} alt="" />
                        <div className="d-flex my-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="194" height="194" viewBox="0 0 194 194" fill="none">
                                <g opacity="0.5">
                                    <path d="M76.9355 64.8384C77.1313 64.2914 77.5085 63.8279 78.0042 63.5249C78.4999 63.2218 79.0843 63.0975 79.6605 63.1725C80.2366 63.2476 80.7697 63.5174 81.1713 63.9373C81.5728 64.3573 81.8186 64.9019 81.8679 65.4808L85.9365 113.015L93.5551 85.5537C93.7053 85.0073 94.034 84.5269 94.4889 84.1889C94.9437 83.851 95.4986 83.675 96.065 83.6889C96.6311 83.7015 97.1768 83.9024 97.6159 84.2598C98.0551 84.6172 98.3626 85.1108 98.4898 85.6625L102.732 104.068L109.976 73.6329C110.259 72.4422 111.352 71.6268 112.573 71.6789C113.165 71.7072 113.729 71.9414 114.168 72.3412C114.606 72.741 114.891 73.2812 114.974 73.8688L120.38 112.409L122.803 104.576C122.964 104.057 123.287 103.603 123.725 103.28C124.163 102.958 124.692 102.784 125.236 102.784H182.567V89.66C182.567 77.5453 172.745 67.7209 160.623 67.7209H125.792V32.8885C125.792 20.7682 115.97 10.9476 103.851 10.9476H89.1786C77.062 10.9476 67.2349 20.7687 67.2349 32.8885V67.7205H32.4015C20.291 67.7205 10.4644 77.5448 10.4644 89.6595V103.063H63.2193L76.9355 64.8384Z" fill="#FFE7D4" />
                                    <path d="M121.874 124.804C121.703 125.357 121.348 125.835 120.869 126.159C120.39 126.483 119.814 126.635 119.237 126.588C118.661 126.542 118.117 126.3 117.696 125.903C117.275 125.506 117.001 124.978 116.921 124.405L111.806 87.9375L105.169 115.821C105.037 116.378 104.72 116.874 104.271 117.229C103.822 117.584 103.266 117.777 102.693 117.778H102.684C102.109 117.775 101.553 117.579 101.104 117.221C100.655 116.862 100.341 116.363 100.212 115.803L95.7813 96.5809L87.0608 128.014C86.901 128.589 86.5442 129.09 86.0527 129.429C85.5612 129.768 84.9663 129.923 84.3718 129.868C83.7772 129.813 83.221 129.55 82.8003 129.127C82.3797 128.703 82.1214 128.145 82.0707 127.55L77.79 77.5345L67.4084 106.47C67.2315 106.964 66.9063 107.391 66.4773 107.693C66.0483 107.994 65.5365 108.156 65.012 108.156H10.8035C12.6129 118.45 21.5948 126.274 32.4025 126.274H67.2358V161.107C67.2358 173.227 77.0629 183.052 89.1795 183.052H103.852C115.971 183.052 125.792 173.227 125.792 161.107V126.274H160.624C171.54 126.274 180.586 118.308 182.279 107.876H127.113L121.874 124.804Z" fill="#FFE7D4" />
                                </g>
                            </svg>
                            <img src="./assets/AboutImg02.png" style={{ width: '30.3125rem', height: '14.25rem', borderRadius: '0.4rem', borderLeft: '3px solid #1E144F' }} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-6 px-3">
                    <span className={`${style.SubTitle}`}>About Us</span><br />
                    <h2 className={`${style.SubTitle} border-0 fw-bold`} style={{ fontSize: '3.2rem' }}>Why You Should Trust Us ?<br />Get Know About Us.</h2>
                    <p className={`${style.Dsc}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat vel tortor aliquam ornare. Vestibulum blandit lorem non sodales molestie. Phasellus nec finibus nulla.
                    </p>
                    <ul className='p-0'>
                        <li className={`${style.points} border-0 d-flex my-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" className='me-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 18 18" fill="none">
                                    <path d="M8.30721 15.9522C8.25946 15.9522 8.21223 15.9423 8.16849 15.9232C8.12474 15.904 8.08543 15.8761 8.05303 15.841L1.19963 8.42759C1.15394 8.37816 1.12366 8.31649 1.11248 8.25013C1.1013 8.18376 1.1097 8.11557 1.13668 8.0539C1.16365 7.99224 1.20801 7.93977 1.26434 7.90293C1.32066 7.86609 1.38651 7.84647 1.45381 7.84647H4.75266C4.80219 7.84647 4.85114 7.8571 4.89621 7.87764C4.94128 7.89817 4.98143 7.92814 5.01394 7.96551L7.30437 10.6006C7.5519 10.0714 8.03108 9.19041 8.87196 8.11685C10.1151 6.52973 12.4273 4.19558 16.3833 2.08847C16.4598 2.04776 16.5487 2.03719 16.6326 2.05886C16.7165 2.08052 16.7892 2.13285 16.8363 2.20551C16.8835 2.27817 16.9017 2.36587 16.8874 2.45131C16.873 2.53674 16.8272 2.61369 16.7589 2.66696C16.7438 2.67877 15.2185 3.87992 13.4631 6.08004C11.8475 8.1047 9.69989 11.4153 8.64312 15.6893C8.62455 15.7644 8.58138 15.8311 8.52047 15.8787C8.45957 15.9264 8.38445 15.9523 8.3071 15.9523L8.30721 15.9522Z" fill="#1E144F" />
                                </svg>
                                <circle cx="13" cy="13" r="12.5" stroke="#1E144F" />
                            </svg>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li className={`${style.points} border-0 d-flex my-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" className='me-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 18 18" fill="none">
                                    <path d="M8.30721 15.9522C8.25946 15.9522 8.21223 15.9423 8.16849 15.9232C8.12474 15.904 8.08543 15.8761 8.05303 15.841L1.19963 8.42759C1.15394 8.37816 1.12366 8.31649 1.11248 8.25013C1.1013 8.18376 1.1097 8.11557 1.13668 8.0539C1.16365 7.99224 1.20801 7.93977 1.26434 7.90293C1.32066 7.86609 1.38651 7.84647 1.45381 7.84647H4.75266C4.80219 7.84647 4.85114 7.8571 4.89621 7.87764C4.94128 7.89817 4.98143 7.92814 5.01394 7.96551L7.30437 10.6006C7.5519 10.0714 8.03108 9.19041 8.87196 8.11685C10.1151 6.52973 12.4273 4.19558 16.3833 2.08847C16.4598 2.04776 16.5487 2.03719 16.6326 2.05886C16.7165 2.08052 16.7892 2.13285 16.8363 2.20551C16.8835 2.27817 16.9017 2.36587 16.8874 2.45131C16.873 2.53674 16.8272 2.61369 16.7589 2.66696C16.7438 2.67877 15.2185 3.87992 13.4631 6.08004C11.8475 8.1047 9.69989 11.4153 8.64312 15.6893C8.62455 15.7644 8.58138 15.8311 8.52047 15.8787C8.45957 15.9264 8.38445 15.9523 8.3071 15.9523L8.30721 15.9522Z" fill="#1E144F" />
                                </svg>
                                <circle cx="13" cy="13" r="12.5" stroke="#1E144F" />
                            </svg>
                            Consectetur adipiscing elit.
                        </li>
                        <li className={`${style.points} border-0 d-flex my-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" className='me-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 18 18" fill="none">
                                    <path d="M8.30721 15.9522C8.25946 15.9522 8.21223 15.9423 8.16849 15.9232C8.12474 15.904 8.08543 15.8761 8.05303 15.841L1.19963 8.42759C1.15394 8.37816 1.12366 8.31649 1.11248 8.25013C1.1013 8.18376 1.1097 8.11557 1.13668 8.0539C1.16365 7.99224 1.20801 7.93977 1.26434 7.90293C1.32066 7.86609 1.38651 7.84647 1.45381 7.84647H4.75266C4.80219 7.84647 4.85114 7.8571 4.89621 7.87764C4.94128 7.89817 4.98143 7.92814 5.01394 7.96551L7.30437 10.6006C7.5519 10.0714 8.03108 9.19041 8.87196 8.11685C10.1151 6.52973 12.4273 4.19558 16.3833 2.08847C16.4598 2.04776 16.5487 2.03719 16.6326 2.05886C16.7165 2.08052 16.7892 2.13285 16.8363 2.20551C16.8835 2.27817 16.9017 2.36587 16.8874 2.45131C16.873 2.53674 16.8272 2.61369 16.7589 2.66696C16.7438 2.67877 15.2185 3.87992 13.4631 6.08004C11.8475 8.1047 9.69989 11.4153 8.64312 15.6893C8.62455 15.7644 8.58138 15.8311 8.52047 15.8787C8.45957 15.9264 8.38445 15.9523 8.3071 15.9523L8.30721 15.9522Z" fill="#1E144F" />
                                </svg>
                                <circle cx="13" cy="13" r="12.5" stroke="#1E144F" />
                            </svg>
                            Cras interdum sagittis diam eget maximus.
                        </li>
                        <li className={`${style.points} border-0 d-flex my-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" className='me-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 18 18" fill="none">
                                    <path d="M8.30721 15.9522C8.25946 15.9522 8.21223 15.9423 8.16849 15.9232C8.12474 15.904 8.08543 15.8761 8.05303 15.841L1.19963 8.42759C1.15394 8.37816 1.12366 8.31649 1.11248 8.25013C1.1013 8.18376 1.1097 8.11557 1.13668 8.0539C1.16365 7.99224 1.20801 7.93977 1.26434 7.90293C1.32066 7.86609 1.38651 7.84647 1.45381 7.84647H4.75266C4.80219 7.84647 4.85114 7.8571 4.89621 7.87764C4.94128 7.89817 4.98143 7.92814 5.01394 7.96551L7.30437 10.6006C7.5519 10.0714 8.03108 9.19041 8.87196 8.11685C10.1151 6.52973 12.4273 4.19558 16.3833 2.08847C16.4598 2.04776 16.5487 2.03719 16.6326 2.05886C16.7165 2.08052 16.7892 2.13285 16.8363 2.20551C16.8835 2.27817 16.9017 2.36587 16.8874 2.45131C16.873 2.53674 16.8272 2.61369 16.7589 2.66696C16.7438 2.67877 15.2185 3.87992 13.4631 6.08004C11.8475 8.1047 9.69989 11.4153 8.64312 15.6893C8.62455 15.7644 8.58138 15.8311 8.52047 15.8787C8.45957 15.9264 8.38445 15.9523 8.3071 15.9523L8.30721 15.9522Z" fill="#1E144F" />
                                </svg>
                                <circle cx="13" cy="13" r="12.5" stroke="#1E144F" />
                            </svg>
                            Cras interdum sagittis diam eget maximus.
                        </li>
                    </ul>
                    <div className="mt-3">
                        <Button props={'Read More'} status={status} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About