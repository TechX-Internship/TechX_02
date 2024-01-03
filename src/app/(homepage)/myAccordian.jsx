import styles from '../style/accordionList.module.css'

const MyAccordion = ({ title, content, isOpen, onClick }) => {
    return (
        <div className={styles.myaccordion}>
            <button className="w-full rounded-[5px] border p-3 text-left focus:outline-none" onClick={onClick}>
                {title}
                <svg className={`float-right transition-all ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5119 15.5694C11.7928 15.8102 12.2072 15.8102 12.4881 15.5694L19.4881 9.56944C19.8026 9.29988 19.839 8.8264 19.5695 8.51191C19.2999 8.19741 18.8264 8.16099 18.5119 8.43056L12 14.0122L5.48811 8.43056C5.17361 8.16099 4.70014 8.19741 4.43057 8.51191C4.161 8.8264 4.19743 9.29988 4.51192 9.56944L11.5119 15.5694Z" fill="#1E144F" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-max-height duration-300 ${isOpen ? 'max-h-28' : 'max-h-0'
                    }`}
            >
                <p className="p-3">{content}</p>
            </div>
        </div>
    );
};

export default MyAccordion;
