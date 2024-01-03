'use client'
import { useState } from "react";
import MyAccordion from "./myAccordian";
import styles from '../style/accordionList.module.css'

const AccordionList = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const accordions = [
        {
            title: 'What is Triyom Lifestyle?',
            content: 'Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in e cites of the word in classical literature, ',
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            content: 'Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in e cites of the word in classical literature, ',
        },
        {
            title: 'Cras interdum sagittis diam eget maximus.',
            content: 'Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in e cites of the word in classical literature, ',
        },
        {
            title: 'Donec dolor mauris, accumsan in rutrum non, mattis quis odio.',
            content: 'Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in e cites of the word in classical literature, ',
        },
        {
            title: 'Sed eu augue nec massa aliquet euismod.',
            content: 'Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum passage, and going through the cites of the word in e cites of the word in classical literature, ',
        }
    ];

    return (
        <div className={`${styles.accordion} container mx-auto py-[110px] gap-[50px] flex items-start`}>
            <div className="w-1/2">
                <h2>Frequently asked Questions</h2>
                <p>Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. </p>
                {accordions.map((accordion, index) => (
                    <MyAccordion
                        key={index}
                        title={accordion.title}
                        content={accordion.content}
                        isOpen={openAccordion === index}
                        onClick={() => handleAccordionClick(index)}
                    />
                ))}
            </div>
            <div className="w-1/2 relative">
                <div>
                    <div className="max-h-[500px] overflow-hidden rounded">
                        <img src="/assets/accordion-bg.png" className="w-full" alt="" />
                    </div>

                    <img src="/assets/accordion-img.png" className="absolute bottom-0" alt="" />

                    <div className="max-w-[300px] bg-[#BA9778] mt-3 rounded-[5px] py-3 ml-auto">
                        <div className="flex items-center w-full justify-center gap-2">
                            <div className="bg-white w-[45px] h-[45px] rounded-full  flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                                    <path d="M10.8741 5.83183L11.5772 7.09746C12.2117 8.23963 11.957 9.73797 10.9576 10.7419C10.9576 10.7419 10.9576 10.7419 10.9576 10.7419C10.9575 10.742 9.74557 11.9598 11.9433 14.1676C14.1403 16.3747 15.3524 15.1586 15.3533 15.1578C15.3533 15.1577 15.3533 15.1577 15.3533 15.1577C16.3526 14.1538 17.8441 13.8979 18.981 14.5353L20.2409 15.2417C21.9576 16.2042 22.1604 18.6229 20.6514 20.1389C19.7446 21.0498 18.6338 21.7586 17.4059 21.8054C15.3387 21.8841 11.8282 21.3585 8.30672 17.8209C4.78526 14.2832 4.26211 10.7565 4.34047 8.67986C4.38702 7.44627 5.09258 6.33035 5.99933 5.41942C7.50836 3.90345 9.91598 4.10713 10.8741 5.83183Z" fill="#BA9778" />
                                    <path d="M14.3644 2.09219C14.4361 1.64719 14.8549 1.34532 15.2978 1.41737C15.3253 1.42264 15.4135 1.4392 15.4597 1.44954C15.5521 1.47023 15.6811 1.50207 15.8419 1.54911C16.1634 1.64319 16.6125 1.79817 17.1516 2.04645C18.2309 2.54355 19.6672 3.41312 21.1577 4.91043C22.6481 6.40774 23.5137 7.85064 24.0085 8.93491C24.2557 9.47647 24.4099 9.92769 24.5036 10.2507C24.5504 10.4122 24.5821 10.5417 24.6027 10.6346C24.613 10.681 24.6205 10.7183 24.6257 10.7459L24.632 10.7798C24.7037 11.2248 24.4059 11.6629 23.963 11.7349C23.5213 11.8068 23.1052 11.5064 23.0317 11.0634C23.0294 11.0516 23.0232 11.0196 23.0165 10.9895C23.0032 10.9292 22.9801 10.8336 22.9434 10.7072C22.8701 10.4543 22.7428 10.0785 22.5313 9.61524C22.109 8.68984 21.3496 7.41195 20.0086 6.06476C18.6676 4.71758 17.3955 3.95467 16.4744 3.53041C16.0132 3.31802 15.6391 3.19011 15.3874 3.11646C15.2616 3.07964 15.1034 3.04317 15.0434 3.02974C14.6025 2.95593 14.2929 2.53593 14.3644 2.09219Z" fill="#BA9778" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.6095 5.84631C14.7328 5.41286 15.1825 5.16187 15.614 5.28572L15.3907 6.07055C15.614 5.28572 15.614 5.28572 15.614 5.28572L15.6155 5.28616L15.6172 5.28665L15.6208 5.28771L15.6292 5.29022L15.6506 5.29693C15.667 5.30218 15.6874 5.30902 15.7117 5.31769C15.7603 5.33503 15.8246 5.3597 15.9035 5.39365C16.0613 5.46161 16.277 5.56654 16.5419 5.72403C17.0721 6.0393 17.796 6.56297 18.6464 7.41727C19.4968 8.27157 20.018 8.99877 20.3319 9.53146C20.4886 9.79757 20.5931 10.0142 20.6607 10.1728C20.6945 10.252 20.7191 10.3166 20.7364 10.3655C20.745 10.3899 20.7518 10.4104 20.757 10.4268L20.7637 10.4484L20.7662 10.4568L20.7673 10.4604L20.7677 10.4621C20.7677 10.4621 20.7682 10.4637 19.9869 10.6879L20.7682 10.4637C20.8915 10.8971 20.6416 11.3489 20.2102 11.4727C19.7823 11.5955 19.3366 11.3498 19.2089 10.9231L19.2049 10.9114C19.1991 10.895 19.1872 10.8628 19.1671 10.8158C19.127 10.7219 19.0543 10.5682 18.9334 10.3629C18.6919 9.9529 18.2556 9.33338 17.4973 8.57161C16.7391 7.80984 16.1224 7.37157 15.7142 7.1289C15.5099 7.00743 15.3569 6.93441 15.2634 6.89414C15.2166 6.87399 15.1845 6.86198 15.1683 6.85618L15.1566 6.85216C14.7319 6.72387 14.4873 6.27608 14.6095 5.84631Z" fill="#BA9778" />
                                </svg>
                            </div>
                            <div className="w-fit text-white">
                                <h4 className="font-semibold text-xl leading-normal">Call Us Now</h4>
                                <span className="text-lg leading-normal">+ 123 456 789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionList;