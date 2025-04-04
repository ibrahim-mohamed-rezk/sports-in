import { useSelector } from "react-redux";
import { ar, en } from "../../assets/langs/translation";
import useCopyToClipboard from "../../assets/hooks/useCopyToClipboard";
import { toast } from "react-toastify";

const JobSeeker = ({ cv, setchosedCv, setopencvpopup }) => {
  const { copyToClipboard } = useCopyToClipboard();

  // to set lang
  const { lang } = useSelector((state) => state.settings);
  const currentLang = lang === "en" ? en : ar;



  return (
    <div className="w-60 h-64 flex flex-col relative">
      {/* Header */}
      <div className="w-60 h-16 rounded-lg border border-zinc-100 overflow-hidden absolute top-0 left-0">
        <div className="w-full h-full bg-sky-900 rounded-lg relative">
          <div className="h-full w-36 bg-gradient-to-r from-sky-900 to-black/0 absolute top-0 right-0" />
        </div>
      </div>

      {/* Main content container */}
      <div className="w-60 h-56 bg-white rounded-xl shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)] border border-zinc-100 mt-12 z-10 flex flex-col">
        {/* Profile area - name and job title */}
        <div className="flex flex-col items-center">
          <div className="text-center text-black text-sm font-semibold font-['Cairo']">
            {cv?.name}
          </div>
          <div className="text-center text-zinc-500 text-[8px] font-normal font-['Cairo'] mt-1">
            {cv?.jobTitle}
          </div>
        </div>

        {/* Qualifications section */}
        <div className="flex flex-col items-start px-4 mt-8 gap-[5px]">
          <div className="flex items-center gap-[3px]">
            <div className="w-2.5 h-2.5 overflow-hidden flex-shrink-0">
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.4 8.41667C6.30062 8.40892 6.20182 8.39501 6.10416 8.375L4.46666 8C3.94694 7.88083 3.49576 7.56028 3.21218 7.10874C2.9286 6.65719 2.8358 6.11157 2.95416 5.59167L3.43333 3.50833L2.95416 5.59167C2.8358 6.11157 2.9286 6.65719 3.21218 7.10874C3.49576 7.56028 3.94694 7.88083 4.46666 8L6.1 8.375C6.19905 8.39504 6.29924 8.40896 6.4 8.41667V8.41667ZM3.6625 2.61667C3.68333 2.57083 3.7 2.525 3.72083 2.48333C3.7 2.525 3.68333 2.58333 3.6625 2.61667ZM4.37083 8.41667C4.05907 8.34597 3.7644 8.21424 3.50383 8.02906C3.24325 7.84388 3.02194 7.60892 2.85265 7.33775C2.68336 7.06658 2.56946 6.76457 2.51751 6.44915C2.46557 6.13372 2.47661 5.81113 2.55 5.5L3.17083 2.79167C3.17083 2.725 3.2125 2.66667 3.23333 2.60417L2.25833 2.88333C2.00737 2.95571 1.77314 3.07684 1.56903 3.23979C1.36491 3.40275 1.19492 3.60435 1.06877 3.83304C0.942615 4.06174 0.862777 4.31307 0.833818 4.57264C0.804859 4.83222 0.827347 5.09495 0.899997 5.34583L1.62083 7.84583C1.69237 8.09762 1.81284 8.33283 1.97535 8.53803C2.13786 8.74322 2.33922 8.91437 2.56793 9.04169C2.79663 9.169 3.04819 9.24999 3.30821 9.28001C3.56824 9.31004 3.83163 9.28851 4.08333 9.21667L5.75 8.73333L4.37083 8.41667ZM9.12916 4.15417L8.50416 6.875C8.44563 7.13218 8.33701 7.37531 8.1845 7.59051C8.032 7.8057 7.8386 7.98876 7.61535 8.12921C7.3921 8.26966 7.14337 8.36476 6.88337 8.40907C6.62336 8.45339 6.35717 8.44606 6.1 8.3875L4.46666 8C3.94694 7.88083 3.49576 7.56028 3.21218 7.10874C2.9286 6.65719 2.8358 6.11157 2.95416 5.59167L3.57916 2.87083C3.70108 2.35451 4.02234 1.90741 4.47279 1.62715C4.92323 1.34689 5.46628 1.25624 5.98333 1.375L7.61666 1.75C7.87384 1.80853 8.11697 1.91715 8.33217 2.06966C8.54737 2.22216 8.73042 2.41556 8.87087 2.63881C9.01132 2.86206 9.10642 3.11079 9.15074 3.3708C9.19506 3.6308 9.18773 3.89699 9.12916 4.15417V4.15417ZM6.11666 5.64167L4.95416 5.3375C4.87406 5.31726 4.78919 5.32957 4.71814 5.37173C4.64708 5.4139 4.59561 5.48249 4.575 5.5625C4.5644 5.60218 4.56183 5.64358 4.56745 5.68426C4.57307 5.72495 4.58676 5.7641 4.60772 5.79942C4.62868 5.83474 4.65649 5.86552 4.68951 5.88995C4.72252 5.91437 4.76009 5.93196 4.8 5.94167L5.95833 6.24583H6.0375C6.1071 6.2446 6.17441 6.22077 6.22928 6.17793C6.28415 6.13508 6.32359 6.07556 6.34166 6.00833C6.35825 5.93003 6.34416 5.84834 6.3023 5.78012C6.26044 5.7119 6.19399 5.66234 6.11666 5.64167V5.64167ZM7.32916 4.225L5.36666 3.72083C5.28656 3.70059 5.20169 3.7129 5.13064 3.75507C5.05958 3.79723 5.00811 3.86582 4.9875 3.94583C4.96715 4.02647 4.97934 4.11188 5.02144 4.18361C5.06354 4.25533 5.13217 4.30762 5.2125 4.32917L7.17083 4.82917C7.19708 4.83304 7.22375 4.83304 7.25 4.82917C7.32454 4.82726 7.39595 4.79876 7.45132 4.74882C7.50669 4.69888 7.54238 4.63078 7.55193 4.55683C7.56149 4.48287 7.54429 4.40794 7.50344 4.34556C7.46259 4.28318 7.40077 4.23746 7.32916 4.21667V4.225Z"
                  fill="#28AF60"
                />
              </svg>
            </div>
            <div className="text-center text-black text-[8px] font-normal font-['Cairo']">
              {`${currentLang.qualifications || "المؤهل"}: ${
                cv?.qualifications.length <= 0
                  ? "غير محدد"
                  : cv?.qualifications[0]
              }`}
            </div>
          </div>

          <div className="flex items-center gap-[3px]">
            <div className="flex-shrink-0">
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33318 9.66667H6.66651C8.34151 9.66667 8.64151 8.99583 8.72901 8.17917L9.04151 4.84583C9.15401 3.82917 8.86235 3 7.08318 3H2.91651C1.13735 3 0.84568 3.82917 0.95818 4.84583L1.27068 8.17917C1.35818 8.99583 1.65818 9.66667 3.33318 9.66667Z"
                  stroke="#28AF60"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.3335 3.00065V2.66732C3.3335 1.92982 3.3335 1.33398 4.66683 1.33398H5.3335C6.66683 1.33398 6.66683 1.92982 6.66683 2.66732V3.00065"
                  stroke="#28AF60"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.83317 5.91667V6.33333C5.83317 6.3375 5.83317 6.3375 5.83317 6.34167C5.83317 6.79583 5.829 7.16667 4.99984 7.16667C4.17484 7.16667 4.1665 6.8 4.1665 6.34583V5.91667C4.1665 5.5 4.1665 5.5 4.58317 5.5H5.4165C5.83317 5.5 5.83317 5.5 5.83317 5.91667Z"
                  stroke="#28AF60"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.021 5.08398C8.0585 5.78398 6.9585 6.20065 5.8335 6.34232"
                  stroke="#28AF60"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.0918 5.19531C2.0293 5.83698 3.08763 6.22448 4.1668 6.34531"
                  stroke="#28AF60"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-right text-black text-[8px] font-normal font-['Cairo']">
              {`${currentLang.expYears || "عدد سنوات الخبرة"}: ${
                cv?.y_of_exp
              } ${currentLang.years || "سنوات"}`}
            </div>
          </div>

          {/* <div className="flex items-center gap-[3px]">
            <div className="w-2.5 h-2.5 relative overflow-hidden flex-shrink-0">
              <div className="w-2.5 h-1.5 left-0 top-[3.33px] absolute bg-green-500" />
              <div className="w-[3.33px] h-1 left-[1.67px] top-0 absolute bg-green-500" />
            </div>
            <div className="text-right text-black text-[8px] font-normal font-['Cairo']">
              {`${currentLang.salary || "الراتب المتوقع"}: ${
                cv?.expectedSalary || "1000"
              } ${currentLang.pound || "دولار"}`}
            </div>
          </div> */}

          <div className="flex items-center gap-1">
            <svg
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_447)">
                <path
                  d="M8.75 2.16667V8.41667H3.295L2.5 8.94667V9.25H6.95709L8.60875 10.3512C9.17334 10.7546 10.0221 10.2987 10 9.60625V3.41667C10 2.7275 9.43917 2.16667 8.75 2.16667ZM6.66667 0.5H1.25C0.560836 0.5 2.77391e-06 1.06083 2.77391e-06 1.75V7.93917C-0.0220806 8.63208 0.826669 9.08625 1.39125 8.68417L3.0425 7.58292H7.91625V1.75C7.91625 1.06083 7.35584 0.5 6.66667 0.5ZM3.54167 3.25H2.75V3.70875H3.54167V4.37542H2.75V4.83417H3.54167V5.50083H2.08334V2.58333H3.54167V3.25ZM5.90292 5.5H5.28084L4.58084 4.02208V5.5H3.95875V2.58333H4.58084V2.58667L5.28084 4.06458V2.58333H5.90292V5.5Z"
                  fill="#28AF60"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_447">
                  <rect
                    width="10"
                    height="10"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className="text-right text-black text-[8px] font-normal font-['Cairo']">
              {`${currentLang.englishLevel}: ${
                cv?.english && currentLang[cv.english]
              }`}
            </div>
          </div>
        </div>

        {/* Country, Age and Gender section */}
        <div className="flex justify-between items-center px-4 mt-auto py-2 border-t border-zinc-100">
          <div className="flex items-center gap-[5px]">
            <div className="text-right text-black text-[10px] font-normal font-['Cairo'] leading-none">
              {cv?.country}
            </div>
            <div className="flex-shrink-0">
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.354 4.72637C1.354 2.68511 2.98109 1.02083 4.99984 1.02083C7.01858 1.02083 8.64567 2.68511 8.64567 4.72637C8.64567 5.71183 8.36483 6.76996 7.86836 7.6841C7.3725 8.59713 6.64802 9.3905 5.74172 9.81412C5.27091 10.0342 4.72877 10.0342 4.25796 9.81412C3.35166 9.3905 2.62718 8.59713 2.13132 7.6841C1.63485 6.76996 1.354 5.71183 1.354 4.72637ZM4.99984 1.64583C3.33668 1.64583 1.979 3.01978 1.979 4.72637C1.979 5.60015 2.2301 6.55642 2.68055 7.38582C3.1316 8.21635 3.76901 8.89568 4.52261 9.24791C4.82569 9.38958 5.17398 9.38958 5.47707 9.24791C6.23066 8.89568 6.86807 8.21635 7.31913 7.38582C7.76957 6.55642 8.02067 5.60015 8.02067 4.72637C8.02067 3.01978 6.66299 1.64583 4.99984 1.64583ZM4.99984 3.72916C4.48207 3.72916 4.06234 4.14889 4.06234 4.66666C4.06234 5.18443 4.48207 5.60416 4.99984 5.60416C5.5176 5.60416 5.93734 5.18443 5.93734 4.66666C5.93734 4.14889 5.5176 3.72916 4.99984 3.72916ZM3.43734 4.66666C3.43734 3.80372 4.13689 3.10416 4.99984 3.10416C5.86278 3.10416 6.56234 3.80372 6.56234 4.66666C6.56234 5.52961 5.86278 6.22916 4.99984 6.22916C4.13689 6.22916 3.43734 5.52961 3.43734 4.66666Z"
                  fill="#44B975"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-[5px]">
            <div className="text-right text-nowrap text-black text-[10px] font-normal font-['Cairo'] leading-none">
              {`${cv?.age}${currentLang.years}`}
            </div>
            <div className="flex-shrink-0">
              <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.75016 3.10417C3.11734 3.10417 2.60433 3.61718 2.60433 4.25001C2.60433 4.88283 3.11734 5.39584 3.75016 5.39584C4.38299 5.39584 4.896 4.88283 4.896 4.25001C4.896 3.61718 4.38299 3.10417 3.75016 3.10417ZM3.22933 4.25001C3.22933 3.96236 3.46252 3.72917 3.75016 3.72917C4.03781 3.72917 4.271 3.96236 4.271 4.25001C4.271 4.53765 4.03781 4.77084 3.75016 4.77084C3.46252 4.77084 3.22933 4.53765 3.22933 4.25001Z"
                  fill="#28AF60"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.75016 5.60417C3.25193 5.60417 2.78542 5.70448 2.4319 5.88124C2.09707 6.04866 1.771 6.33775 1.771 6.75001L1.77094 6.77604C1.7703 6.98869 1.76923 7.34675 2.10859 7.5924C2.26607 7.7064 2.47387 7.7791 2.73128 7.82541C2.99108 7.87216 3.324 7.89584 3.75016 7.89584C4.17632 7.89584 4.50925 7.87216 4.76904 7.82541C5.02646 7.7791 5.23425 7.7064 5.39173 7.5924C5.7311 7.34675 5.73002 6.98869 5.72938 6.77604L5.72933 6.75001C5.72933 6.33775 5.40326 6.04866 5.06843 5.88124C4.71491 5.70448 4.2484 5.60417 3.75016 5.60417ZM2.396 6.75001C2.396 6.70202 2.44302 6.57445 2.71141 6.44026C2.9611 6.31541 3.32792 6.22917 3.75016 6.22917C4.17241 6.22917 4.53922 6.31541 4.78892 6.44026C5.05731 6.57445 5.10433 6.70202 5.10433 6.75001C5.10433 7.00187 5.08829 7.04049 5.02526 7.08612C4.97441 7.12293 4.8697 7.17227 4.65837 7.21029C4.44941 7.24789 4.15734 7.27084 3.75016 7.27084C3.34299 7.27084 3.05091 7.24789 2.84196 7.21029C2.63062 7.17227 2.52592 7.12293 2.47507 7.08612C2.41203 7.04049 2.396 7.00187 2.396 6.75001Z"
                  fill="#28AF60"
                />
                <path
                  d="M7.91683 5.81251C8.08942 5.81251 8.22933 5.67259 8.22933 5.50001C8.22933 5.32742 8.08942 5.18751 7.91683 5.18751H6.25016C6.07757 5.18751 5.93766 5.32742 5.93766 5.50001C5.93766 5.67259 6.07757 5.81251 6.25016 5.81251H7.91683Z"
                  fill="#28AF60"
                />
                <path
                  d="M8.22933 4.25001C8.22933 4.42259 8.08942 4.56251 7.91683 4.56251H5.8335C5.66091 4.56251 5.521 4.42259 5.521 4.25001C5.521 4.07742 5.66091 3.93751 5.8335 3.93751H7.91683C8.08942 3.93751 8.22933 4.07742 8.22933 4.25001Z"
                  fill="#28AF60"
                />
                <path
                  d="M7.91683 7.06251C8.08942 7.06251 8.22933 6.92259 8.22933 6.75001C8.22933 6.57742 8.08942 6.43751 7.91683 6.43751H6.66683C6.49424 6.43751 6.35433 6.57742 6.35433 6.75001C6.35433 6.92259 6.49424 7.06251 6.66683 7.06251H7.91683Z"
                  fill="#28AF60"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.14332 1.85417H5.857C6.62273 1.85417 7.22925 1.85416 7.70392 1.91798C8.19243 1.98366 8.58783 2.12204 8.89964 2.43386C9.21146 2.74567 9.34984 3.14107 9.41552 3.62958C9.47934 4.10425 9.47934 4.71076 9.47933 5.47648V5.52351C9.47934 6.28924 9.47934 6.89576 9.41552 7.37043C9.34984 7.85894 9.21146 8.25434 8.89964 8.56615C8.58783 8.87797 8.19243 9.01635 7.70392 9.08203C7.22925 9.14585 6.62275 9.14585 5.85702 9.14584H4.14333C3.3776 9.14585 2.77107 9.14585 2.2964 9.08203C1.80789 9.01635 1.4125 8.87797 1.10068 8.56615C0.788863 8.25434 0.650481 7.85894 0.584803 7.37043C0.520985 6.89576 0.52099 6.28925 0.520996 5.52352V5.4765C0.52099 4.71077 0.520985 4.10425 0.584803 3.62958C0.650481 3.14107 0.788863 2.74567 1.10068 2.43386C1.4125 2.12204 1.80789 1.98366 2.2964 1.91798C2.77107 1.85416 3.37759 1.85417 4.14332 1.85417ZM2.37968 2.53741C1.96048 2.59377 1.71896 2.69946 1.54262 2.8758C1.36629 3.05214 1.26059 3.29366 1.20423 3.71286C1.14666 4.14105 1.146 4.7055 1.146 5.50001C1.146 6.29451 1.14666 6.85896 1.20423 7.28715C1.26059 7.70636 1.36629 7.94788 1.54262 8.12421C1.71896 8.30055 1.96048 8.40625 2.37968 8.46261C2.80788 8.52018 3.37232 8.52084 4.16683 8.52084H5.8335C6.628 8.52084 7.19245 8.52018 7.62064 8.46261C8.03985 8.40625 8.28137 8.30055 8.4577 8.12421C8.63404 7.94788 8.73974 7.70636 8.7961 7.28715C8.85367 6.85896 8.85433 6.29451 8.85433 5.50001C8.85433 4.7055 8.85367 4.14105 8.7961 3.71286C8.73974 3.29366 8.63404 3.05214 8.4577 2.8758C8.28137 2.69946 8.03985 2.59377 7.62064 2.53741C7.19245 2.47984 6.628 2.47917 5.8335 2.47917H4.16683C3.37232 2.47917 2.80788 2.47984 2.37968 2.53741Z"
                  fill="#28AF60"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-[5px]">
            <div className="text-right text-black text-[10px] font-normal font-['Cairo'] leading-none">
              {cv?.type === "male" ? currentLang.male : currentLang.female}
            </div>
            <div className="flex-shrink-0 w-2.5 h-2.5">
              {cv?.type === "male" ? (
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.71429 1.03571C5.71429 0.739847 5.95414 0.5 6.25 0.5H9.46429C9.53693 0.5 9.60621 0.514457 9.66936 0.540649C9.7325 0.566792 9.79171 0.605545 9.84307 0.656907C9.89443 0.708269 9.93321 0.767466 9.95936 0.830651C9.98557 0.893816 10 0.963077 10 1.03571V4.25C10 4.54586 9.76014 4.78571 9.46429 4.78571C9.16843 4.78571 8.92857 4.54586 8.92857 4.25V2.32904L6.44721 4.8104C6.88444 5.40301 7.14286 6.13561 7.14286 6.92857C7.14286 8.901 5.54387 10.5 3.57143 10.5C1.59899 10.5 0 8.901 0 6.92857C0 4.95613 1.59899 3.35714 3.57143 3.35714C4.36439 3.35714 5.09699 3.61556 5.6896 4.05279L8.17093 1.57143H6.25C5.95414 1.57143 5.71429 1.33158 5.71429 1.03571ZM5.29017 5.11309C4.84215 4.6888 4.23718 4.42857 3.57143 4.42857C2.19071 4.42857 1.07143 5.54786 1.07143 6.92857C1.07143 8.30929 2.19071 9.42857 3.57143 9.42857C4.95214 9.42857 6.07143 8.30929 6.07143 6.92857C6.07143 6.26282 5.8112 5.65785 5.38691 5.20983C5.36905 5.19601 5.35186 5.18091 5.33548 5.16452C5.31909 5.14814 5.30399 5.13095 5.29017 5.11309Z"
                    fill="#28AF60"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  height="11"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="#28AF60"
                    d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1l0 34.9-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-34.9z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* Contact button */}
        <div className="px-2 py-2">
          <a
            href={`https://wa.me/${cv?.phone}`}
            target="_blank"
            className="w-full h-8 bg-sky-900 rounded-lg flex justify-center items-center cursor-pointer hover:bg-sky-800 transition-colors"
          >
            <div className="text-center text-white text-[10px] font-semibold font-['Cairo'] leading-3">
              {currentLang.contactNow}
            </div>
          </a>
        </div>
      </div>

      {/* Profile Image - Must be outside the main container to overlap properly */}
      <div className="absolute top-4 right-4 z-20">
        <img
          className="w-16 h-16 rounded-full object-cover"
          src={cv?.image || "https://placehold.co/66x66"}
          alt={cv?.name || "Profile"}
        />
      </div>
    </div>
  );
};

export default JobSeeker;
