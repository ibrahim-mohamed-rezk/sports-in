import { useSelector } from "react-redux";
import lectureImage from "../../assets/images/luctures/lectureBanner.png";
import { ar, en } from "../../assets/langs/translation";
import lectureBanner from "../../assets/images/luctures/lectureBanner.png";

const LuctureCard = ({ lecture }) => {
  // to set lang
  const { lang } = useSelector((state) => state.settings);
  const currentLang = lang === "en" ? en : ar;

  return (
    <div
      className={` ${
        lang === "en" ? "ltr" : "rtl"
      }  flex-col w-[238px] border border-[#F1F1F2] rounded-[8px] max-w-[100%] overflow-hidden flex items-center justify-between `}
    >
      <div class="relative block !h-[74px] w-full">
        <img
          src={lectureBanner}
          alt="Background"
          class=" rounded-[8px] w-full !h-[74px] z-0"
        />
      </div>

      <div className="flex px-[10px] bg-white rounded-[12px] items-stretch justify-between w-full flex-col z-20 mt-[-15px]">
        <div className="flex gap-[7px]  items-center justify-start w-full ">
          <div className="border-4 ms-[10px] border-[#fff] rounded-full bg-[#fff] mt-[-35px] !w-[70px] !h-[70px] flex items-center justify-center">
            <img
              className="rounded-full !w-full !h-full "
              src={lecture?.image || lectureImage}
              alt="trainee"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-[12px] font-[600] font-[Cairo] text-[#000] w-full text-nowrap">
              {lecture?.name}
            </h2>
            <span className="text-[6px] font-[600] font-[Cairo] text-[#898989]">
              {lecture?.job_title}
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-start">
          <ul className="flex flex-col gap-[5px] items-start justify-start mt-[10px] w-full">
            <li className="flex items-center justify-start gap-[5px] text-[#000] text-[10px] font-[400] font-[Cairo]">
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.79167 7.58333H9.58333V6.75C9.58333 6.29042 9.20958 5.91667 8.75 5.91667C8.5975 5.91667 8.45625 5.96083 8.33333 6.0325V5.91667C8.33333 5.45708 7.95958 5.08333 7.5 5.08333C7.04042 5.08333 6.66667 5.45708 6.66667 5.91667V7.58333H3.33333V5.91667C3.33333 5.45708 2.95958 5.08333 2.5 5.08333C2.04042 5.08333 1.66667 5.45708 1.66667 5.91667V6.0325C1.54375 5.96083 1.4025 5.91667 1.25 5.91667C0.790417 5.91667 0.416667 6.29042 0.416667 6.75V7.58333H0.208333C0.0933333 7.58333 0 7.67667 0 7.79167C0 7.90667 0.0933333 8 0.208333 8H0.416667V8.83333C0.416667 9.29292 0.790417 9.66667 1.25 9.66667C1.4025 9.66667 1.54375 9.6225 1.66667 9.55083V9.66667C1.66667 10.1262 2.04042 10.5 2.5 10.5C2.95958 10.5 3.33333 10.1262 3.33333 9.66667V8H6.66667V9.66667C6.66667 10.1262 7.04042 10.5 7.5 10.5C7.95958 10.5 8.33333 10.1262 8.33333 9.66667V9.55083C8.45625 9.6225 8.5975 9.66667 8.75 9.66667C9.20958 9.66667 9.58333 9.29292 9.58333 8.83333V8H9.79167C9.90667 8 10 7.90667 10 7.79167C10 7.67667 9.90667 7.58333 9.79167 7.58333ZM1.25 9.25C1.02042 9.25 0.833333 9.06333 0.833333 8.83333V6.75C0.833333 6.52 1.02042 6.33333 1.25 6.33333C1.47958 6.33333 1.66667 6.52 1.66667 6.75V8.83333C1.66667 9.06333 1.47958 9.25 1.25 9.25ZM2.91667 9.66667C2.91667 9.89667 2.72958 10.0833 2.5 10.0833C2.27042 10.0833 2.08333 9.89667 2.08333 9.66667V5.91667C2.08333 5.68667 2.27042 5.5 2.5 5.5C2.72958 5.5 2.91667 5.68667 2.91667 5.91667V9.66667ZM7.91667 9.66667C7.91667 9.89667 7.72958 10.0833 7.5 10.0833C7.27042 10.0833 7.08333 9.89667 7.08333 9.66667V5.91667C7.08333 5.68667 7.27042 5.5 7.5 5.5C7.72958 5.5 7.91667 5.68667 7.91667 5.91667V9.66667ZM9.16667 8.83333C9.16667 9.06333 8.97958 9.25 8.75 9.25C8.52042 9.25 8.33333 9.06333 8.33333 8.83333V6.75C8.33333 6.52 8.52042 6.33333 8.75 6.33333C8.97958 6.33333 9.16667 6.52 9.16667 6.75V8.83333ZM3.71792 4.25H4.71083L4.39833 5.18583C4.32 5.46083 4.44583 5.73792 4.70417 5.86C4.78542 5.89833 4.87 5.91667 4.95292 5.91667C5.13417 5.91667 5.3075 5.82875 5.41875 5.66667L7.19292 3.07042C7.31208 2.89083 7.32292 2.6625 7.22167 2.47417C7.12 2.28458 6.92167 2.16667 6.705 2.16667H5.71L5.99917 1.34375C6.0725 1.1525 6.0475 0.937917 5.93208 0.770417C5.81583 0.600833 5.6225 0.5 5.41542 0.5H4.62625C4.35875 0.5 4.12125 0.667083 4.03542 0.915833L3.15 3.48042C3.09458 3.66292 3.12875 3.85542 3.24292 4.01C3.35583 4.1625 3.52917 4.25 3.7175 4.25H3.71792ZM3.54667 3.60875L4.43 1.05167C4.45833 0.969583 4.53542 0.916667 4.62708 0.916667H5.41625C5.48708 0.916667 5.55 0.949167 5.58958 1.00667C5.6275 1.06208 5.63542 1.13042 5.60875 1.2L5.22 2.30583C5.1975 2.36958 5.2075 2.44042 5.24625 2.49542C5.285 2.55042 5.34875 2.58333 5.41625 2.58333H6.705C6.7975 2.58333 6.84042 2.64458 6.85458 2.67125C6.86875 2.69708 6.89542 2.76542 6.8475 2.8375L5.07542 5.43083C5.00625 5.53167 4.91 5.49583 4.88208 5.48333C4.85417 5.47 4.76583 5.41792 4.79625 5.30917L5.19708 4.1075C5.21833 4.04417 5.2075 3.97417 5.16875 3.92C5.12958 3.86542 5.06667 3.83333 4.99958 3.83333H3.7175C3.6625 3.83333 3.61125 3.8075 3.5775 3.76167C3.54292 3.71458 3.53208 3.65583 3.54625 3.60875H3.54667Z"
                  fill="#28AF60"
                />
              </svg>
              <span>{lecture?.job_title}</span>
            </li>
            <li className="flex items-center justify-start gap-[5px] text-[#000] text-[10px] font-[400] font-[Cairo]">
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1980_21841)">
                  <path
                    d="M8.33339 0.5H3.95839C3.84339 0.5 3.75005 0.593333 3.75005 0.708333C3.75005 0.823333 3.84339 0.916667 3.95839 0.916667H8.33339C9.02255 0.916667 9.58339 1.4775 9.58339 2.16667V4.66667C9.58339 5.35583 9.02255 5.91667 8.33339 5.91667V5.5C8.33339 5.27 8.1463 5.08333 7.91672 5.08333H6.66672C6.43714 5.08333 6.25005 5.27 6.25005 5.5V5.91667H3.95839C3.84339 5.91667 3.75005 6.01 3.75005 6.125C3.75005 6.24 3.84339 6.33333 3.95839 6.33333H8.33339C9.25255 6.33333 10.0001 5.58583 10.0001 4.66667V2.16667C10.0001 1.2475 9.25255 0.5 8.33339 0.5ZM6.66672 5.5H7.91672V5.91667H6.66672V5.5ZM1.87505 2.58333C2.44922 2.58333 2.91672 2.11625 2.91672 1.54167C2.91672 0.967083 2.44922 0.5 1.87505 0.5C1.30089 0.5 0.833386 0.967083 0.833386 1.54167C0.833386 2.11625 1.30089 2.58333 1.87505 2.58333ZM1.87505 0.916667C2.21964 0.916667 2.50005 1.19708 2.50005 1.54167C2.50005 1.88625 2.21964 2.16667 1.87505 2.16667C1.53047 2.16667 1.25005 1.88625 1.25005 1.54167C1.25005 1.19708 1.53047 0.916667 1.87505 0.916667ZM2.91672 3.41667V6.125C2.91672 6.24 2.82339 6.33333 2.70839 6.33333C2.59339 6.33333 2.50005 6.24 2.50005 6.125V3.41667H1.45839C0.88422 3.41667 0.41672 3.88375 0.41672 4.45833V6.125C0.41672 6.24 0.323386 6.33333 0.208386 6.33333C0.0933863 6.33333 5.29638e-05 6.24 5.29638e-05 6.125V4.45833C5.29638e-05 3.65417 0.65422 3 1.45839 3H6.04172C6.15672 3 6.25005 3.09333 6.25005 3.20833C6.25005 3.32333 6.15672 3.41667 6.04172 3.41667H2.91672ZM0.833386 8C0.833386 7.655 1.1138 7.375 1.45839 7.375C1.80297 7.375 2.08339 7.655 2.08339 8C2.08339 8.345 1.80297 8.625 1.45839 8.625C1.1138 8.625 0.833386 8.345 0.833386 8ZM4.37505 8C4.37505 7.655 4.65547 7.375 5.00005 7.375C5.34464 7.375 5.62505 7.655 5.62505 8C5.62505 8.345 5.34464 8.625 5.00005 8.625C4.65547 8.625 4.37505 8.345 4.37505 8ZM7.91672 8C7.91672 7.655 8.19714 7.375 8.54172 7.375C8.8863 7.375 9.16672 7.655 9.16672 8C9.16672 8.345 8.8863 8.625 8.54172 8.625C8.19714 8.625 7.91672 8.345 7.91672 8ZM6.44505 10.2179C6.48589 10.3254 6.43172 10.4458 6.3238 10.4867C6.29922 10.4954 6.27464 10.5 6.25005 10.5C6.16589 10.5 6.08672 10.4487 6.05505 10.3654C5.89672 9.9475 5.47297 9.66667 5.00005 9.66667C4.52714 9.66667 4.10339 9.9475 3.94505 10.3654C3.9038 10.4733 3.7838 10.5267 3.6763 10.4867C3.5688 10.4458 3.51464 10.3254 3.55505 10.2179C3.77464 9.63875 4.35505 9.25 5.00005 9.25C5.64505 9.25 6.22547 9.63917 6.44505 10.2179ZM9.98672 10.2179C10.0276 10.3254 9.97339 10.4458 9.86547 10.4867C9.84089 10.4954 9.8163 10.5 9.79172 10.5C9.70755 10.5 9.62839 10.4487 9.59672 10.3654C9.43839 9.9475 9.01464 9.66667 8.54172 9.66667C8.0688 9.66667 7.64505 9.9475 7.48672 10.3654C7.44589 10.4733 7.32589 10.5267 7.21797 10.4867C7.11047 10.4458 7.0563 10.3254 7.09672 10.2179C7.3163 9.63875 7.89672 9.25 8.54172 9.25C9.18672 9.25 9.76714 9.63917 9.98672 10.2179ZM2.90339 10.2179C2.94422 10.3254 2.89005 10.4458 2.78214 10.4867C2.75755 10.4954 2.73297 10.5 2.70839 10.5C2.62422 10.5 2.54505 10.4487 2.51339 10.3654C2.35505 9.9475 1.9313 9.66667 1.45839 9.66667C0.98547 9.66667 0.56172 9.9475 0.403386 10.3654C0.362553 10.4733 0.242553 10.5267 0.134636 10.4867C0.0271363 10.4458 -0.0270304 10.3254 0.0133863 10.2179C0.23297 9.63875 0.813386 9.25 1.45839 9.25C2.10339 9.25 2.6838 9.63917 2.90339 10.2179Z"
                    fill="#28AF60"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1980_21841">
                    <rect
                      width="10"
                      height="10"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span>
                {currentLang.lecturingFildes}
                {lecture?.filides[0]}
              </span>
            </li>
            <li className="flex items-center justify-start gap-[5px] text-[#000] text-[10px] font-[400] font-[Cairo]">
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.3333 9.66667H6.66664C8.34164 9.66667 8.64164 8.99583 8.72914 8.17917L9.04164 4.84583C9.15414 3.82917 8.86247 3 7.0833 3H2.91664C1.13747 3 0.845802 3.82917 0.958302 4.84583L1.2708 8.17917C1.3583 8.99583 1.6583 9.66667 3.3333 9.66667Z"
                  stroke="#28AF60"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.33337 2.99992V2.66659C3.33337 1.92909 3.33337 1.33325 4.66671 1.33325H5.33337C6.66671 1.33325 6.66671 1.92909 6.66671 2.66659V2.99992"
                  stroke="#28AF60"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.83329 5.91667V6.33333C5.83329 6.3375 5.83329 6.3375 5.83329 6.34167C5.83329 6.79583 5.82913 7.16667 4.99996 7.16667C4.17496 7.16667 4.16663 6.8 4.16663 6.34583V5.91667C4.16663 5.5 4.16663 5.5 4.58329 5.5H5.41663C5.83329 5.5 5.83329 5.5 5.83329 5.91667Z"
                  stroke="#28AF60"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.02087 5.08325C8.05837 5.78325 6.95837 6.19992 5.83337 6.34159"
                  stroke="#28AF60"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.09167 5.1958C2.02917 5.83747 3.08751 6.22497 4.16667 6.3458"
                  stroke="#28AF60"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>
                {lecture?.experience[0]?.num_of_work_years}{" "}
                {currentLang.expYears}
              </span>
            </li>
            <li className="flex items-center justify-start gap-[5px] text-[#000] text-[10px] font-[400] font-[Cairo]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={11}
                hanging={11}
                viewBox="0 0 576 512"
              >
                <path
                  fill="#28AF60"
                  d="M565.6 36.2C572.1 40.7 576 48.1 576 56l0 336c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456L0 120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5l0 284.6 120-45.7 0-284.6L48 136.5zM360 422.7l0-285.4-144-48 0 285.4 144 48zm48-1.5l120-45.7 0-284.6L408 136.5l0 284.6z"
                />
              </svg>

              <span>
                {currentLang.country} {lecture?.country_id}
              </span>
            </li>
            <li className="flex items-center justify-start gap-[5px] text-[#000] text-[10px] font-[400] font-[Cairo]">
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.35413 4.72629C1.35413 2.68503 2.98121 1.02075 4.99996 1.02075C7.0187 1.02075 8.64579 2.68503 8.64579 4.72629C8.64579 5.71175 8.36495 6.76988 7.86848 7.68403C7.37262 8.59705 6.64814 9.39043 5.74184 9.81404C5.27103 10.0341 4.72889 10.0341 4.25808 9.81404C3.35178 9.39043 2.6273 8.59705 2.13144 7.68403C1.63497 6.76988 1.35413 5.71175 1.35413 4.72629ZM4.99996 1.64575C3.33681 1.64575 1.97913 3.0197 1.97913 4.72629C1.97913 5.60007 2.23022 6.55634 2.68067 7.38574C3.13173 8.21627 3.76913 8.8956 4.52273 9.24784C4.82581 9.3895 5.1741 9.3895 5.47719 9.24784C6.23078 8.8956 6.86819 8.21627 7.31925 7.38574C7.7697 6.55634 8.02079 5.60007 8.02079 4.72629C8.02079 3.0197 6.66311 1.64575 4.99996 1.64575ZM4.99996 3.72909C4.48219 3.72909 4.06246 4.14882 4.06246 4.66659C4.06246 5.18435 4.48219 5.60409 4.99996 5.60409C5.51773 5.60409 5.93746 5.18435 5.93746 4.66659C5.93746 4.14882 5.51773 3.72909 4.99996 3.72909ZM3.43746 4.66659C3.43746 3.80364 4.13701 3.10409 4.99996 3.10409C5.8629 3.10409 6.56246 3.80364 6.56246 4.66659C6.56246 5.52953 5.8629 6.22909 4.99996 6.22909C4.13701 6.22909 3.43746 5.52953 3.43746 4.66659Z"
                  fill="#44B975"
                />
              </svg>

              <span>
                {currentLang.location}
                {lecture?.location}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full my-[10px] border-b border-[#F1F1F2]"></div>

      <div className="w-full pb-[10px] flex items-center justify-center px-[15px]">
        <button className="flex w-full py-[8px] items-center justify-center bg-[#075178] rounded-[8px] text-[#fff] text-[10px] font-[600] font-[Cairo]  ">
            {currentLang.SeeMore}
        </button>
      </div>
    </div>
  );
};

export default LuctureCard;
