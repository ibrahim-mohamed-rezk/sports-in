import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import { ar, en } from "../../assets/langs/translation";

const TrainersCard = ({ cardData }) => {
  // to set lang
  const { lang } = useSelector((state) => state.settings);
  const currentLang = lang === "en" ? en : ar;

  const navigate = useNavigate();
  return (
    <div className="main-shadow w-[48%] sm:w-[clamp(200px,18.47222222222222vw,266px)] relative border border-[#F1F1F2] rounded-[clamp(8px,0.625vw,12px)] flex flex-col justify-between py-[clamp(5px,0.5208vw,10px)] ">
      <div className="w-full rounded-[clamp(12px,1.197917vw,23px)] px-[clamp(5px,0.5208vw,10px)]  ">
        <svg
          width="37"
          height="60"
          viewBox="0 0 37 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-[10px]"
        >
          <g filter="url(#filter0_d_1797_6064)">
            <path
              d="M4 1C4 0.447716 4.44772 0 5 0H32C32.5523 0 33 0.447715 33 1V50.7105C33 51.3638 32.3872 51.8458 31.7511 51.6968C29.1884 51.0963 23.2172 49.81 18.9394 49.7714C14.3568 49.7301 7.92436 51.0863 5.24621 51.7026C4.61103 51.8488 4 51.3671 4 50.7153V1Z"
              fill="url(#paint0_linear_1797_6064)"
            />
          </g>
          <path
            d="M17.7377 14.0063C16.6118 14.2025 15.7788 14.8905 15.4376 15.9026C15.3154 16.258 15.2841 16.5167 15.3012 16.9517C15.3296 17.6965 15.5855 18.2737 16.1285 18.811C16.6886 19.3654 17.3311 19.627 18.1357 19.627C18.4569 19.627 18.565 19.6156 18.7924 19.553C19.307 19.4166 19.6738 19.2119 20.0633 18.8366C20.8138 18.1201 21.101 17.091 20.8366 16.0789C20.7115 15.6069 20.4556 15.1691 20.1002 14.8109C19.8472 14.5607 19.6112 14.3929 19.2899 14.2423C18.9175 14.0688 18.6645 14.012 18.2068 14.0034C17.9878 13.9978 17.7775 14.0006 17.7377 14.0063Z"
            fill="white"
          />
          <path
            d="M14.7002 20.5021C13.9639 20.6471 13.3271 21.1531 13.0513 21.8156C12.8864 22.2164 12.8693 22.3501 12.858 23.4617L12.8438 24.4795H18.109H23.3743L23.363 23.4617C23.3516 22.4752 23.3487 22.4382 23.2748 22.171C22.999 21.1418 22.2229 20.5334 21.117 20.4794C20.8128 20.4651 20.7843 20.468 20.7559 20.5163C20.736 20.5447 20.4176 21.2072 20.0451 21.9862C19.6699 22.7651 19.3543 23.4048 19.3429 23.4077C19.3116 23.4162 18.6208 22.2335 18.6208 22.1738C18.6208 22.1482 18.6833 22.043 18.7629 21.9378C18.9278 21.7132 19.0046 21.5227 19.0416 21.247C19.0728 21.0252 19.0472 20.8262 18.9762 20.7153C18.9079 20.613 18.726 20.5362 18.4701 20.5021C17.8759 20.4196 17.4125 20.5078 17.2561 20.7295C17.0941 20.9541 17.1993 21.6734 17.4267 21.8781C17.5802 22.0146 17.6087 22.2079 17.5035 22.3813C17.4694 22.441 17.3215 22.6941 17.1765 22.9443C17.0287 23.1944 16.9008 23.4048 16.8894 23.4134C16.8752 23.419 16.6449 22.9613 16.3748 22.3956C15.5617 20.6926 15.4906 20.5561 15.4025 20.5106C15.3172 20.4651 14.9078 20.4595 14.7002 20.5021Z"
            fill="white"
          />
          <path
            d="M25.2316 21.3016C24.5862 21.384 24.1058 22.0322 24.2166 22.6691C24.3019 23.1581 24.6658 23.5476 25.1435 23.6584C25.5187 23.7466 25.5045 23.7352 25.6182 23.9683C25.7519 24.2327 25.8059 24.4915 25.8315 24.9662L25.8485 25.333H17.2199C9.57219 25.333 8.57713 25.3387 8.44636 25.3756C8.27009 25.4297 8.14784 25.5292 8.06255 25.6855C8.00569 25.7936 8 25.839 8 26.328C8 26.8142 8.00569 26.8625 8.06255 26.9677C8.13931 27.1099 10.2687 29.2336 10.4024 29.3019C10.4876 29.3445 10.6042 29.353 11.2723 29.3644C11.9632 29.3758 12.0456 29.3729 12.0598 29.3303C12.0712 29.3047 12.0513 29.0176 12.02 28.6906C11.949 27.9599 11.9603 27.8889 12.1508 27.8036C12.2702 27.7496 12.401 27.7496 18.1553 27.7552C23.8328 27.7638 24.0375 27.7666 24.1114 27.8178C24.2479 27.9088 24.2621 28.0225 24.2081 28.5939C24.1825 28.8726 24.1541 29.1597 24.1427 29.2336L24.1257 29.3701H24.8762C25.587 29.3672 25.6353 29.3644 25.7775 29.3047C25.9054 29.2507 26.0902 29.0801 27.0511 28.1192C27.6709 27.5022 28.1883 26.9677 28.2026 26.9308C28.2367 26.8426 28.2367 25.913 28.1997 25.7907C28.1571 25.6343 28.0547 25.5093 27.9012 25.4268C27.7619 25.3472 27.7505 25.3472 27.199 25.3387L26.636 25.3273V25.1141C26.636 24.8923 26.4996 24.1872 26.366 23.7409C26.2693 23.4111 26.2721 23.3287 26.3944 23.1609C26.6645 22.7799 26.6872 22.345 26.4569 21.91C26.221 21.4665 25.7547 21.2362 25.2316 21.3016Z"
            fill="white"
          />
          <path
            d="M12.8675 28.6222C12.8589 28.6364 13.0494 30.4986 13.2854 32.7673C13.7659 37.3162 13.7289 37.0802 13.9592 37.2849C14.1753 37.4839 13.9535 37.4725 18.1242 37.4725C21.8145 37.4725 21.8884 37.4725 22.0391 37.4157C22.2694 37.3304 22.4172 37.1484 22.4854 36.8727C22.5139 36.7504 22.8749 33.3786 23.182 30.3792C23.2673 29.5348 23.344 28.7899 23.3526 28.7217L23.3696 28.6023H18.1242C15.2385 28.6023 12.8731 28.6108 12.8675 28.6222Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_1797_6064"
              x="0"
              y="0"
              width="37"
              height="59.7285"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1797_6064"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1797_6064"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_1797_6064"
              x1="18.5"
              y1="0"
              x2="18.5"
              y2="52"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.44" stop-color="#9AD7B3" />
              <stop offset="1" stop-color="#28AF60" />
            </linearGradient>
          </defs>
        </svg>

        <img
          className="w-full h-[150px] sm:h-[clamp(210px,20vw,288px)] rounded-[clamp(5px,0.6944444444444444vw,10px)] "
          src={
            cardData.image !== "https://api.sportiin.com"
              ? cardData.image
              : "https://via.assets.so/img.jpg?w=249&h=141"
          }
          alt="Trainer"
        />
      </div>
      <div className="w-full mt-[5px]">
        <h2 className="font-[Cairo] w-full text-center text-[clamp(9px,0.729166vw,14px)] font-[700] leading-[clamp(15px,1.09375vw,21px)] text-[#000000] ">
          {cardData.name}
        </h2>
        <p className="font-[Cairo] w-full text-center text-[clamp(8px,0.6944444444444444vw,10px)] font-[500] text-[#000000] ">
          {cardData.job_title}
        </p>

        <div className="flex w-full items-center justify-center py-[5px] border-b border-t border-[#F1F1F2] gap-[20px] mt-[10px] ">
          <div className="flex items-center justify-center gap-[5px] ">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.66797 6.76187C2.66797 3.49586 5.27131 0.833008 8.5013 0.833008C11.7313 0.833008 14.3346 3.49586 14.3346 6.76187C14.3346 8.3386 13.8853 10.0316 13.0909 11.4942C12.2976 12.9551 11.1384 14.2245 9.68831 14.9023C8.93501 15.2544 8.06759 15.2544 7.31429 14.9023C5.86422 14.2245 4.70505 12.9551 3.91167 11.4942C3.11732 10.0316 2.66797 8.3386 2.66797 6.76187ZM8.5013 1.83301C5.84026 1.83301 3.66797 4.03133 3.66797 6.76187C3.66797 8.15992 4.06972 9.68995 4.79044 11.017C5.51213 12.3458 6.53198 13.4328 7.73773 13.9963C8.22267 14.223 8.77993 14.223 9.26487 13.9963C10.4706 13.4328 11.4905 12.3458 12.2122 11.017C12.9329 9.68995 13.3346 8.15992 13.3346 6.76187C13.3346 4.03133 11.1623 1.83301 8.5013 1.83301ZM8.5013 5.16634C7.67287 5.16634 7.0013 5.83791 7.0013 6.66634C7.0013 7.49477 7.67287 8.16634 8.5013 8.16634C9.32973 8.16634 10.0013 7.49477 10.0013 6.66634C10.0013 5.83791 9.32973 5.16634 8.5013 5.16634ZM6.0013 6.66634C6.0013 5.28563 7.12059 4.16634 8.5013 4.16634C9.88201 4.16634 11.0013 5.28563 11.0013 6.66634C11.0013 8.04705 9.88201 9.16634 8.5013 9.16634C7.12059 9.16634 6.0013 8.04705 6.0013 6.66634Z"
                fill="#075178"
              />
            </svg>
            <span className="font-[Cairo] text-[clamp(9px,0.729166vw,14px)] font-[400] leading-[clamp(14px,0.9375vw,18px)] text-[#1B1B1B99] ">
              {cardData.country_id}
            </span>
          </div>
          <div className="flex items-center justify-center gap-[5px] ">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.4987 4.16699C5.48618 4.16699 4.66537 4.9878 4.66537 6.00033C4.66537 7.01285 5.48618 7.83366 6.4987 7.83366C7.51122 7.83366 8.33203 7.01285 8.33203 6.00033C8.33203 4.9878 7.51122 4.16699 6.4987 4.16699ZM5.66537 6.00033C5.66537 5.54009 6.03846 5.16699 6.4987 5.16699C6.95894 5.16699 7.33203 5.54009 7.33203 6.00033C7.33203 6.46056 6.95894 6.83366 6.4987 6.83366C6.03846 6.83366 5.66537 6.46056 5.66537 6.00033Z"
                fill="#075178"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.4987 8.16699C5.70153 8.16699 4.95511 8.32749 4.38947 8.6103C3.85375 8.87817 3.33203 9.34072 3.33203 10.0003L3.33195 10.042C3.33092 10.3822 3.3292 10.9551 3.87218 11.3482C4.12415 11.5305 4.45663 11.6469 4.86849 11.721C5.28417 11.7958 5.81684 11.8337 6.4987 11.8337C7.18056 11.8337 7.71323 11.7958 8.1289 11.721C8.54077 11.6469 8.87324 11.5305 9.12521 11.3482C9.6682 10.9551 9.66647 10.3822 9.66545 10.042L9.66537 10.0003C9.66537 9.34072 9.14365 8.87817 8.60792 8.6103C8.04229 8.32749 7.29587 8.16699 6.4987 8.16699ZM4.33203 10.0003C4.33203 9.92355 4.40727 9.71944 4.83669 9.50473C5.2362 9.30497 5.82311 9.16699 6.4987 9.16699C7.17429 9.16699 7.7612 9.30497 8.16071 9.50473C8.59013 9.71944 8.66537 9.92355 8.66537 10.0003C8.66537 10.4033 8.63971 10.4651 8.53885 10.5381C8.45749 10.597 8.28996 10.6759 7.95183 10.7368C7.6175 10.7969 7.15017 10.8337 6.4987 10.8337C5.84722 10.8337 5.3799 10.7969 5.04557 10.7368C4.70744 10.6759 4.53991 10.597 4.45855 10.5381C4.35769 10.4651 4.33203 10.4033 4.33203 10.0003Z"
                fill="#075178"
              />
              <path
                d="M13.1654 8.50033C13.4415 8.50033 13.6654 8.27647 13.6654 8.00033C13.6654 7.72418 13.4415 7.50033 13.1654 7.50033H10.4987C10.2226 7.50033 9.9987 7.72418 9.9987 8.00033C9.9987 8.27647 10.2226 8.50033 10.4987 8.50033H13.1654Z"
                fill="#075178"
              />
              <path
                d="M13.6654 6.00033C13.6654 6.27647 13.4415 6.50033 13.1654 6.50033H9.83203C9.55589 6.50033 9.33203 6.27647 9.33203 6.00033C9.33203 5.72418 9.55589 5.50033 9.83203 5.50033H13.1654C13.4415 5.50033 13.6654 5.72418 13.6654 6.00033Z"
                fill="#075178"
              />
              <path
                d="M13.1654 10.5003C13.4415 10.5003 13.6654 10.2765 13.6654 10.0003C13.6654 9.72418 13.4415 9.50033 13.1654 9.50033H11.1654C10.8892 9.50033 10.6654 9.72418 10.6654 10.0003C10.6654 10.2765 10.8892 10.5003 11.1654 10.5003H13.1654Z"
                fill="#075178"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.12775 2.16699H9.86964C11.0948 2.16698 12.0652 2.16697 12.8247 2.26908C13.6063 2.37417 14.239 2.59558 14.7379 3.09449C15.2368 3.5934 15.4582 4.22603 15.5633 5.00764C15.6654 5.76711 15.6654 6.73753 15.6654 7.96269V8.03793C15.6654 9.26309 15.6654 10.2335 15.5633 10.993C15.4582 11.7746 15.2368 12.4073 14.7379 12.9062C14.239 13.4051 13.6063 13.6265 12.8247 13.7316C12.0652 13.8337 11.0948 13.8337 9.86967 13.8337H7.12776C5.9026 13.8337 4.93215 13.8337 4.17268 13.7316C3.39107 13.6265 2.75844 13.4051 2.25953 12.9062C1.76062 12.4073 1.53921 11.7746 1.43412 10.993C1.33201 10.2335 1.33202 9.26311 1.33203 8.03795V7.96271C1.33202 6.73755 1.33201 5.76712 1.43412 5.00764C1.53921 4.22603 1.76062 3.5934 2.25953 3.09449C2.75844 2.59558 3.39107 2.37417 4.17268 2.26908C4.93216 2.16697 5.90259 2.16698 7.12775 2.16699ZM4.30593 3.26017C3.6352 3.35034 3.24877 3.51946 2.96663 3.80159C2.68449 4.08373 2.51538 4.47017 2.4252 5.14089C2.33309 5.826 2.33203 6.72911 2.33203 8.00033C2.33203 9.27154 2.33309 10.1747 2.4252 10.8598C2.51538 11.5305 2.68449 11.9169 2.96663 12.1991C3.24877 12.4812 3.6352 12.6503 4.30593 12.7405C4.99104 12.8326 5.89415 12.8337 7.16536 12.8337H9.83203C11.1032 12.8337 12.0064 12.8326 12.6915 12.7405C13.3622 12.6503 13.7486 12.4812 14.0308 12.1991C14.3129 11.9169 14.482 11.5305 14.5722 10.8598C14.6643 10.1747 14.6654 9.27154 14.6654 8.00033C14.6654 6.72911 14.6643 5.826 14.5722 5.14089C14.482 4.47017 14.3129 4.08373 14.0308 3.80159C13.7486 3.51945 13.3622 3.35034 12.6915 3.26017C12.0064 3.16805 11.1032 3.16699 9.83203 3.16699H7.16537C5.89415 3.16699 4.99104 3.16805 4.30593 3.26017Z"
                fill="#075178"
              />
            </svg>
            <span className="font-[Cairo] text-[clamp(9px,0.729166vw,14px)] font-[400] leading-[clamp(14px,0.9375vw,18px)] text-[#1B1B1B99] ">
              {cardData.age} {currentLang.years}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full mt-[10px] px-[clamp(5px,0.5208vw,10px)] ">
        <button
          onClick={() => navigate(`/trainers/trainer/${cardData.id}`)}
          className="w-[80%] mx-auto flex items-center justify-center font-[Cairo] text-[clamp(9px,0.729166vw,14px)] font-[400] leading-[clamp(14px,0.9375vw,18px)] text-[#fff] py-[clamp(5px,0.9027777777777777vw,13px)] bg-[#075178] rounded-[8px] "
        >
          {currentLang.SeeMore}
        </button>
      </div>
    </div>
  );
};

export default TrainersCard;