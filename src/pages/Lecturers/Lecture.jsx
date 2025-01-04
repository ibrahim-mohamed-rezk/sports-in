import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ar, en } from "../../assets/langs/translation";
import server from "../../assets/axios/server";
import { useParams } from "react-router-dom";
import lectureBanner from "../../assets/images/luctures/lectureBanner.png";

const Lecture = () => {
  const [lectureData, setLectureData] = useState([]);
  const { lectureId } = useParams();

  // feach trainer data from
  useEffect(() => {
    server
      .get(`/lecture-requests/${lectureId}`)
      .then((res) => {
        setLectureData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [server]);

  // to set lang
  const { lang } = useSelector((state) => state.settings);
  const currentLang = lang === "en" ? en : ar;

  return (
    <main className="container mx-auto lg:max-w-[1060px] flex flex-col items-center justify-center px-[5px] sm:px-0 mb-[50px] mt-[20px]">
      <div
        className="w-full pb-[clamp(110px,12.5vw,180px)] border border-[#F1F1F2] overflow-hidden rounded-[30px]"
        style={{ boxShadow: " 0px 3px 4px 0px #00000008" }}
      >
        {/* user images */}
        <div className="w-full rounded-[12px] h-[clamp(130px,11.041666666666666vw,212px)] relative">
          <img
            className="w-full h-full rounded-[12px]"
            src={lectureBanner}
            alt="academyCover"
            loading="lazy"
          />
          <div className="absolute top-0 end-[20px] ">
            <svg
              width="37"
              height="60"
              viewBox="0 0 37 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1980_13850)">
                <path
                  d="M4 1C4 0.447716 4.44772 0 5 0H32C32.5523 0 33 0.447715 33 1V50.7105C33 51.3638 32.3872 51.8458 31.7511 51.6968C29.1884 51.0963 23.2172 49.81 18.9394 49.7714C14.3568 49.7301 7.92436 51.0863 5.24621 51.7026C4.61103 51.8488 4 51.3671 4 50.7153V1Z"
                  fill="url(#paint0_linear_1980_13850)"
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
                  id="filter0_d_1980_13850"
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
                    result="effect1_dropShadow_1980_13850"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1980_13850"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1980_13850"
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
          </div>
          <div className="absolute top-[60%] sm:top-[50%]  inset-x-[50%] translate-x-[50%] flex flex-col items-center justify-center w-full sm:w-fit">
            <div
              className=" w-[clamp(100px,10.625vw,204px)] h-[clamp(100px,10.625vw,204px)] rounded-full bg-[#fff]  p-[7px] "
              style={{ boxShadow: "0px 3px 4px 0px #00000008" }}
            >
              <img
                className="w-full h-full rounded-full"
                src={
                  lectureData?.image ||
                  "https://via.assets.so/img.jpg?w=800&h=800&tc=blue&bg=#C4C4C4"
                }
                alt="avatar"
                loading="lazy"
              />
            </div>

            {/* user info */}
            <div className="w-fit flex items-center justify-center flex-col gap-[8px] mt-[clamp(10px,1.0416vw,20px)]">
              <h2 className="font-[Cairo] text-nowrap text-[clamp(14px,1.3888888888888888vw,20px)] font-[700] leading-[clamp(14px,1.09375vw,21px)] text-[#000]">
                {lectureData?.name}
              </h2>
              <div className="flex items-center justify-start gap-[5px]">
                <span className="font-[Cairo] flex items-center justify-center gap-[5px] text-[clamp(9px,0.57291vw,11px)] font-[600] leading-[clamp(14px, 1.041vw,20px)] text-[#B0B0B0]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.00014 2.0625C8.26627 2.0625 7.64045 2.53127 7.40852 3.18745C7.30499 3.48035 6.98362 3.63387 6.69072 3.53035C6.39782 3.42682 6.2443 3.10545 6.34783 2.81255C6.73365 1.72094 7.77468 0.9375 9.00014 0.9375C10.2256 0.9375 11.2666 1.72094 11.6525 2.81255C11.756 3.10545 11.6025 3.42682 11.3096 3.53035C11.0167 3.63387 10.6953 3.48035 10.5918 3.18745C10.3598 2.53127 9.73401 2.0625 9.00014 2.0625Z"
                      fill="#28AF60"
                    />
                    <path
                      d="M10.5 9.375H7.5C7.29289 9.375 7.125 9.54289 7.125 9.75V11.3711C7.125 11.5245 7.21836 11.6623 7.36073 11.7193L7.88583 11.9293C8.60106 12.2154 9.39894 12.2154 10.1142 11.9293L10.6393 11.7193C10.7816 11.6623 10.875 11.5245 10.875 11.3711V9.75C10.875 9.54289 10.7071 9.375 10.5 9.375Z"
                      fill="#28AF60"
                    />
                    <path
                      d="M6.00807 11.5269L2.25439 10.4008C2.27696 12.7366 2.41342 14.8879 3.23844 15.6212C4.22695 16.4999 5.81794 16.4999 8.99992 16.4999C12.1819 16.4999 13.7729 16.4999 14.7614 15.6212C15.5864 14.8879 15.7229 12.7366 15.7454 10.4008L11.9919 11.5268C11.9348 12.0764 11.5779 12.5555 11.0571 12.7638L10.532 12.9739C9.54854 13.3672 8.45146 13.3672 7.46801 12.9739L6.94291 12.7638C6.4221 12.5555 6.06526 12.0764 6.00807 11.5269Z"
                      fill="#28AF60"
                    />
                    <path
                      d="M5.7067 3.75H12.2933C14.1309 3.75 15.0497 3.75 15.6701 4.25474C15.7893 4.35175 15.8983 4.46072 15.9953 4.57995C16.5 5.20027 16.5 6.11908 16.5 7.9567C16.5 8.42299 16.5 8.65614 16.3869 8.838C16.3649 8.87343 16.3399 8.90696 16.3123 8.93824C16.1706 9.09881 15.9473 9.1658 15.5007 9.29979L12 10.35V9.75C12 8.92157 11.3284 8.25 10.5 8.25H7.5C6.67157 8.25 6 8.92157 6 9.75V10.35L2.4993 9.29979C2.05268 9.1658 1.82936 9.09881 1.68766 8.93824C1.66006 8.90696 1.63511 8.87343 1.61308 8.838C1.5 8.65614 1.5 8.42299 1.5 7.9567C1.5 6.11908 1.5 5.20027 2.00474 4.57995C2.10175 4.46072 2.21072 4.35175 2.32995 4.25474C2.95027 3.75 3.86908 3.75 5.7067 3.75Z"
                      fill="#28AF60"
                    />
                  </svg>
                  {lectureData?.job_title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* information */}
      <div className="flex w-full flex-col sm:flex-row gap-[15px] mt-[15px] items-start justify-start  ">
        <div className="main-shadow flex flex-col w-full sm:!w-[250px] border border-[#F1F1F2] p-[13px] rounded-[20px] gap-[10px] ">
          <div className="flex items-center justify-start gap-[10px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 6.25C7.48122 6.25 6.25 7.48122 6.25 9C6.25 10.5188 7.48122 11.75 9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.48122 10.5188 6.25 9 6.25ZM7.75 9C7.75 8.30965 8.30965 7.75 9 7.75C9.69036 7.75 10.25 8.30965 10.25 9C10.25 9.69036 9.69036 10.25 9 10.25C8.30965 10.25 7.75 9.69036 7.75 9Z"
                fill="#28AF60"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 12.25C7.80424 12.25 6.68461 12.4907 5.83616 12.915C5.03258 13.3168 4.25 14.0106 4.25 15L4.24987 15.0625C4.24834 15.5728 4.24576 16.4322 5.06023 17.0218C5.43818 17.2953 5.9369 17.4698 6.55469 17.581C7.1782 17.6932 7.97721 17.75 9 17.75C10.0228 17.75 10.8218 17.6932 11.4453 17.581C12.0631 17.4698 12.5618 17.2953 12.9398 17.0218C13.7542 16.4322 13.7517 15.5728 13.7501 15.0625L13.75 15C13.75 14.0106 12.9674 13.3168 12.1638 12.915C11.3154 12.4907 10.1958 12.25 9 12.25ZM5.75 15C5.75 14.8848 5.86285 14.5787 6.50698 14.2566C7.10625 13.957 7.98662 13.75 9 13.75C10.0134 13.75 10.8937 13.957 11.493 14.2566C12.1371 14.5787 12.25 14.8848 12.25 15C12.25 15.6045 12.2115 15.6972 12.0602 15.8067C11.9382 15.895 11.6869 16.0134 11.1797 16.1047C10.6782 16.1949 9.97721 16.25 9 16.25C8.02279 16.25 7.3218 16.1949 6.82031 16.1047C6.31311 16.0134 6.06182 15.895 5.93977 15.8067C5.78849 15.6972 5.75 15.6045 5.75 15Z"
                fill="#28AF60"
              />
              <path
                d="M19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H15C14.5858 11.25 14.25 11.5858 14.25 12C14.25 12.4142 14.5858 12.75 15 12.75H19Z"
                fill="#28AF60"
              />
              <path
                d="M19.75 9C19.75 9.41422 19.4142 9.75 19 9.75H14C13.5858 9.75 13.25 9.41422 13.25 9C13.25 8.58579 13.5858 8.25 14 8.25H19C19.4142 8.25 19.75 8.58579 19.75 9Z"
                fill="#28AF60"
              />
              <path
                d="M19 15.75C19.4142 15.75 19.75 15.4142 19.75 15C19.75 14.5858 19.4142 14.25 19 14.25H16C15.5858 14.25 15.25 14.5858 15.25 15C15.25 15.4142 15.5858 15.75 16 15.75H19Z"
                fill="#28AF60"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65018 22.75 10.1058 22.75 11.9435V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0565 20.75H9.94359C8.10585 20.75 6.65018 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10583 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02503 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02503 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02503 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02503 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976Z"
                fill="#28AF60"
              />
            </svg>
            <div className="font-[700] text-[14px] font-[cairo] ">
              {currentLang.personalInfo}
            </div>
          </div>
          <div className="flex items-center justify-start gap-[20px] ">
            <span>{currentLang.Nationality} :</span>
            <span>{lectureData?.country_id}</span>
          </div>
          <div className="flex items-center justify-start gap-[20px] ">
            <span> {currentLang.location}</span>
            <span>{lectureData?.location}</span>
          </div>
        </div>

        <div className=" flex flex-col w-full sm:w-[calc(100%-250px)]   ">
          <div className="main-shadow text-center border border-[#F1F1F2] p-[13px] rounded-[20px] w-full ">
            {lectureData?.brief_summary}
          </div>

          <div className="main-shadow flex flex-col border border-[#F1F1F2] mt-[20px] p-[13px] rounded-[20px] w-full gap-[15px] ">
            <div className="flex items-center justify-start gap-[10px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.217 3.49965C12.796 2.83345 11.2035 2.83345 9.78252 3.49965L5.48919 5.51246C6.27114 5.59683 6.98602 6.0894 7.31789 6.86377C7.80739 8.00594 7.2783 9.32867 6.13613 9.81817L5.06046 10.2792C4.52594 10.5082 4.22261 10.6406 4.01782 10.7456C4.0167 10.7619 4.01564 10.7788 4.01465 10.7962L9.78261 13.5003C11.2036 14.1665 12.7961 14.1665 14.2171 13.5003L20.9082 10.3634C22.3637 9.68105 22.3637 7.31899 20.9082 6.63664L14.217 3.49965Z"
                  fill="#28AF60"
                />
                <path
                  d="M4.9998 12.9147V16.6254C4.9998 17.6334 5.50331 18.5772 6.38514 19.0656C7.85351 19.8787 10.2038 21 11.9998 21C13.7958 21 16.1461 19.8787 17.6145 19.0656C18.4963 18.5772 18.9998 17.6334 18.9998 16.6254V12.9148L14.8538 14.8585C13.0294 15.7138 10.9703 15.7138 9.14588 14.8585L4.9998 12.9147Z"
                  fill="#28AF60"
                />
                <path
                  d="M5.54544 8.43955C5.92616 8.27638 6.10253 7.83547 5.93936 7.45475C5.7762 7.07403 5.33529 6.89767 4.95456 7.06083L3.84318 7.53714C3.28571 7.77603 2.81328 7.97849 2.44254 8.18705C2.04805 8.40898 1.70851 8.66944 1.45419 9.05513C1.19986 9.44083 1.09421 9.85551 1.04563 10.3055C0.999964 10.7284 0.999981 11.2424 1 11.8489V14.7502C1 15.1644 1.33579 15.5002 1.75 15.5002C2.16422 15.5002 2.5 15.1644 2.5 14.7502V11.8878C2.5 11.232 2.50101 10.7995 2.53696 10.4665C2.57095 10.1517 2.63046 9.99612 2.70645 9.88087C2.78244 9.76562 2.90202 9.64964 3.178 9.49438C3.46985 9.33019 3.867 9.15889 4.46976 8.90056L5.54544 8.43955Z"
                  fill="#28AF60"
                />
              </svg>
              <div className="font-[700] text-[14px] font-[cairo] ">
                {currentLang.qualifications}
              </div>
            </div>
            <div className="w-full flex flex-wrap items-stretch justify-center gap-[clamp(5px,1.7361111111111112vw,25px)] ">
              {lectureData?.qualifications?.map((item) => {
                return (
                  <div className="flex w-[48%] sm:w-[162px] flex-col border border-[#F1F1F2] rounded-[8px] p-[3px]  ">
                    <img
                      className="rounded-[8px] "
                      src={
                        item.image ||
                        "https://via.assets.so/img.jpg?w=155&h=111&tc=blue&bg=#C4C4C4"
                      }
                      alt="trainer image"
                    />
                    <div className="w-full text-center py-[5px] font-[cairo] font-[700] text-[12px] leading-[23px] ">
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="main-shadow flex flex-col border border-[#F1F1F2] mt-[20px] p-[13px] rounded-[20px] w-full gap-[25px] ">
            <div className="flex w-full items-center justify-start gap-[10px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 4.5C17 5.88071 15.8807 7 14.5 7C13.1193 7 12 5.88071 12 4.5C12 3.11929 13.1193 2 14.5 2C15.8807 2 17 3.11929 17 4.5Z"
                  fill="#28AF60"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3633 10.3459C13.8381 11.0937 14.0951 12.1104 14.0951 13.4343C14.0951 18.5171 10.1339 22.75 5 22.75C4.58579 22.75 4.25 22.4142 4.25 22C4.25 21.5858 4.58579 21.25 5 21.25C9.2549 21.25 12.5951 17.7402 12.5951 13.4343C12.5951 12.2909 12.3715 11.5823 12.097 11.1498C11.8323 10.733 11.4884 10.5209 11.116 10.4217C10.726 10.3177 10.2869 10.3349 9.87888 10.4244C9.46283 10.5156 9.15214 10.6655 9.02681 10.7544C8.70695 10.981 8.38076 11.4084 8.24551 11.8566C8.11753 12.2806 8.18065 12.6163 8.44446 12.8713C8.44446 12.8713 8.44447 12.8713 8.44446 12.8713L8.46924 12.8952C8.7671 13.1831 8.77522 13.6579 8.48738 13.9557C8.19954 14.2536 7.72473 14.2617 7.42687 13.9739L7.40209 13.9499C6.62406 13.198 6.56874 12.2209 6.80948 11.4232C7.04295 10.6496 7.57265 9.94634 8.15959 9.53045C8.48766 9.298 8.99767 9.08198 9.55761 8.9592C10.1256 8.83466 10.8178 8.78978 11.5024 8.9723C12.2047 9.15952 12.8787 9.58251 13.3633 10.3459ZM15.5072 14.4639C17.7239 14.1069 19.75 15.8031 19.75 18.0486V21.9957C19.75 22.4099 19.4142 22.7457 19 22.7457C18.5858 22.7457 18.25 22.4099 18.25 21.9957V18.0486C18.25 16.7424 17.0661 15.7322 15.7458 15.9449C15.3368 16.0107 14.9519 15.7326 14.886 15.3237C14.8202 14.9147 15.0983 14.5298 15.5072 14.4639Z"
                  fill="#28AF60"
                />
              </svg>
              <div className="font-[700] text-[14px] font-[cairo] ">
                {currentLang.expWork}
              </div>
            </div>
            <div className="gap-[15px] flex items-start flex-col w-full justify-between">
              {lectureData?.experience?.map((item) => {
                return (
                  <div className="main-shadow flex flex-col sm:flex-row items-center justify-between gap-[5px] border border-[#F1F1F2] p-[10px] rounded-[12px] w-full ">
                    <div className="font-[cairo] font-[700] text-[clamp(9px,0.8334vw,12px)">
                      {item.job_title}
                    </div>
                    <div className="font-[cairo] text-[#767676] font-[700] text-[clamp(9px,0.8334vw,12px)">
                      <span className="text-[#000]">{currentLang.workIn}:</span>{" "}
                      {item.work_place}
                    </div>
                    <div className="font-[cairo] text-[#767676] font-[700] text-[clamp(9px,0.8334vw,12px)">
                      {currentLang.experience} {item.num_of_work_years}{" "}
                      {currentLang.years}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="main-shadow flex flex-col border border-[#F1F1F2] mt-[20px] p-[13px] rounded-[20px] w-full gap-[25px] ">
            <div className="flex w-full items-center justify-start gap-[10px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.54 11.41L15.22 9V11.45L13.54 11.41ZM21 4.87V15.87C21 16.2535 20.9245 16.6332 20.7777 16.9874C20.631 17.3417 20.4159 17.6636 20.1448 17.9348C19.8736 18.2059 19.5517 18.421 19.1974 18.5677C18.8432 18.7145 18.4635 18.79 18.08 18.79H17C16.7012 18.7893 16.4053 18.8492 16.1303 18.9661C15.8553 19.0829 15.6069 19.2544 15.4 19.47L13.59 21.37C13.3817 21.5887 13.1312 21.7629 12.8536 21.8819C12.5759 22.0009 12.277 22.0623 11.975 22.0623C11.673 22.0623 11.3741 22.0009 11.0964 21.8819C10.8188 21.7629 10.5683 21.5887 10.36 21.37L8.69 19.5C8.48305 19.2743 8.23106 19.0944 7.95029 18.9721C7.66953 18.8499 7.36624 18.7878 7.06 18.79H5.92C5.14557 18.79 4.40285 18.4824 3.85525 17.9348C3.30764 17.3871 3 16.6444 3 15.87V4.87C3.01311 4.10427 3.32654 3.37433 3.87273 2.8375C4.41892 2.30066 5.15415 1.99989 5.92 2H18.08C18.8458 1.99989 19.5811 2.30066 20.1273 2.8375C20.6735 3.37433 20.9869 4.10427 21 4.87ZM7.93 12.87C8.16 12.66 8.46 12.43 8.77 12.19C9.85 11.35 11.07 10.4 11.08 9.04C11.08 8.40348 10.8271 7.79303 10.3771 7.34294C9.92697 6.89286 9.31652 6.64 8.68 6.64C8.04348 6.64 7.43303 6.89286 6.98294 7.34294C6.53286 7.79303 6.28 8.40348 6.28 9.04C6.28 9.23891 6.35902 9.42968 6.49967 9.57033C6.64032 9.71098 6.83109 9.79 7.03 9.79C7.22891 9.79 7.41968 9.71098 7.56033 9.57033C7.70098 9.42968 7.78 9.23891 7.78 9.04C7.78 8.80131 7.87482 8.57239 8.0436 8.4036C8.21239 8.23482 8.44131 8.14 8.68 8.14C8.80112 8.13562 8.92189 8.15548 9.03522 8.19841C9.14856 8.24134 9.25218 8.30648 9.34 8.39C9.49557 8.55484 9.58154 8.77335 9.58 9C9.58 9.63 8.58 10.38 7.85 11C7.38428 11.3338 6.95223 11.7123 6.56 12.13C6.38854 12.323 6.27648 12.5614 6.23728 12.8165C6.19809 13.0717 6.23343 13.3327 6.33906 13.5683C6.44468 13.8038 6.6161 14.0039 6.8327 14.1443C7.0493 14.2848 7.30185 14.3597 7.56 14.36H10.33C10.5289 14.36 10.7197 14.281 10.8603 14.1403C11.001 13.9997 11.08 13.8089 11.08 13.61C11.08 13.4111 11.001 13.2203 10.8603 13.0797C10.7197 12.939 10.5289 12.86 10.33 12.86L7.93 12.87ZM17.85 12.21C17.85 12.0111 17.771 11.8203 17.6303 11.6797C17.4897 11.539 17.2989 11.46 17.1 11.46H16.7V7.96C16.7045 7.70816 16.627 7.46168 16.479 7.25782C16.3311 7.05396 16.1208 6.90379 15.88 6.83C15.6398 6.7544 15.3816 6.75833 15.1438 6.8412C14.9059 6.92408 14.7012 7.08147 14.56 7.29L12 11.07C11.8768 11.2452 11.805 11.4513 11.7927 11.665C11.7803 11.8788 11.8279 12.0918 11.93 12.28C12.0249 12.465 12.1678 12.6211 12.3437 12.7319C12.5197 12.8427 12.7222 12.9043 12.93 12.91H15.2V13.57C15.1987 13.668 15.2168 13.7653 15.2534 13.8563C15.29 13.9472 15.3443 14.03 15.4132 14.0997C15.482 14.1695 15.564 14.2249 15.6545 14.2627C15.7449 14.3005 15.842 14.32 15.94 14.32C16.1372 14.32 16.3265 14.2424 16.4668 14.1039C16.6072 13.9654 16.6874 13.7772 16.69 13.58V12.91H17.1C17.2989 12.91 17.4897 12.831 17.6303 12.6903C17.771 12.5497 17.85 12.3589 17.85 12.16V12.21Z"
                  fill="#28AF60"
                />
              </svg>

              <div className="font-[700] text-[14px] font-[cairo] ">خدماتي</div>
            </div>
            <div className="gap-[10px] flex items-center sm:items-start flex-wrap w-full justify-center sm:justify-start">
              {lectureData?.filides?.map((item) => {
                if (item === "") return null;
                return (
                  <div className="main-shadow flex items-center justify-between border border-[#F1F1F2] py-[10px] px-[12px] rounded-[12px] w-fit ">
                    <div>{item}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="main-shadow flex flex-col border border-[#F1F1F2] mt-[20px] p-[13px] rounded-[20px] w-full gap-[15px] ">
            <div className="flex items-center justify-start gap-[10px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.24 1.83002H7.76C6.5806 1.83266 5.45026 2.30234 4.61629 3.13631C3.78233 3.97027 3.31264 5.10062 3.31 6.28002V20.37C3.31253 20.6838 3.39704 20.9914 3.55513 21.2624C3.71322 21.5335 3.93941 21.7584 4.21128 21.9151C4.48314 22.0717 4.79122 22.1546 5.10498 22.1555C5.41874 22.1563 5.72728 22.0752 6 21.92L11.1 19C11.374 18.843 11.6842 18.7604 12 18.7604C12.3158 18.7604 12.626 18.843 12.9 19L18 21.92C18.273 22.0776 18.5826 22.1608 18.8978 22.1612C19.213 22.1616 19.5228 22.0792 19.7962 21.9222C20.0696 21.7653 20.2969 21.5393 20.4555 21.2669C20.6142 20.9945 20.6985 20.6852 20.7 20.37V6.28002C20.6974 5.09889 20.2263 3.96703 19.3902 3.13278C18.554 2.29853 17.4211 1.83001 16.24 1.83002ZM15.62 9.30002L11.62 13.3C11.4772 13.4372 11.288 13.5157 11.09 13.52C10.8991 13.5194 10.716 13.444 10.58 13.31L9 11.8C8.89101 11.6601 8.83513 11.4861 8.84227 11.3089C8.84941 11.1317 8.91912 10.9628 9.03901 10.8321C9.1589 10.7014 9.32122 10.6174 9.49715 10.5951C9.67308 10.5727 9.85124 10.6135 10 10.71L11.05 11.71L14.55 8.24002C14.6135 8.14745 14.697 8.07032 14.7943 8.01432C14.8916 7.95832 15.0002 7.92488 15.1121 7.91645C15.2241 7.90803 15.3365 7.92484 15.4411 7.96565C15.5456 8.00645 15.6397 8.07022 15.7164 8.15223C15.793 8.23425 15.8503 8.33243 15.8839 8.43952C15.9176 8.54662 15.9268 8.6599 15.9108 8.77102C15.8948 8.88214 15.8541 8.98825 15.7917 9.08154C15.7292 9.17483 15.6466 9.2529 15.55 9.31002L15.62 9.30002Z"
                  fill="#28AF60"
                />
              </svg>

              <div className="font-[700] text-[14px] font-[cairo] ">
                {currentLang.achievements}
              </div>
            </div>
            <div className="w-full flex flex-wrap items-stretch justify-center gap-[clamp(5px,1.7361111111111112vw,25px)] ">
              {lectureData?.achievements?.map((item) => {
                return (
                  <div className="flex w-[48%] sm:w-[162px] flex-col border border-[#F1F1F2] rounded-[8px] p-[3px]  ">
                    <img
                      className="rounded-[8px] "
                      src={
                        item.image ||
                        "https://via.assets.so/img.jpg?w=155&h=111&tc=blue&bg=#C4C4C4"
                      }
                      alt="trainer image"
                    />
                    <div className="w-full text-center py-[5px] font-[cairo] font-[700] text-[12px] leading-[23px] ">
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Lecture;
