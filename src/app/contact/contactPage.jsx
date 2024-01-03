import React from 'react'
import style from '@/app/style/text.module.css'
import Button from '@/components/Button'

const ContactPage = () => {
    return (
        <section className={`${style.elBG} container my-20 rounded-3 p-3`}>
            <div className="border border-secondary border-3 rounded-3">
                <div className="flex">
                    <div className={`col-6 p-3 rounded-3 `}>
                        <div className='p-4'>
                            <p className='display-4 mb-12 text-white fw-bold'>Get In Touch</p>
                            <div>
                                <input type="text" className='w-100 bg-transparent mb-3 px-2 py-3 rounded-2 fs-md text-white outline-none border border-secondary' placeholder='Enter Your name' />
                            </div>
                            <div>
                                <input type="text" className='w-100 bg-transparent mb-3 px-2 py-3 rounded-2 fs-md text-white outline-none border border-secondary' placeholder='Enter Your Email' />
                            </div>
                            <div>
                                <textarea type="text" className='w-100 bg-transparent mb-3 px-2 py-3 rounded-2 fs-md text-white outline-none border border-secondary' placeholder='Enter Your Message hear' rows={5} />
                            </div>
                            <Button props='View More' status={true} />
                        </div>
                    </div>
                    <div className={`col-6 pl-12 py-11`}>
                        <img src="./assets/pngwing.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPage