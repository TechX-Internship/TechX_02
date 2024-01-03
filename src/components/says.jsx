import React from 'react'
import style from '@/app/style/text.module.css'
const Say = () => {
    return (
        <section className={`py-16`}>
            <div className="container">
                <div className="row">
                    <div className={`${style.bgGra1} col-5 relative flex flex-col justify-center`} style={{ padding: '0 5rem' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="213" height="159" viewBox="0 0 213 159" fill="none">
                            <g opacity="0.1" clipPath="url(#clip0_97_619)">
                                <path d="M213 86.0568H161.338C162.221 48.4053 172.9 44.1313 186.313 42.9114L191.485 42.2702V0.868637L185.523 1.18814C168.009 2.17354 148.645 5.33087 135.726 21.279C124.402 35.2595 119.409 58.1 119.409 93.1622V158.133H213V86.0568ZM93.5909 158.133V86.0568H42.6183C43.5015 48.4053 53.8352 44.1313 67.2477 42.9114L72.0757 42.2702V0.868637L66.4581 1.18814C48.9437 2.17354 29.4069 5.33087 16.4881 21.279C5.1647 35.2595 -1.52588e-05 58.1 -1.52588e-05 93.1622V158.133H93.5909Z" fill="#1E144F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_97_619">
                                    <rect width="213" height="159" fill="white" transform="matrix(-1 0 0 -1 213 159)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className={style.Title}>What People Say</div>
                        <p className={style.Dsc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat vel tortor aliquam ornare. Vestibulum blandit lorem non sodales molestie.</p>
                        <div className="d-flex">
                            <div className={`${style.border} p-2 border-1 me-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M1.61625 14.1165L10.3663 5.36652C10.602 5.13882 10.9178 5.01282 11.2455 5.01567C11.5732 5.01852 11.8868 5.14998 12.1185 5.38174C12.3503 5.6135 12.4817 5.92702 12.4846 6.25476C12.4874 6.58251 12.3614 6.89826 12.1337 7.13401L5.5175 13.7503H27.5C27.8315 13.7503 28.1495 13.882 28.3839 14.1164C28.6183 14.3508 28.75 14.6687 28.75 15.0003C28.75 15.3318 28.6183 15.6497 28.3839 15.8841C28.1495 16.1186 27.8315 16.2503 27.5 16.2503H5.5175L12.1337 22.8665C12.2531 22.9818 12.3484 23.1198 12.4139 23.2723C12.4794 23.4248 12.5139 23.5888 12.5153 23.7548C12.5168 23.9207 12.4851 24.0853 12.4223 24.239C12.3594 24.3926 12.2666 24.5321 12.1492 24.6495C12.0319 24.7669 11.8923 24.8597 11.7387 24.9225C11.5851 24.9854 11.4205 25.017 11.2545 25.0156C11.0885 25.0141 10.9245 24.9797 10.772 24.9141C10.6195 24.8486 10.4816 24.7534 10.3663 24.634L1.61625 15.884C1.38191 15.6496 1.25027 15.3317 1.25027 15.0003C1.25027 14.6688 1.38191 14.3509 1.61625 14.1165Z" fill="#1E144F" />
                                </svg>
                            </div>
                            <div className={`${style.border} ${style.elBG} p-2 border-1`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M28.3838 14.1165L19.6337 5.36652C19.398 5.13882 19.0822 5.01282 18.7545 5.01567C18.4268 5.01852 18.1132 5.14998 17.8815 5.38174C17.6497 5.6135 17.5183 5.92702 17.5154 6.25476C17.5126 6.58251 17.6386 6.89826 17.8663 7.13401L24.4825 13.7503H2.5C2.16848 13.7503 1.85054 13.882 1.61612 14.1164C1.3817 14.3508 1.25 14.6687 1.25 15.0003C1.25 15.3318 1.3817 15.6497 1.61612 15.8841C1.85054 16.1186 2.16848 16.2503 2.5 16.2503H24.4825L17.8663 22.8665C17.7469 22.9818 17.6516 23.1198 17.5861 23.2723C17.5206 23.4248 17.4861 23.5888 17.4847 23.7548C17.4832 23.9207 17.5149 24.0853 17.5777 24.239C17.6406 24.3926 17.7334 24.5321 17.8508 24.6495C17.9681 24.7669 18.1077 24.8597 18.2613 24.9225C18.4149 24.9854 18.5795 25.017 18.7455 25.0156C18.9115 25.0141 19.0755 24.9797 19.228 24.9141C19.3805 24.8486 19.5184 24.7534 19.6337 24.634L28.3838 15.884C28.6181 15.6496 28.7497 15.3317 28.7497 15.0003C28.7497 14.6688 28.6181 14.3509 28.3838 14.1165Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-7 d-flex">
                        <div className="row justify-center items-center ms-3">
                            <div className="col-6">
                                <div className="card p-2">
                                    <p className={`${style.Dsc}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat vel tortor aliquam ornare. Vestibulum blandit lorem non sodales molestie. Phasellus nec finibus nulla. Ut at euismod arcu.
                                    </p>
                                    <div className="d-flex say border-top border-muted pt-2">
                                        <div className={`col-3 ${style.img}`}>
                                            <img src={`./assets/Ui02.png`} alt="" />
                                        </div>
                                        <div className="col-6  flex justify-center flex-col ps-2">
                                            <p className={`${style.SubTitle} border-0 m-0`} style={{ fontSize: '1.5rem' }}>Jesiu Petit</p>
                                            <span className={`${style.span} text-muted`}>Heart Patient</span>
                                        </div>
                                        <div className="col-3 flex items-center"><h4 className='text-muted'>#01</h4></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card p-2">
                                    <p className={`${style.Dsc}`}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat vel tortor aliquam ornare. Vestibulum blandit lorem non sodales molestie. Phasellus nec finibus nulla. Ut at euismod arcu.
                                    </p>
                                    <div className="d-flex say border-top border-muted pt-2">
                                        <div className={`col-3 ${style.img}`}>
                                            <img src={`./assets/Ui01.png`} alt="" />
                                        </div>
                                        <div className="col-6 flex justify-center flex-col ps-2">
                                            <p className={`${style.SubTitle} border-0 m-0`} style={{ fontSize: '1.5rem' }}>Jesiu Petit</p>
                                            <span className={`${style.span} text-muted`}>Heart Patient</span>
                                        </div>
                                        <div className="col-3 flex items-center">
                                            <h4 className='text-muted'>
                                                #02
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Say