import { useParams } from "react-router-dom";
import server from "../../assets/axios/server";
// import academyCover from "../../assets/images/academy/academyCover.jpeg";
// import academyLogo from "../../assets/images/academy/academyLogo.png";
import traImg from "../../assets/images/academy/traImg.png";
import userAvatar from "../../assets/images/profile/profileAvatar2.png";
import { useEffect, useState } from "react";

const AcademyDetails = () => {
  const [academyData, setAcademyData] = useState({});
  const params = useParams();

  useEffect(() => {
    server.get(`/academias-api/${params.academyId}`).then((res) => {
      console.log(res.data.data);
      setAcademyData(res.data.data);
    });
  }, []);

  return (
    <div className="container mx-auto lg:max-w-[1060px] flex flex-col items-center justify-center px-[5px] sm:px-0 mb-[50px] mt-[20px]">
      {/* academy header */}
      <div className="w-full rounded-[12px] h-[clamp(130px,11.041666666666666vw,212px)] relative">
        <img
          className="w-full h-full rounded-[12px]"
          src={academyData.cover}
          alt="academyCover"
        />
        <div className="absolute top-[60%] sm:top-[50%]  sm:inset-x-[46px] flex flex-col items-center justify-center w-full sm:w-fit">
          <div
            className=" w-[clamp(100px,10.625vw,204px)] h-[clamp(100px,10.625vw,204px)] rounded-full bg-[#fff]  p-[7px] "
            style={{ boxShadow: "0px 3px 4px 0px #00000008" }}
          >
            <img
              className="w-full h-full rounded-full"
              src={academyData.inside_image}
              alt="academyLogo"
            />
          </div>

          <div className="w-fit flex items-center justify-center flex-col gap-[5px] mt-[clamp(10px,1.0416vw,20px)]">
            <h2 className="font-[Cairo] text-[clamp(12px,0.7291vw,14px)] font-[700] leading-[clamp(14px,1.09375vw,21px)] text-[#000]">
              {academyData.title}
            </h2>
            <div className="flex items-center justify-start sm:gap-[5px]">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_956_3629)">
                  <path
                    d="M9.50005 12.5C9.84929 12.5007 10.1939 12.4201 10.5065 12.2645L12.0065 11.5145C12.7711 11.1349 13.2534 10.3536 13.2501 9.50005V7.2748C13.2527 6.42195 12.7705 5.64169 12.0065 5.26257L10.5065 4.51258C9.87278 4.19758 9.12806 4.19758 8.4943 4.51258L6.99429 5.26257C6.23006 5.64148 5.74754 6.42181 5.75004 7.2748V9.50005C5.7473 10.3531 6.22947 11.1337 6.99355 11.5131L8.49356 12.2631C8.8061 12.4191 9.1507 12.5003 9.50005 12.5ZM14.75 17H12.7183L15.3335 14.5835C18.5554 11.3618 18.5555 6.13817 15.3337 2.91627C12.1119 -0.305622 6.88836 -0.305657 3.66647 2.9161C0.444575 6.13785 0.444504 11.3615 3.66629 14.5834C3.67336 14.5904 6.28181 17 6.28181 17H4.25006C3.83585 17 3.50007 17.3358 3.50007 17.75C3.50007 18.1642 3.83585 18.5 4.25006 18.5H14.7501C15.1643 18.5 15.5001 18.1642 15.5001 17.75C15.5001 17.3359 15.1642 17 14.75 17ZM4.72706 3.97704C7.35731 1.33498 11.6314 1.32542 14.2734 3.95567C16.9155 6.58592 16.925 10.86 14.2948 13.502L11.3061 16.2628C10.286 17.2243 8.69163 17.2187 7.67832 16.25L4.72706 13.523C2.09509 10.8853 2.09513 6.61482 4.72706 3.97704Z"
                    fill="#374957"
                  />
                  <path
                    d="M9.15702 5.77842C8.66194 5.85785 8.30621 6.04561 7.9248 6.42112C7.46639 6.87606 7.25002 7.36711 7.25002 7.97731C7.24635 8.96663 7.84412 9.81153 8.79029 10.1509C9.09101 10.2592 9.76947 10.2845 10.0739 10.1979C10.8037 9.99206 11.4271 9.40352 11.6545 8.71028C11.7241 8.49364 11.7462 8.3456 11.7498 8.06758C11.7535 7.6343 11.7021 7.40322 11.5188 7.02049C11.0934 6.13948 10.1032 5.61955 9.15702 5.77842ZM10.0629 6.04561C10.2499 6.1106 10.3709 6.23697 10.4699 6.47528C10.5323 6.62331 10.5469 6.74969 10.4993 6.74969C10.4846 6.74969 10.3746 6.83273 10.2609 6.93383L10.0519 7.11797L9.86482 7.07826C9.64111 7.03132 9.27805 7.02771 9.08368 7.07465C8.94799 7.10353 8.92965 7.09631 8.72428 6.94105C8.60693 6.85078 8.51158 6.77135 8.51158 6.76774C8.51158 6.69553 8.81963 6.12865 8.88197 6.08171C8.92965 6.04561 8.94432 6.02755 8.91498 6.03478C8.72061 6.09977 8.69494 6.10338 8.69494 6.06727C8.69494 6.04561 8.72428 6.02394 8.76095 6.02394C8.79396 6.02033 8.90398 6.01311 8.99933 6.0095C9.09468 6.00589 9.18636 5.98784 9.20103 5.97339C9.24504 5.93007 9.87582 5.98423 10.0629 6.04561ZM10.3269 6.06366C10.3819 6.08532 10.4186 6.1106 10.4076 6.12143C10.3856 6.1431 10.1619 6.03839 10.1619 6.00589C10.1619 5.99506 10.1765 5.99506 10.1949 6.00589C10.2095 6.01672 10.2719 6.042 10.3269 6.06366ZM10.987 6.98438C11.2437 7.1252 11.3061 7.17574 11.3684 7.30212C11.5334 7.64152 11.5555 8.08202 11.4271 8.45031C11.3721 8.60196 11.3537 8.62362 11.2327 8.64167C11.1594 8.65612 10.998 8.70305 10.8733 8.74277L10.6496 8.82221L10.5139 8.67417C10.2352 8.36726 10.2389 8.37448 10.2572 8.08202C10.2682 7.93037 10.2536 7.68485 10.2242 7.51515L10.1729 7.21907L10.3966 7.02049C10.5213 6.91217 10.635 6.82551 10.6496 6.8219C10.668 6.8219 10.8183 6.89411 10.987 6.98438ZM8.8233 7.63791C8.83063 7.89788 8.8563 8.12535 8.88931 8.212L8.94065 8.35643L8.68761 8.63445L8.43456 8.91247L8.26953 8.84387C8.18152 8.80415 8.02382 8.76444 7.9248 8.74999C7.79645 8.73194 7.7231 8.70305 7.68276 8.64889C7.59108 8.51891 7.51406 8.20117 7.5104 7.92315C7.50673 7.68846 7.5214 7.63069 7.63142 7.41044C7.75611 7.17213 7.76711 7.1613 8.06416 7.01326L8.36855 6.86162L8.59226 7.03132L8.81596 7.20463L8.8233 7.63791ZM7.59108 7.27323C7.48106 7.45738 7.45905 7.37433 7.56174 7.17574C7.61675 7.07465 7.64975 7.04215 7.65709 7.07826C7.66442 7.11075 7.63509 7.19741 7.59108 7.27323ZM11.4381 7.12881C11.5114 7.28406 11.4858 7.35628 11.4088 7.21907C11.3317 7.07826 11.3207 7.03854 11.3648 7.03854C11.3831 7.03854 11.4161 7.07826 11.4381 7.12881ZM10.3049 8.67056C10.5616 8.92692 10.5653 8.93775 10.4149 9.38547C10.3122 9.70321 10.2572 9.77542 10.0592 9.86569C9.91983 9.92707 9.81714 9.94151 9.50175 9.94151C9.09835 9.94151 8.99566 9.91263 8.87097 9.7682C8.79029 9.67432 8.58492 9.16161 8.58492 9.06051C8.58492 9.01718 8.68394 8.87276 8.8123 8.73555L9.036 8.48641L9.27805 8.47197C9.41007 8.46475 9.64478 8.45753 9.7988 8.45392L10.0812 8.4467L10.3049 8.67056ZM11.5188 8.73555C11.4528 8.8547 11.4344 8.79332 11.4894 8.64167C11.5261 8.53335 11.5408 8.52252 11.5481 8.5839C11.5555 8.62362 11.5408 8.69583 11.5188 8.73555ZM7.5544 8.67778C7.63509 8.80776 7.65342 8.87998 7.59841 8.87998C7.58008 8.87998 7.54707 8.83665 7.52873 8.77888C7.5104 8.72472 7.48106 8.65251 7.46639 8.6164C7.42238 8.5153 7.47372 8.5478 7.5544 8.67778ZM10.4149 9.88735C10.4773 9.92707 10.1655 10.0498 10.0665 10.0282C10.0152 10.0137 10.0372 9.99206 10.1619 9.93429C10.3562 9.84763 10.3489 9.84763 10.4149 9.88735ZM8.86364 9.92707C8.93332 9.95234 8.95165 9.97762 8.92598 10.0029C8.88931 10.039 8.62159 9.95956 8.62159 9.91263C8.62159 9.88013 8.75729 9.88735 8.86364 9.92707Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_956_3629">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="font-[Cairo] text-[clamp(9px,0.57291vw,11px)] font-[600] leading-[clamp(14px, 1.041vw,20px)] text-[#B0B0B0]">
                {academyData.location}
              </span>
            </div>
            <div className="flex items-center justify-start gap-[5px] font-[Cairo] text-[clamp(10px,0.625vw,12px)] font-[600] leading-[clamp(15px,1.1458vw,22px)] text-[#075178]">
              <span>المدير العام :</span>
              <span>{academyData.leader}</span>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center sm:justify-end mt-[140px] sm:mt-[10px] gap-[8px] ">
          {/* instagram */}
          <div
            className="w-[44px] h-[clamp(35px,2.291vw,44px)] flex items-center justify-center rounded-[8px] "
            style={{
              background:
                "linear-gradient(45deg, #FAAD4F 14.61%, #DD2A7B 39.38%, #9537B0 58.49%, #515BD4 85.39%)",
              backgroundPosition: "center center",
              boxShadow: "0px 3px 4px 0px #00000008",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.8444 0.716187H5.16044C2.48507 0.716187 0.308594 2.8933 0.308594 5.56946V14.4315C0.308594 17.1076 2.48507 19.2847 5.16044 19.2847H14.8444C17.5197 19.2847 19.6962 17.1076 19.6962 14.4315V5.56946C19.6962 2.8933 17.5197 0.716187 14.8444 0.716187ZM2.02017 5.56946C2.02017 3.83764 3.42912 2.42827 5.16044 2.42827H14.8444C16.5757 2.42827 17.9846 3.83764 17.9846 5.56946V14.4315C17.9846 16.1633 16.5757 17.5727 14.8444 17.5727H5.16044C3.42912 17.5727 2.02017 16.1633 2.02017 14.4315V5.56946Z"
                fill="white"
              />
              <path
                d="M10.0033 14.5137C12.4911 14.5137 14.5163 12.4891 14.5163 9.99935C14.5163 7.50965 12.4922 5.48499 10.0033 5.48499C7.51431 5.48499 5.49023 7.50965 5.49023 9.99935C5.49023 12.4891 7.51431 14.5137 10.0033 14.5137ZM10.0033 7.19816C11.5482 7.19816 12.8047 8.45508 12.8047 10.0004C12.8047 11.5458 11.5482 12.8027 10.0033 12.8027C8.45836 12.8027 7.20181 11.5458 7.20181 10.0004C7.20181 8.45508 8.45836 7.19816 10.0033 7.19816Z"
                fill="white"
              />
              <path
                d="M14.9328 6.21441C15.6027 6.21441 16.1487 5.6693 16.1487 4.99807C16.1487 4.32684 15.6038 3.78174 14.9328 3.78174C14.2617 3.78174 13.7168 4.32684 13.7168 4.99807C13.7168 5.6693 14.2617 6.21441 14.9328 6.21441Z"
                fill="white"
              />
            </svg>
          </div>

          {/* facebook */}
          <div
            className="w-[44px] h-[clamp(35px,2.291vw,44px)] flex items-center justify-center rounded-[8px] bg-[#1877F2] "
            style={{
              boxShadow: "0px 3px 4px 0px #00000008",
            }}
          >
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.80117 4.50662V7.32631H11.2883L10.7361 11.1246H7.80117V19.8757C7.21273 19.9574 6.6107 20 5.9996 20C5.2942 20 4.6015 19.9438 3.92693 19.8349V11.1246H0.710938V7.32631H3.92693V3.87629C3.92693 1.73589 5.66141 0 7.80208 0V0.00181359C7.80842 0.00181359 7.81386 0 7.82021 0H11.2892V3.28496H9.02247C8.3488 3.28496 7.80208 3.83185 7.80208 4.50571L7.80117 4.50662Z"
                fill="white"
              />
            </svg>
          </div>

          {/* whatsapp */}
          <div
            className="w-[clamp(140px,8.69791vw,167px)] h-[clamp(35px,2.291vw,44px)] flex items-center justify-center gap-[5px] rounded-[8px] bg-[#28AF60] "
            style={{
              boxShadow: "0px 3px 4px 0px #00000008",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2596 0.880136C10.3258 0.471247 10.7124 0.193872 11.1212 0.26007C11.1466 0.264914 11.228 0.280135 11.2707 0.289637C11.356 0.308641 11.475 0.337899 11.6234 0.381124C11.9202 0.467567 12.3348 0.609972 12.8324 0.838108C13.8287 1.29486 15.1545 2.09387 16.5303 3.46967C17.9061 4.84547 18.7051 6.17128 19.1619 7.16756C19.39 7.66517 19.5324 8.07978 19.6188 8.37656C19.6621 8.52496 19.6913 8.64399 19.7103 8.72932C19.7198 8.77199 19.7268 8.80625 19.7316 8.83156L19.7374 8.86275C19.8036 9.27164 19.5287 9.67416 19.1198 9.74036C18.7121 9.80637 18.328 9.53033 18.2602 9.12336C18.2581 9.11244 18.2524 9.08308 18.2462 9.05539C18.2339 9.00001 18.2125 8.91218 18.1787 8.79603C18.111 8.56369 17.9935 8.21836 17.7983 7.79268C17.4085 6.94238 16.7075 5.76819 15.4696 4.53033C14.2318 3.29247 13.0576 2.59147 12.2073 2.20164C11.7816 2.00648 11.4363 1.88895 11.2039 1.82128C11.0878 1.78745 10.9418 1.75394 10.8864 1.7416C10.4794 1.67378 10.1936 1.28786 10.2596 0.880136Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.4859 4.3296C10.5997 3.93133 11.0148 3.70071 11.413 3.8145L11.207 4.53564C11.413 3.8145 11.413 3.8145 11.413 3.8145L11.4145 3.81491L11.416 3.81536L11.4194 3.81633L11.4271 3.81864L11.4469 3.82481C11.462 3.82963 11.4808 3.83591 11.5033 3.84388C11.5482 3.85981 11.6075 3.88248 11.6803 3.91368C11.826 3.97612 12.0251 4.07254 12.2696 4.21725C12.7591 4.50693 13.4272 4.98811 14.2122 5.77308C14.9972 6.55805 15.4784 7.22624 15.768 7.7157C15.9128 7.96021 16.0092 8.15928 16.0716 8.30496C16.1028 8.37777 16.1255 8.43713 16.1414 8.48204C16.1494 8.50449 16.1557 8.52332 16.1605 8.5384L16.1666 8.55818L16.169 8.56594L16.1699 8.56927L16.1704 8.5708C16.1704 8.5708 16.1708 8.57224 15.4496 8.77828L16.1708 8.57224C16.2846 8.97052 16.054 9.38563 15.6557 9.49943C15.2608 9.61225 14.8493 9.38649 14.7315 8.99443L14.7278 8.98365C14.7224 8.96863 14.7114 8.93904 14.6929 8.89584C14.6559 8.80951 14.5888 8.66827 14.4772 8.47968C14.2542 8.10294 13.8515 7.53369 13.1516 6.83374C12.4516 6.13379 11.8823 5.73108 11.5056 5.50811C11.317 5.3965 11.1758 5.3294 11.0894 5.2924C11.0462 5.27388 11.0167 5.26285 11.0016 5.25752L10.9909 5.25382C10.5988 5.13594 10.373 4.7245 10.4859 4.3296Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.00745 3.4069C3.68752 1.72683 6.52266 1.85455 7.69248 3.95067L8.34149 5.1136C9.10541 6.48242 8.77987 8.2095 7.66157 9.34147C7.64668 9.36188 7.56774 9.47681 7.55791 9.67762C7.54536 9.93394 7.63639 10.5267 8.55482 11.4452C9.47295 12.3633 10.0656 12.4545 10.3221 12.4421C10.5231 12.4323 10.6381 12.3533 10.6585 12.3384C11.7905 11.2201 13.5176 10.8946 14.8864 11.6585L16.0493 12.3075C18.1454 13.4773 18.2731 16.3125 16.5931 17.9925C15.6944 18.8912 14.4995 19.6897 13.0953 19.7429C11.0144 19.8218 7.55913 19.2844 4.13735 15.8626C0.715564 12.4408 0.178177 8.9856 0.257065 6.90467C0.310297 5.50048 1.10879 4.30556 2.00745 3.4069ZM6.38265 4.68167C5.78363 3.60832 4.17394 3.36173 3.06811 4.46756C2.29276 5.24291 1.7887 6.09872 1.75599 6.9615C1.6902 8.69684 2.11864 11.7226 5.19801 14.802C8.27737 17.8813 11.3031 18.3098 13.0385 18.244C13.9013 18.2113 14.7571 17.7072 15.5324 16.9319C16.6382 15.826 16.3916 14.2163 15.3183 13.6173L14.1554 12.9683C13.432 12.5646 12.4158 12.7023 11.7025 13.4156C11.6325 13.4856 11.1864 13.9018 10.395 13.9403C9.58474 13.9797 8.604 13.6157 7.49416 12.5058C6.38395 11.3956 6.02003 10.4146 6.0597 9.60427C6.09846 8.81275 6.51468 8.36715 6.58432 8.2975C7.29764 7.58418 7.43539 6.56801 7.03166 5.8446L6.38265 4.68167Z"
                fill="white"
              />
            </svg>
            <span className="font-[Cairo] text-[clamp(10px,0.625vw,12px)] font-[600] leading-[clamp(15px,1.1458vw,22px)] text-[#fff]">
              التواصل مع الاكاديمية
            </span>
          </div>

          {/* facebook */}
          <div
            className="w-[66px] h-[clamp(35px,2.291vw,44px)] flex items-center justify-center rounded-[8px] border border-[#28AF6080] "
            style={{
              boxShadow: "0px 3px 4px 0px #00000008",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12C9 13.3807 7.88071 14.5 6.5 14.5C5.11929 14.5 4 13.3807 4 12C4 10.6193 5.11929 9.5 6.5 9.5C7.88071 9.5 9 10.6193 9 12Z"
                stroke="#44A853"
                stroke-width="1.5"
              />
              <path
                d="M14 6.5L9 10"
                stroke="#44A853"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M14 17.5L9 14"
                stroke="#44A853"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M19 18.5C19 19.8807 17.8807 21 16.5 21C15.1193 21 14 19.8807 14 18.5C14 17.1193 15.1193 16 16.5 16C17.8807 16 19 17.1193 19 18.5Z"
                stroke="#44A853"
                stroke-width="1.5"
              />
              <path
                d="M19 5.5C19 6.88071 17.8807 8 16.5 8C15.1193 8 14 6.88071 14 5.5C14 4.11929 15.1193 3 16.5 3C17.8807 3 19 4.11929 19 5.5Z"
                stroke="#44A853"
                stroke-width="1.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* academy info */}
      <div className="mt-[200px] flex flex-col items-start justify-start gap-[5px] w-full ">
        <div className="mt-[21px] flex items-center justify-start">
          <p
            dangerouslySetInnerHTML={{ __html: academyData.description }}
            className="font-[Cairo] text-[clamp(10px,0.625vw,12px)] font-[400] leading-[clamp(14px, 1.041vw,20px)] text-[#000]"
          />
        </div>
      </div>

      <div className="w-full border-b border-[#F1F1F2] mt-[30px]"></div>

      {/* times */}
      <div className="w-full flex-col mt-[16px]">
        <h2>مواعيد التدريب :</h2>
        <div className="mt-[21px] flex items-start justify-start">
          <p
            dangerouslySetInnerHTML={{ __html: academyData.times }}
            className="font-[Cairo] text-[clamp(10px,0.625vw,12px)] font-[400] leading-[clamp(14px, 1.041vw,20px)] text-[#000] px-[20px]"
          />
        </div>
      </div>

      <div className="w-full border-b border-[#F1F1F2] mt-[10px]"></div>

      {/* join now section */}
      <div className="flex w-full max-w-[1000px]  items-center justify-between bg-[#0751781A] rounded-[clamp(8px,0.625vw,12px)] p-[clamp(8px,0.625vw,12px)] mt-[18px] ">
        <h2 className="font-[Cairo] text-[clamp(10px,0.625vw,12px)] font-[700] leading-[clamp(15px,1.145833vw,22px)] text-[#075178] flex items-center justify-center gap-[5px] ">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.0833 6.33333H23.75V4.75C23.75 3.49022 23.2496 2.28204 22.3588 1.39124C21.468 0.500445 20.2598 0 19 0C17.7402 0 16.532 0.500445 15.6412 1.39124C14.7504 2.28204 14.25 3.49022 14.25 4.75V6.33333H7.91667C5.81781 6.33585 3.80563 7.17073 2.32151 8.65485C0.837396 10.139 0.00251411 12.1511 0 14.25L0 30.0833C0.00251411 32.1822 0.837396 34.1944 2.32151 35.6785C3.80563 37.1626 5.81781 37.9975 7.91667 38H30.0833C32.1822 37.9975 34.1944 37.1626 35.6785 35.6785C37.1626 34.1944 37.9975 32.1822 38 30.0833V14.25C37.9975 12.1511 37.1626 10.139 35.6785 8.65485C34.1944 7.17073 32.1822 6.33585 30.0833 6.33333ZM17.4167 4.75C17.4167 4.33007 17.5835 3.92735 17.8804 3.63041C18.1773 3.33348 18.5801 3.16667 19 3.16667C19.4199 3.16667 19.8227 3.33348 20.1196 3.63041C20.4165 3.92735 20.5833 4.33007 20.5833 4.75V7.91667C20.5833 8.33659 20.4165 8.73932 20.1196 9.03625C19.8227 9.33319 19.4199 9.5 19 9.5C18.5801 9.5 18.1773 9.33319 17.8804 9.03625C17.5835 8.73932 17.4167 8.33659 17.4167 7.91667V4.75ZM34.8333 30.0833C34.8333 31.3431 34.3329 32.5513 33.4421 33.4421C32.5513 34.3329 31.3431 34.8333 30.0833 34.8333H7.91667C6.65689 34.8333 5.44871 34.3329 4.55791 33.4421C3.66711 32.5513 3.16667 31.3431 3.16667 30.0833V14.25C3.16667 12.9902 3.66711 11.782 4.55791 10.8912C5.44871 10.0004 6.65689 9.5 7.91667 9.5H14.5413C14.8638 10.4255 15.4662 11.2278 16.2652 11.7955C17.0641 12.3632 18.0199 12.6682 19 12.6682C19.9801 12.6682 20.9359 12.3632 21.7348 11.7955C22.5338 11.2278 23.1362 10.4255 23.4587 9.5H30.0833C31.3431 9.5 32.5513 10.0004 33.4421 10.8912C34.3329 11.782 34.8333 12.9902 34.8333 14.25V30.0833ZM15.8333 15.8333H7.91667C7.49674 15.8333 7.09401 16.0001 6.79708 16.2971C6.50015 16.594 6.33333 16.9967 6.33333 17.4167V30.0833C6.33333 30.5033 6.50015 30.906 6.79708 31.2029C7.09401 31.4999 7.49674 31.6667 7.91667 31.6667H15.8333C16.2533 31.6667 16.656 31.4999 16.9529 31.2029C17.2499 30.906 17.4167 30.5033 17.4167 30.0833V17.4167C17.4167 16.9967 17.2499 16.594 16.9529 16.2971C16.656 16.0001 16.2533 15.8333 15.8333 15.8333ZM14.25 28.5H9.5V19H14.25V28.5ZM31.6667 23.75C31.6667 24.1699 31.4999 24.5727 31.2029 24.8696C30.906 25.1665 30.5033 25.3333 30.0833 25.3333H22.1667C21.7467 25.3333 21.344 25.1665 21.0471 24.8696C20.7501 24.5727 20.5833 24.1699 20.5833 23.75C20.5833 23.3301 20.7501 22.9273 21.0471 22.6304C21.344 22.3335 21.7467 22.1667 22.1667 22.1667H30.0833C30.5033 22.1667 30.906 22.3335 31.2029 22.6304C31.4999 22.9273 31.6667 23.3301 31.6667 23.75ZM31.6667 17.4167C31.6667 17.8366 31.4999 18.2393 31.2029 18.5363C30.906 18.8332 30.5033 19 30.0833 19H22.1667C21.7467 19 21.344 18.8332 21.0471 18.5363C20.7501 18.2393 20.5833 17.8366 20.5833 17.4167C20.5833 16.9967 20.7501 16.594 21.0471 16.2971C21.344 16.0001 21.7467 15.8333 22.1667 15.8333H30.0833C30.5033 15.8333 30.906 16.0001 31.2029 16.2971C31.4999 16.594 31.6667 16.9967 31.6667 17.4167ZM28.5 30.0833C28.5 30.5033 28.3332 30.906 28.0363 31.2029C27.7393 31.4999 27.3366 31.6667 26.9167 31.6667H22.1667C21.7467 31.6667 21.344 31.4999 21.0471 31.2029C20.7501 30.906 20.5833 30.5033 20.5833 30.0833C20.5833 29.6634 20.7501 29.2607 21.0471 28.9637C21.344 28.6668 21.7467 28.5 22.1667 28.5H26.9167C27.3366 28.5 27.7393 28.6668 28.0363 28.9637C28.3332 29.2607 28.5 29.6634 28.5 30.0833Z"
              fill="#075178"
            />
          </svg>
          <div className="flex flex-col items-start justify-center">
            <span>انضم الينا الان </span>
            <span className="font-[Cairo] text-[clamp(10px,0.625vw,12px)] font-[400] leading-[clamp(15px,1.145833vw,22px)] text-[#696969]">
              واعرض اكاديميتك لفتح لك فرص لمتدربين اكتر مع اسبوررتس ان
            </span>
          </div>
        </h2>
        <button className="font-[Cairo] text-[clamp(10px,0.625vw,12px)] text-nowrap font-[400] leading-[clamp(15px,1.145833vw,22px)] text-[#fff] rounded-[8px] bg-[#075178] py-[clamp(5px,0.46875vw,9px)] px-[clamp(10px,2.604166666666667vw,50px)] ">
          انضم الان
        </button>
      </div>

      <div className="w-full border-b border-[#F1F1F2] mt-[45px]"></div>

      {/* training images */}
      <div className=" flex w-full mt-[clamp(25px,1.67vw,32px)] flex-col items-center justify-center  ">
        <h2 className="font-[Cairo] text-[clamp(15px,1.041vw,20px)] font-[600] leading-[clamp(20px,1.927085vw,37px)] text-[#000] w-full flex items-center justify-center sm:justify-start">
          صور للتدريب الفعلي
        </h2>
        <div className="w-full flex flex-wrap justify-center items-stretch gap-[clamp(5px,1.04165vw,20px)] mt-[20px]">
          {[1, 2, 3, 4, 5, 6].map(() => {
            return (
              <div className="w-[clamp(180px,17.7086vw,340px)] ">
                <img
                  className="w-full h-full rounded-[clamp(8px,0.625vw,12px)]"
                  src={traImg}
                  alt="training"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full border-b border-[#F1F1F2] mt-[45px]"></div>

      {/* team */}
      <div className="flex flex-col items-center justify-center mt-[clamp(20px,1.9791vw,38px)]">
        <div>الجهاز الفني</div>
        <div className=" mt-[clamp(20px,2.604166666666667vw,50px)] flex flex-col items-center justify-center ">
          <div className="flex items-center justify-center w-[clamp(100px,8.072916666666668vw,155px)] h-[clamp(100px,8.072916666666668vw,155px)] ">
            <img
              className="w-full h-full"
              src={userAvatar}
              alt="member image"
            />
          </div>
          <div className="mt-[clamp(15px,1.5625vw,30px)] flex flex-col items-center justify-start font-[Cairo] gap-[10px] text-[clamp(12px,0.7291vw,14px)] font-[600] leading-[clamp(10px,0.625vw,12px)] text-[#000]">
            <span>{academyData.leader}</span>
            <span className="text-[#767676]">مدير الاكاديمية</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyDetails;
