import React from 'react'
import style from '@/app/style/text.module.css'

const Footer = () => {
  return (
    <section className={`${style.elBG} pt-16`}>
      <div className="container">
        <div className="row">
          <div className="col-3 p-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="199" height="53" viewBox="0 0 199 53" fill="none">
              <path d="M18.4015 9.82626C17.9615 9.07143 17.3598 8.49183 16.5963 8.08746C15.8328 7.68308 14.9334 7.4809 13.8982 7.4809C11.983 7.4809 10.4754 8.12789 9.37545 9.42189C8.27551 10.7159 7.72553 12.4547 7.72553 14.6383C7.72553 17.0915 8.31433 18.9583 9.49192 20.2389C10.6695 21.5194 12.3841 22.1596 14.6358 22.1596C17.3016 22.1596 19.2038 20.9061 20.3426 18.399H12.6947V12.6973H26.9035V20.3804C26.3082 21.89 25.4347 23.3053 24.283 24.6263C23.1313 25.9473 21.6755 27.0323 19.9156 27.8815C18.1556 28.7307 16.1499 29.1553 13.8982 29.1553C11.1548 29.1553 8.72843 28.542 6.61911 27.3154C4.50979 26.0888 2.87928 24.3769 1.72757 22.1798C0.575856 19.9828 0 17.4689 0 14.6383C0 11.8346 0.575856 9.33427 1.72757 7.13718C2.87928 4.94009 4.50332 3.22824 6.5997 2.00165C8.69607 0.775048 11.116 0.161749 13.8594 0.161749C17.3016 0.161749 20.1485 1.02441 22.4002 2.74973C24.6518 4.47506 26.0494 6.8339 26.5929 9.82626H18.4015ZM38.3178 22.8875H46.8198V28.9531H30.7088V0.44481H38.3178V22.8875ZM56.2157 27.3558C54.0676 26.1023 52.3659 24.3635 51.1107 22.1394C49.8554 19.9154 49.2278 17.4015 49.2278 14.5979C49.2278 11.7942 49.8554 9.28036 51.1107 7.0563C52.3659 4.83225 54.0676 3.10019 56.2157 1.86011C58.3639 0.620038 60.7191 0 63.2813 0C65.8694 0 68.2311 0.620038 70.3663 1.86011C72.5015 3.10019 74.1902 4.83225 75.4325 7.0563C76.6748 9.28036 77.2959 11.7942 77.2959 14.5979C77.2959 17.4015 76.6748 19.9154 75.4325 22.1394C74.1902 24.3635 72.495 26.1023 70.3468 27.3558C68.1987 28.6094 65.8435 29.2361 63.2813 29.2361C60.7191 29.2361 58.3639 28.6094 56.2157 27.3558ZM67.8817 19.8951C69.0075 18.5742 69.5704 16.8084 69.5704 14.5979C69.5704 12.3334 69.0075 10.5474 67.8817 9.23992C66.7558 7.93245 65.2224 7.27871 63.2813 7.27871C61.3143 7.27871 59.7744 7.93245 58.6615 9.23992C57.5486 10.5474 56.9922 12.3334 56.9922 14.5979C56.9922 16.8354 57.5486 18.6079 58.6615 19.9154C59.7744 21.2228 61.3143 21.8766 63.2813 21.8766C65.2224 21.8766 66.7558 21.2161 67.8817 19.8951ZM94.9594 28.9531L89.5243 18.4394H88.7091V28.9531H81.1V0.44481H93.0959C95.2958 0.44481 97.1593 0.842443 98.6862 1.63771C100.213 2.43298 101.365 3.52478 102.141 4.91313C102.918 6.30148 103.306 7.85831 103.306 9.58363C103.306 11.5246 102.795 13.2297 101.773 14.6989C100.75 16.1682 99.2556 17.2128 97.2887 17.8328L103.461 28.9531H94.9594ZM88.7091 13.0208H92.4748C93.51 13.0208 94.2864 12.7647 94.8041 12.2525C95.3217 11.7403 95.5805 10.9989 95.5805 10.0284C95.5805 9.11187 95.3152 8.39073 94.7847 7.86505C94.2541 7.33937 93.4841 7.07652 92.4748 7.07652H88.7091V13.0208ZM114.759 0.44481V28.9531H107.15V0.44481H114.759ZM125.551 27.3558C123.403 26.1023 121.701 24.3635 120.446 22.1394C119.19 19.9154 118.563 17.4015 118.563 14.5979C118.563 11.7942 119.19 9.28036 120.446 7.0563C121.701 4.83225 123.403 3.10019 125.551 1.86011C127.699 0.620038 130.054 0 132.616 0C135.204 0 137.566 0.620038 139.701 1.86011C141.836 3.10019 143.525 4.83225 144.767 7.0563C146.01 9.28036 146.631 11.7942 146.631 14.5979C146.631 17.4015 146.01 19.9154 144.767 22.1394C143.525 24.3635 141.83 26.1023 139.682 27.3558C137.534 28.6094 135.178 29.2361 132.616 29.2361C130.054 29.2361 127.699 28.6094 125.551 27.3558ZM137.217 19.8951C138.342 18.5742 138.905 16.8084 138.905 14.5979C138.905 12.3334 138.342 10.5474 137.217 9.23992C136.091 7.93245 134.557 7.27871 132.616 7.27871C130.649 7.27871 129.109 7.93245 127.996 9.23992C126.884 10.5474 126.327 12.3334 126.327 14.5979C126.327 16.8354 126.884 18.6079 127.996 19.9154C129.109 21.2228 130.649 21.8766 132.616 21.8766C134.557 21.8766 136.091 21.2161 137.217 19.8951ZM157.889 0.44481V16.9837C157.889 18.5203 158.232 19.7064 158.917 20.5421C159.603 21.3778 160.645 21.7957 162.043 21.7957C163.44 21.7957 164.495 21.3711 165.207 20.5219C165.918 19.6727 166.274 18.4933 166.274 16.9837V0.44481H173.883V16.9837C173.883 19.5986 173.353 21.8294 172.292 23.676C171.23 25.5227 169.788 26.911 167.963 27.8411C166.138 28.7711 164.113 29.2361 161.887 29.2361C159.662 29.2361 157.675 28.7711 155.928 27.8411C154.181 26.911 152.81 25.5294 151.813 23.6962C150.817 21.8631 150.318 19.6256 150.318 16.9837V0.44481H157.889ZM180.948 26.8706C178.903 25.2935 177.803 23.0358 177.648 20.0973H185.762C185.839 21.0948 186.124 21.8226 186.616 22.2809C187.108 22.7392 187.742 22.9684 188.518 22.9684C189.217 22.9684 189.793 22.7864 190.246 22.4225C190.699 22.0585 190.925 21.5531 190.925 20.9061C190.925 20.0704 190.55 19.4234 189.799 18.9651C189.049 18.5068 187.832 17.9946 186.15 17.4285C184.364 16.8084 182.921 16.2086 181.821 15.629C180.721 15.0494 179.764 14.2002 178.949 13.0815C178.133 11.9627 177.726 10.5002 177.726 8.69401C177.726 6.86086 178.166 5.29054 179.046 3.98307C179.926 2.6756 181.142 1.68489 182.695 1.01093C184.248 0.336977 186.008 0 187.975 0C191.158 0 193.701 0.775048 195.603 2.32514C197.505 3.87524 198.521 6.05211 198.651 8.85576H190.382C190.356 7.9931 190.103 7.34611 189.625 6.91477C189.146 6.48344 188.531 6.26778 187.781 6.26778C187.211 6.26778 186.745 6.44301 186.383 6.79346C186.021 7.14392 185.839 7.64264 185.839 8.28964C185.839 8.8288 186.04 9.29383 186.441 9.68473C186.842 10.0756 187.341 10.4126 187.936 10.6957C188.531 10.9787 189.411 11.3359 190.576 11.7672C192.31 12.3873 193.74 13.0006 194.865 13.6071C195.991 14.2137 196.962 15.0629 197.777 16.1547C198.592 17.2465 199 18.6281 199 20.2995C199 21.9979 198.592 23.521 197.777 24.8689C196.962 26.2168 195.784 27.2817 194.244 28.0635C192.704 28.8453 190.886 29.2361 188.79 29.2361C185.606 29.2361 182.992 28.4476 180.948 26.8706Z" fill="white" />
              <path d="M15.2388 38.6651V52.8586H11.9196V47.0154H6.75627V52.8586H3.43701V38.6651H6.75627V44.2252H11.9196V38.6651H15.2388ZM20.7422 52.07C19.6746 51.45 18.827 50.584 18.1993 49.4719C17.5717 48.3599 17.2579 47.1097 17.2579 45.7214C17.2579 44.333 17.5717 43.0862 18.1993 41.9809C18.827 40.8756 19.6746 40.013 20.7422 39.3929C21.8098 38.7729 22.9841 38.4629 24.2652 38.4629C25.5464 38.4629 26.7207 38.7729 27.7883 39.3929C28.8559 40.013 29.6971 40.8756 30.3117 41.9809C30.9264 43.0862 31.2337 44.333 31.2337 45.7214C31.2337 47.1097 30.9232 48.3599 30.302 49.4719C29.6809 50.584 28.8397 51.45 27.7786 52.07C26.7175 52.6901 25.5464 53.0001 24.2652 53.0001C22.9841 53.0001 21.8098 52.6901 20.7422 52.07ZM26.876 48.7137C27.5295 47.9589 27.8563 46.9615 27.8563 45.7214C27.8563 44.4678 27.5295 43.467 26.876 42.7189C26.2225 41.9708 25.3522 41.5968 24.2652 41.5968C23.1653 41.5968 22.2886 41.9675 21.6351 42.7088C20.9816 43.4502 20.6548 44.4543 20.6548 45.7214C20.6548 46.9749 20.9816 47.9758 21.6351 48.7238C22.2886 49.4719 23.1653 49.846 24.2652 49.846C25.3522 49.846 26.2225 49.4686 26.876 48.7137ZM35.5238 52.4946C34.7344 52.1576 34.1035 51.6589 33.6312 50.9984C33.1589 50.338 32.9098 49.5427 32.8839 48.6126H36.4167C36.4684 49.1383 36.6431 49.5393 36.9408 49.8157C37.2384 50.092 37.6266 50.2301 38.1054 50.2301C38.5971 50.2301 38.9854 50.1122 39.2701 49.8763C39.5548 49.6404 39.6971 49.3136 39.6971 48.8957C39.6971 48.5452 39.5839 48.2554 39.3574 48.0263C39.131 47.7972 38.8527 47.6085 38.5227 47.4602C38.1928 47.3119 37.7237 47.1434 37.1155 46.9547C36.2355 46.6717 35.5173 46.3886 34.9608 46.1055C34.4044 45.8225 33.9256 45.4046 33.5244 44.852C33.1233 44.2993 32.9227 43.5782 32.9227 42.6886C32.9227 41.3676 33.3821 40.3331 34.3009 39.585C35.2197 38.8369 36.4167 38.4629 37.8919 38.4629C39.393 38.4629 40.6029 38.8369 41.5217 39.585C42.4405 40.3331 42.9322 41.3744 42.9969 42.7088H39.4059C39.3801 42.2505 39.2183 41.89 38.9207 41.6271C38.623 41.3643 38.2413 41.2328 37.7754 41.2328C37.3743 41.2328 37.0507 41.344 36.8049 41.5664C36.559 41.7889 36.4361 42.109 36.4361 42.5268C36.4361 42.9851 36.6431 43.3423 37.0572 43.5984C37.4713 43.8545 38.1183 44.1308 38.9983 44.4274C39.8783 44.7374 40.5932 45.0339 41.1432 45.317C41.6932 45.6001 42.1688 46.0112 42.5699 46.5503C42.9711 47.0895 43.1716 47.7837 43.1716 48.6329C43.1716 49.4416 42.9743 50.1762 42.5796 50.8367C42.1849 51.4972 41.6123 52.0229 40.8618 52.4137C40.1112 52.8046 39.2248 53.0001 38.2025 53.0001C37.206 53.0001 36.3131 52.8316 35.5238 52.4946ZM55.245 45.4889C54.8827 46.1696 54.3262 46.7188 53.5757 47.1367C52.8251 47.5545 51.8934 47.7635 50.7805 47.7635H48.723V52.8586H45.4037V38.6651H50.7805C51.8675 38.6651 52.7863 38.8605 53.5369 39.2514C54.2874 39.6423 54.8503 40.1815 55.2256 40.8689C55.6009 41.5563 55.7885 42.3449 55.7885 43.2345C55.7885 44.0567 55.6074 44.8082 55.245 45.4889ZM51.9452 44.5487C52.2558 44.2387 52.411 43.8006 52.411 43.2345C52.411 42.6684 52.2558 42.2303 51.9452 41.9203C51.6346 41.6103 51.1623 41.4552 50.5282 41.4552H48.723V45.0137H50.5282C51.1623 45.0137 51.6346 44.8587 51.9452 44.5487ZM61.0299 38.6651V52.8586H57.7107V38.6651H61.0299ZM73.4331 38.6651V41.435H69.8227V52.8586H66.5035V41.435H62.893V38.6651H73.4331ZM83.7792 50.3514H78.6936L77.8783 52.8586H74.4038L79.3341 38.6651H83.1775L88.1078 52.8586H84.5945L83.7792 50.3514ZM82.9251 47.6826L81.2364 42.4864L79.5671 47.6826H82.9251ZM93.1158 50.1897H97.4639V52.8586H89.7966V38.6651H93.1158V50.1897Z" fill="white" />
            </svg>
            <p className={`${style.Dsc} mt-3`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed erat vel tortor aliquam ornare. Vestibulum blandit lorem non sodales molestie.
            </p>
            <div className='flex'>
              <span className='rounded-circle bg-white p-2 me-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9.69592 13.2478H7.31992C6.93592 13.2478 6.81592 13.1038 6.81592 12.7438V9.83983C6.81592 9.45583 6.95992 9.33583 7.31992 9.33583H9.69592V7.22383C9.69592 6.26383 9.86392 5.35183 10.3439 4.51183C10.8479 3.64783 11.5679 3.07183 12.4799 2.73583C13.0799 2.51983 13.6799 2.42383 14.3279 2.42383H16.6799C17.0159 2.42383 17.1599 2.56783 17.1599 2.90383V5.63983C17.1599 5.97583 17.0159 6.11983 16.6799 6.11983C16.0319 6.11983 15.3839 6.11983 14.7359 6.14383C14.0879 6.14383 13.7519 6.45583 13.7519 7.12783C13.7279 7.84783 13.7519 8.54383 13.7519 9.28783H16.5359C16.9199 9.28783 17.0639 9.43183 17.0639 9.81583V12.7198C17.0639 13.1038 16.9439 13.2238 16.5359 13.2238H13.7519V21.0478C13.7519 21.4558 13.6319 21.5998 13.1999 21.5998H10.1999C9.83992 21.5998 9.69592 21.4558 9.69592 21.0958V13.2478Z" fill="#1E144F" />
                </svg>
              </span>
              <span className='rounded-circle bg-white p-2 me-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 18" fill="none">
                  <g clip-path="url(#clip0_127_196)">
                    <path d="M14.2324 3.33057C13.9915 3.33057 13.7954 3.52663 13.7954 3.76756C13.7954 4.00848 13.9915 4.20455 14.2324 4.20455C14.4734 4.20455 14.6694 4.00852 14.6694 3.76756C14.6694 3.5266 14.4734 3.33057 14.2324 3.33057ZM9.00005 5.12582C6.86389 5.12582 5.12598 6.86373 5.12598 8.9999C5.12598 11.1361 6.86389 12.874 9.00005 12.874C11.1363 12.874 12.8742 11.1361 12.8742 8.99993C12.8742 6.86377 11.1363 5.12582 9.00005 5.12582Z" fill="#1E144F" />
                    <path d="M13.0656 0H4.93443C2.21358 0 0 2.21358 0 4.93446V13.0656C0 15.7865 2.21358 18 4.93443 18H13.0656C15.7865 18 18 15.7864 18 13.0656V4.93446C18 2.21358 15.7865 0 13.0656 0ZM9 13.9371C6.27768 13.9371 4.06297 11.7223 4.06297 9C4.06297 6.27768 6.27771 4.06301 9 4.06301C11.7223 4.06301 13.9371 6.27771 13.9371 9C13.9371 11.7223 11.7223 13.9371 9 13.9371ZM14.2323 5.26767C13.4053 5.26767 12.7324 4.59478 12.7324 3.7677C12.7324 2.94061 13.4053 2.26768 14.2323 2.26768C15.0594 2.26768 15.7323 2.94057 15.7323 3.76766C15.7323 4.59475 15.0594 5.26767 14.2323 5.26767Z" fill="#1E144F" />
                  </g>
                  <defs>
                    <clipPath id="clip0_127_196">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className='rounded-circle bg-white p-2 me-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M20.2077 16.06C19.6068 15.5561 16.0827 13.3244 15.4969 13.4269C15.2219 13.4757 15.0116 13.7101 14.4485 14.3818C14.1881 14.7124 13.9021 15.0221 13.5932 15.3079C13.0273 15.1712 12.4795 14.9681 11.9611 14.7029C9.92838 13.7132 8.28618 12.0705 7.29713 10.0375C7.03191 9.51917 6.82884 8.97134 6.69213 8.40538C6.97794 8.09648 7.28758 7.81052 7.61819 7.55013C8.28919 6.98706 8.52431 6.77806 8.57313 6.50169C8.67556 5.91456 6.44188 2.39181 5.94 1.79094C5.72963 1.54206 5.5385 1.375 5.29375 1.375C4.58425 1.375 1.375 5.34325 1.375 5.8575C1.375 5.89944 1.44375 10.0306 6.66119 15.3388C11.9694 20.5563 16.1006 20.625 16.1425 20.625C16.6567 20.625 20.625 17.4157 20.625 16.7062C20.625 16.4615 20.4579 16.2704 20.2077 16.06ZM15.8125 10.3125H17.1875C17.1859 8.85431 16.6059 7.45632 15.5748 6.42522C14.5437 5.39413 13.1457 4.81414 11.6875 4.8125V6.1875C12.7812 6.18859 13.8298 6.62354 14.6031 7.39689C15.3765 8.17024 15.8114 9.21882 15.8125 10.3125Z" fill="#1E144F" />
                  <path d="M19.25 10.3125H20.625C20.6223 7.94297 19.6798 5.67126 18.0043 3.99575C16.3287 2.32023 14.057 1.37773 11.6875 1.375V2.75C13.6925 2.75237 15.6147 3.54989 17.0324 4.96762C18.4501 6.38535 19.2476 8.30753 19.25 10.3125Z" fill="#1E144F" />
                </svg>
              </span>
              <span className='rounded-circle bg-white p-2 me-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 18 18" fill="none">
                  <g clip-path="url(#clip0_127_203)">
                    <path d="M18 3.4179C17.3306 3.71152 16.6174 3.90615 15.8737 4.00065C16.6388 3.5439 17.2226 2.82615 17.4971 1.96102C16.7839 2.38627 15.9964 2.68665 15.1571 2.85427C14.4799 2.13315 13.5146 1.68652 12.4616 1.68652C10.4186 1.68652 8.77387 3.34477 8.77387 5.37765C8.77387 5.67015 8.79862 5.9514 8.85938 6.21915C5.7915 6.06952 3.07687 4.59915 1.25325 2.35927C0.934875 2.91165 0.748125 3.5439 0.748125 4.22452C0.748125 5.50252 1.40625 6.6354 2.38725 7.29127C1.79437 7.28002 1.21275 7.1079 0.72 6.83677V6.87727C0.72 8.67052 1.99912 10.16 3.6765 10.5031C3.37612 10.5853 3.04875 10.6246 2.709 10.6246C2.47275 10.6246 2.23425 10.6111 2.01038 10.5616C2.4885 12.023 3.84525 13.0974 5.4585 13.1323C4.203 14.1144 2.60888 14.7061 0.883125 14.7061C0.5805 14.7061 0.29025 14.6926 0 14.6555C1.63462 15.7096 3.57188 16.3115 5.661 16.3115C12.4515 16.3115 16.164 10.6865 16.164 5.81077C16.164 5.64765 16.1584 5.49015 16.1505 5.33377C16.8829 4.81402 17.4982 4.1649 18 3.4179Z" fill="#1E144F" />
                  </g>
                  <defs>
                    <clipPath id="clip0_127_203">
                      <rect width="18" height="18" fill="white" transform="translate(0 -0.000976562)" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
          <div className="col-3 p-0">
            <p className={`${style.SubTitle} border-0 text-center text-white`}>Support</p>
            <p className={`border-0 text-center text-white flex justify-center mt-3`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M12 19.5C11.8013 19.5012 11.6069 19.4432 11.4413 19.3334C11.2758 19.2236 11.1468 19.067 11.0706 18.8835C10.9944 18.7001 10.9746 18.4981 11.0137 18.3033C11.0527 18.1086 11.1489 17.9299 11.29 17.79L16.59 12.5L11.29 7.21003C11.1261 7.01873 11.0405 6.77265 11.0502 6.52097C11.06 6.2693 11.1643 6.03056 11.3424 5.85246C11.5205 5.67437 11.7592 5.57004 12.0109 5.56032C12.2626 5.55059 12.5087 5.6362 12.7 5.80003L18.7 11.8C18.8862 11.9874 18.9907 12.2408 18.9907 12.505C18.9907 12.7692 18.8862 13.0227 18.7 13.21L12.7 19.21C12.5137 19.3948 12.2623 19.4989 12 19.5Z" fill="white" />
                <path d="M5.99996 19.5002C5.80133 19.5013 5.60686 19.4433 5.44134 19.3335C5.27582 19.2237 5.14675 19.0671 5.07059 18.8837C4.99442 18.7002 4.97461 18.4983 5.01368 18.3035C5.05275 18.1088 5.14893 17.9301 5.28996 17.7902L10.59 12.5002L5.28996 7.21019C5.10165 7.02188 4.99586 6.76649 4.99586 6.50019C4.99586 6.23388 5.10165 5.97849 5.28996 5.79019C5.47826 5.60188 5.73365 5.49609 5.99996 5.49609C6.26626 5.49609 6.52165 5.60188 6.70996 5.79019L12.71 11.7902C12.8962 11.9775 13.0007 12.231 13.0007 12.4952C13.0007 12.7594 12.8962 13.0128 12.71 13.2002L6.70996 19.2002C6.61734 19.2947 6.5069 19.3698 6.38502 19.4213C6.26315 19.4728 6.13226 19.4996 5.99996 19.5002Z" fill="white" />
              </svg>
              Privacy Policy</p>
            <p className={`border-0 text-center text-white flex justify-center ms-4`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M12 19.5C11.8013 19.5012 11.6069 19.4432 11.4413 19.3334C11.2758 19.2236 11.1468 19.067 11.0706 18.8835C10.9944 18.7001 10.9746 18.4981 11.0137 18.3033C11.0527 18.1086 11.1489 17.9299 11.29 17.79L16.59 12.5L11.29 7.21003C11.1261 7.01873 11.0405 6.77265 11.0502 6.52097C11.06 6.2693 11.1643 6.03056 11.3424 5.85246C11.5205 5.67437 11.7592 5.57004 12.0109 5.56032C12.2626 5.55059 12.5087 5.6362 12.7 5.80003L18.7 11.8C18.8862 11.9874 18.9907 12.2408 18.9907 12.505C18.9907 12.7692 18.8862 13.0227 18.7 13.21L12.7 19.21C12.5137 19.3948 12.2623 19.4989 12 19.5Z" fill="white" />
                <path d="M5.99996 19.5002C5.80133 19.5013 5.60686 19.4433 5.44134 19.3335C5.27582 19.2237 5.14675 19.0671 5.07059 18.8837C4.99442 18.7002 4.97461 18.4983 5.01368 18.3035C5.05275 18.1088 5.14893 17.9301 5.28996 17.7902L10.59 12.5002L5.28996 7.21019C5.10165 7.02188 4.99586 6.76649 4.99586 6.50019C4.99586 6.23388 5.10165 5.97849 5.28996 5.79019C5.47826 5.60188 5.73365 5.49609 5.99996 5.49609C6.26626 5.49609 6.52165 5.60188 6.70996 5.79019L12.71 11.7902C12.8962 11.9775 13.0007 12.231 13.0007 12.4952C13.0007 12.7594 12.8962 13.0128 12.71 13.2002L6.70996 19.2002C6.61734 19.2947 6.5069 19.3698 6.38502 19.4213C6.26315 19.4728 6.13226 19.4996 5.99996 19.5002Z" fill="white" />
              </svg>
              Terms & Condition</p>
            <p className={`border-0 text-center text-white flex ms-28`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M12 19.5C11.8013 19.5012 11.6069 19.4432 11.4413 19.3334C11.2758 19.2236 11.1468 19.067 11.0706 18.8835C10.9944 18.7001 10.9746 18.4981 11.0137 18.3033C11.0527 18.1086 11.1489 17.9299 11.29 17.79L16.59 12.5L11.29 7.21003C11.1261 7.01873 11.0405 6.77265 11.0502 6.52097C11.06 6.2693 11.1643 6.03056 11.3424 5.85246C11.5205 5.67437 11.7592 5.57004 12.0109 5.56032C12.2626 5.55059 12.5087 5.6362 12.7 5.80003L18.7 11.8C18.8862 11.9874 18.9907 12.2408 18.9907 12.505C18.9907 12.7692 18.8862 13.0227 18.7 13.21L12.7 19.21C12.5137 19.3948 12.2623 19.4989 12 19.5Z" fill="white" />
                <path d="M5.99996 19.5002C5.80133 19.5013 5.60686 19.4433 5.44134 19.3335C5.27582 19.2237 5.14675 19.0671 5.07059 18.8837C4.99442 18.7002 4.97461 18.4983 5.01368 18.3035C5.05275 18.1088 5.14893 17.9301 5.28996 17.7902L10.59 12.5002L5.28996 7.21019C5.10165 7.02188 4.99586 6.76649 4.99586 6.50019C4.99586 6.23388 5.10165 5.97849 5.28996 5.79019C5.47826 5.60188 5.73365 5.49609 5.99996 5.49609C6.26626 5.49609 6.52165 5.60188 6.70996 5.79019L12.71 11.7902C12.8962 11.9775 13.0007 12.231 13.0007 12.4952C13.0007 12.7594 12.8962 13.0128 12.71 13.2002L6.70996 19.2002C6.61734 19.2947 6.5069 19.3698 6.38502 19.4213C6.26315 19.4728 6.13226 19.4996 5.99996 19.5002Z" fill="white" />
              </svg>
              Faq</p>
          </div>
          <div className="col-3 p-0">
            <p className={`${style.SubTitle} border-0 text-center text-white`}>Quick Link</p>
            <p className={`border-0 text-center text-white flex ms-28 mt-3`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M12 19.5C11.8013 19.5012 11.6069 19.4432 11.4413 19.3334C11.2758 19.2236 11.1468 19.067 11.0706 18.8835C10.9944 18.7001 10.9746 18.4981 11.0137 18.3033C11.0527 18.1086 11.1489 17.9299 11.29 17.79L16.59 12.5L11.29 7.21003C11.1261 7.01873 11.0405 6.77265 11.0502 6.52097C11.06 6.2693 11.1643 6.03056 11.3424 5.85246C11.5205 5.67437 11.7592 5.57004 12.0109 5.56032C12.2626 5.55059 12.5087 5.6362 12.7 5.80003L18.7 11.8C18.8862 11.9874 18.9907 12.2408 18.9907 12.505C18.9907 12.7692 18.8862 13.0227 18.7 13.21L12.7 19.21C12.5137 19.3948 12.2623 19.4989 12 19.5Z" fill="white" />
                <path d="M5.99996 19.5002C5.80133 19.5013 5.60686 19.4433 5.44134 19.3335C5.27582 19.2237 5.14675 19.0671 5.07059 18.8837C4.99442 18.7002 4.97461 18.4983 5.01368 18.3035C5.05275 18.1088 5.14893 17.9301 5.28996 17.7902L10.59 12.5002L5.28996 7.21019C5.10165 7.02188 4.99586 6.76649 4.99586 6.50019C4.99586 6.23388 5.10165 5.97849 5.28996 5.79019C5.47826 5.60188 5.73365 5.49609 5.99996 5.49609C6.26626 5.49609 6.52165 5.60188 6.70996 5.79019L12.71 11.7902C12.8962 11.9775 13.0007 12.231 13.0007 12.4952C13.0007 12.7594 12.8962 13.0128 12.71 13.2002L6.70996 19.2002C6.61734 19.2947 6.5069 19.3698 6.38502 19.4213C6.26315 19.4728 6.13226 19.4996 5.99996 19.5002Z" fill="white" />
              </svg>
              About</p>
            <p className={`border-0 text-center text-white flex ms-28`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M12 19.5C11.8013 19.5012 11.6069 19.4432 11.4413 19.3334C11.2758 19.2236 11.1468 19.067 11.0706 18.8835C10.9944 18.7001 10.9746 18.4981 11.0137 18.3033C11.0527 18.1086 11.1489 17.9299 11.29 17.79L16.59 12.5L11.29 7.21003C11.1261 7.01873 11.0405 6.77265 11.0502 6.52097C11.06 6.2693 11.1643 6.03056 11.3424 5.85246C11.5205 5.67437 11.7592 5.57004 12.0109 5.56032C12.2626 5.55059 12.5087 5.6362 12.7 5.80003L18.7 11.8C18.8862 11.9874 18.9907 12.2408 18.9907 12.505C18.9907 12.7692 18.8862 13.0227 18.7 13.21L12.7 19.21C12.5137 19.3948 12.2623 19.4989 12 19.5Z" fill="white" />
                <path d="M5.99996 19.5002C5.80133 19.5013 5.60686 19.4433 5.44134 19.3335C5.27582 19.2237 5.14675 19.0671 5.07059 18.8837C4.99442 18.7002 4.97461 18.4983 5.01368 18.3035C5.05275 18.1088 5.14893 17.9301 5.28996 17.7902L10.59 12.5002L5.28996 7.21019C5.10165 7.02188 4.99586 6.76649 4.99586 6.50019C4.99586 6.23388 5.10165 5.97849 5.28996 5.79019C5.47826 5.60188 5.73365 5.49609 5.99996 5.49609C6.26626 5.49609 6.52165 5.60188 6.70996 5.79019L12.71 11.7902C12.8962 11.9775 13.0007 12.231 13.0007 12.4952C13.0007 12.7594 12.8962 13.0128 12.71 13.2002L6.70996 19.2002C6.61734 19.2947 6.5069 19.3698 6.38502 19.4213C6.26315 19.4728 6.13226 19.4996 5.99996 19.5002Z" fill="white" />
              </svg>
              Service</p>
            <p className={`border-0 text-center text-white flex ms-28`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M12 19.5C11.8013 19.5012 11.6069 19.4432 11.4413 19.3334C11.2758 19.2236 11.1468 19.067 11.0706 18.8835C10.9944 18.7001 10.9746 18.4981 11.0137 18.3033C11.0527 18.1086 11.1489 17.9299 11.29 17.79L16.59 12.5L11.29 7.21003C11.1261 7.01873 11.0405 6.77265 11.0502 6.52097C11.06 6.2693 11.1643 6.03056 11.3424 5.85246C11.5205 5.67437 11.7592 5.57004 12.0109 5.56032C12.2626 5.55059 12.5087 5.6362 12.7 5.80003L18.7 11.8C18.8862 11.9874 18.9907 12.2408 18.9907 12.505C18.9907 12.7692 18.8862 13.0227 18.7 13.21L12.7 19.21C12.5137 19.3948 12.2623 19.4989 12 19.5Z" fill="white" />
                <path d="M5.99996 19.5002C5.80133 19.5013 5.60686 19.4433 5.44134 19.3335C5.27582 19.2237 5.14675 19.0671 5.07059 18.8837C4.99442 18.7002 4.97461 18.4983 5.01368 18.3035C5.05275 18.1088 5.14893 17.9301 5.28996 17.7902L10.59 12.5002L5.28996 7.21019C5.10165 7.02188 4.99586 6.76649 4.99586 6.50019C4.99586 6.23388 5.10165 5.97849 5.28996 5.79019C5.47826 5.60188 5.73365 5.49609 5.99996 5.49609C6.26626 5.49609 6.52165 5.60188 6.70996 5.79019L12.71 11.7902C12.8962 11.9775 13.0007 12.231 13.0007 12.4952C13.0007 12.7594 12.8962 13.0128 12.71 13.2002L6.70996 19.2002C6.61734 19.2947 6.5069 19.3698 6.38502 19.4213C6.26315 19.4728 6.13226 19.4996 5.99996 19.5002Z" fill="white" />
              </svg>
              Gallery</p>
          </div>
          <div className="col-3 p-0">
            <p className={`${style.SubTitle} border-0 text-white`}>Contact Us</p>
            <p className={`border-0 text-center text-white mt-3 flex items-center`}>
              <span className='rounded-circle bg-white me-2 p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M20.2077 16.06C19.6068 15.5561 16.0827 13.3244 15.4969 13.4269C15.2219 13.4757 15.0116 13.7101 14.4485 14.3818C14.1881 14.7124 13.9021 15.0221 13.5932 15.3079C13.0273 15.1712 12.4795 14.9681 11.9611 14.7029C9.92838 13.7132 8.28618 12.0705 7.29713 10.0375C7.03191 9.51917 6.82884 8.97134 6.69213 8.40538C6.97794 8.09648 7.28758 7.81052 7.61819 7.55013C8.28919 6.98706 8.52431 6.77806 8.57313 6.50169C8.67556 5.91456 6.44188 2.39181 5.94 1.79094C5.72963 1.54206 5.5385 1.375 5.29375 1.375C4.58425 1.375 1.375 5.34325 1.375 5.8575C1.375 5.89944 1.44375 10.0306 6.66119 15.3388C11.9694 20.5563 16.1006 20.625 16.1425 20.625C16.6567 20.625 20.625 17.4157 20.625 16.7062C20.625 16.4615 20.4579 16.2704 20.2077 16.06ZM15.8125 10.3125H17.1875C17.1859 8.85431 16.6059 7.45632 15.5748 6.42522C14.5437 5.39413 13.1457 4.81414 11.6875 4.8125V6.1875C12.7812 6.18859 13.8298 6.62354 14.6031 7.39689C15.3765 8.17024 15.8114 9.21882 15.8125 10.3125Z" fill="#1E144F" />
                  <path d="M19.25 10.3125H20.625C20.6223 7.94297 19.6798 5.67126 18.0043 3.99575C16.3287 2.32023 14.057 1.37773 11.6875 1.375V2.75C13.6925 2.75237 15.6147 3.54989 17.0324 4.96762C18.4501 6.38535 19.2476 8.30753 19.25 10.3125Z" fill="#1E144F" />
                </svg>
              </span>
              +91 58695 86328
            </p>
            <p className={`border-0 text-center text-white flex items-center`}>
              <span className='rounded-circle bg-white me-2 p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.70024 4.22645L8.64367 10.1725C9.93995 11.4663 12.0589 11.4674 13.3563 10.1725L19.2997 4.22645C19.3138 4.21248 19.3246 4.19559 19.3314 4.17697C19.3382 4.15836 19.3408 4.13847 19.339 4.11873C19.3373 4.09899 19.3312 4.07988 19.3213 4.06275C19.3113 4.04562 19.2977 4.03088 19.2814 4.0196C18.6752 3.59683 17.9376 3.34619 17.1432 3.34619H4.85684C4.0623 3.34619 3.32474 3.59687 2.71854 4.0196C2.70225 4.03088 2.68865 4.04562 2.67869 4.06275C2.66873 4.07988 2.66266 4.09899 2.66091 4.11873C2.65917 4.13847 2.66178 4.15836 2.66858 4.17697C2.67537 4.19559 2.68618 4.21248 2.70024 4.22645ZM1.11194 7.09105C1.11146 6.4869 1.25828 5.89174 1.53969 5.35713C1.54952 5.33828 1.56365 5.32202 1.58094 5.30966C1.59823 5.2973 1.6182 5.2892 1.63921 5.28601C1.66022 5.28282 1.68169 5.28463 1.70187 5.2913C1.72206 5.29797 1.74038 5.3093 1.75535 5.32439L7.62355 11.1926C9.48182 13.0536 12.517 13.0546 14.3764 11.1926L20.2446 5.32439C20.2596 5.3093 20.2779 5.29797 20.2981 5.2913C20.3183 5.28463 20.3398 5.28282 20.3608 5.28601C20.3818 5.2892 20.4018 5.2973 20.419 5.30966C20.4363 5.32202 20.4505 5.33828 20.4603 5.35713C20.7417 5.89175 20.8885 6.4869 20.888 7.09105V14.9087C20.888 16.9751 19.2071 18.6536 17.1432 18.6536H4.85684C2.79296 18.6536 1.11194 16.9751 1.11194 14.9087V7.09105Z" fill="#1E144F" />
                </svg>
              </span>
              Info@Glouries @gmail.com
            </p>
            <div className={`border-0 text-justify text-white flex`}>
              <span className='rounded-circle bg-white me-2 p-2' style={{ height: '2.2rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0.625C6.0375 0.625 2.8125 3.85 2.8125 7.8125C2.8125 14.0188 9.01875 18.9188 9.28125 19.125C9.49375 19.2938 9.74375 19.375 10 19.375C10.2562 19.375 10.5062 19.2938 10.7188 19.125C10.9812 18.9188 17.1875 14.0188 17.1875 7.8125C17.1875 3.85 13.9625 0.625 10 0.625ZM10 10.6C8.375 10.6 7.05625 9.28125 7.05625 7.65625C7.05625 6.03125 8.375 4.7125 10 4.7125C11.625 4.7125 12.9437 6.03125 12.9437 7.65625C12.9437 9.28125 11.625 10.6 10 10.6Z" fill="#1E144F" />
                </svg>
              </span>
              <p> SH-417, 4th Floor, Eon Square LP Savani Road beside Shell Petrol Pump Adajan Surat, Gujarat 395009 India.</p>
            </div>
          </div>
        </div>
      </div>
      <footer className='border-top border-muted mt-5'>
        <p className={`text-center ${style.Dsc} mb-0 py-4`} style={{fontSize:'1rem'}}>© 2000-2021, Glorious Hospital  All Rights Reserved</p>
      </footer>
    </section>
  )
}

export default Footer