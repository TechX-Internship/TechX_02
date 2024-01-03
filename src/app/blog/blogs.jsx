import React from 'react'
import style from '@/app/style/text.module.css'

const Blogs = () => {
    return (
        <div className="row py-5">
            <div className="col-4">
                <div className="card">
                    <img src="./assets/Arti01.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className={`${style.SubTitle} border-0`}>Lorem ipsum dolor sit amet, adipiscing elit Donec.</h5>
                        <p className={`${style.Dsc}`}>Cras interdum sagittis diam eget maximus. Donec dolor mauris, accumsan in rutrum non, mattis quis odio. Sed vitae arcu non dolor malesuada auctor. Morbi porttitor ante orci, vel rutrum enim vestibu lum in. Proin sed ligula non ex facilisi.</p>
                        <div className="d-flex say border-top border-muted pt-2">
                            <div className={`col-3 ${style.img}`}>
                                <img src={`./assets/Ui03.png`} alt="" />
                            </div>
                            <div className="col-6  flex justify-center flex-col">
                                <p className={`${style.SubTitle} border-0 m-0`} style={{ fontSize: '1.5rem' }}>Skylar Septimus</p>
                                <span className={`${style.span} text-muted`}>homeopathic</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-4">
                <div className="card">
                    <img src="./assets/Arti02.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className={`${style.SubTitle} border-0`}>Etiam ut vehicula magna, in pulv inar orci. Fusce</h5>
                        <p className={`${style.Dsc}`}>Cras interdum sagittis diam eget maximus. Donec dolor mauris, accumsan in rutrum non, mattis quis odio. Sed vitae arcu non dolor malesuada auctor. Morbi porttitor ante orci, vel rutrum enim vestibu lum in. Proin sed ligula non ex facilisi.</p>
                        <div className="d-flex say border-top border-muted pt-2">
                            <div className={`col-3 ${style.img}`}>
                                <img src={`./assets/Ui04.png`} alt="" />
                            </div>
                            <div className="col-6  flex justify-center flex-col">
                                <p className={`${style.SubTitle} border-0 m-0`} style={{ fontSize: '1.5rem' }}>Maren Botosh</p>
                                <span className={`${style.span} text-muted`}>homeopathic</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-4">
                <div className="card">
                    <img src="./assets/Arti03.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className={`${style.SubTitle} border-0`}>accumsan in rutrum non, mattis quis odio.</h5>
                        <p className={`${style.Dsc}`}>Cras interdum sagittis diam eget maximus. Donec dolor mauris, accumsan in rutrum non, mattis quis odio. Sed vitae arcu non dolor malesuada auctor. Morbi porttitor ante orci, vel rutrum enim vestibu lum in. Proin sed ligula non ex facilisi.</p>
                        <div className="d-flex say border-top border-muted pt-2">
                            <div className={`col-3 ${style.img}`}>
                                <img src={`./assets/Ui05.png`} alt="" />
                            </div>
                            <div className="col-6  flex justify-center flex-col">
                                <p className={`${style.SubTitle} border-0 m-0`} style={{ fontSize: '1.5rem' }}>Tiana Donin</p>
                                <span className={`${style.span} text-muted`}>homeopathic</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blogs