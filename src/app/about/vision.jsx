import React from 'react'
import style from '@/app/style/text.module.css'

const Vision = () => {
    return (
        <section className={`container`}>
            <div className="row">
                <div className="col-6">
                    <div className="card text-center p-4">
                        <p className={`${style.Title} fw-bolder`}>Our Vision</p>
                        <p className={`${style.Dsc}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat vel tortor aliquam ornare. Vestibulum blandit lorem non sodales molestie. Phasellus nec finibus nulla. Ut at euismod arcu. Duis efficitur, velit aliquet cursus lacinia, turpis nibh dapibus massa, at dapibus odio tellus at mauris.</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card text-center p-4">
                        <p className={`${style.Title} fw-bolder`}>Our Vision</p>
                        <p className={`${style.Dsc}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat vel tortor aliquam ornare. Vestibulum blandit lorem non sodales molestie. Phasellus nec finibus nulla. Ut at euismod arcu. Duis efficitur, velit aliquet cursus lacinia, turpis nibh dapibus massa, at dapibus odio tellus at mauris.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision