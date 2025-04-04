import googleIcon from "../../assets/images/icons/googleIcon.png";
import img1 from "../../assets/images/authImages/signUp.png";

import { Link, useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import { ar, en } from "../../assets/langs/translation";
import useLoginWithGoogle from "../../assets/hooks/useLoginWithGoogle";

const SignUp = () => {
  const navigate = useNavigate();


  // to set lang
  const { lang } = useSelector((state) => state.settings);
  const currentLang = lang === "en" ? en : ar;

  const lgoinWithGoogle = useLoginWithGoogle(currentLang.error);

  return (
    <main className="container flex items-center justify-center mx-auto">
      <div
        className={`flex items-start justify-between flex-col md:flex-row py-0 md:px-[40px] container mx-auto mt-8 mb-20`}
      >
        <div
          className={`flex flex-col order-2 md:order-1 justify-start items-start p-10 pt-10 pb-0 w-full md1:w-[45%] max-w-[609px] min-h-[750px]`}
        >
          <div className={`w-full`}>
            <h4
              className={`font-[Poppins] text-[14px] md:text-[21px] font-normal leading-[31.5px] text-left text-black`}
            >
              Welcome to
              <span className={`font-semibold text-[#779341]`}> SPORTS IN</span>
            </h4>
            <h2
              className={`font-[Poppins] text-[20px] md;text-[55px] font-medium leading-[82.5px] text-left text-black`}
            >
              Sign Up
            </h2>
          </div>

          <div className="w-full flex-col justify-start items-center inline-flex mt- md:mt-20">
            {/* google btn */}
            <div
              className={`flex justify-center items-center w-full cursor-pointer mt-10`}
            >
              <div
                onClick={lgoinWithGoogle}
                className={`flex justify-center items-center gap-2 border-[#E6E6E6] border-[3px] w-full mx-auto rounded-[20px] py-[15px]`}
              >
                <img
                  className={`w-[26px] flex-shrink-0 flex-grow-0`}
                  src={googleIcon}
                  alt="Google"
                />
                <div
                  className={`text-[#0C092A] text-[16px] font-[Poppins] font-normal`}
                >
                  Sign Up with Google
                </div>
              </div>
            </div>

            {/* email bt */}
            <div
              className={`flex justify-center items-center w-full cursor-pointer py-6`}
              onClick={() => navigate(`/signUp-email`)}
            >
              <div
                className={`flex justify-center items-center gap-2 w-full mx-auto bg-[#075178] rounded-[20px] py-[15px]`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_257_38)">
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_257_38">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div
                  className={`text-white text-[16px] font-[Poppins] font-normal`}
                >
                  Sign Up with Email
                </div>
              </div>
            </div>

            <div
              className={`w-full text-center mt-5 flex items-center justify-center`}
            >
              <span
                className={`text-[#858494] text-[14px] font-[Poppins] font-normal`}
              >
                Already have an account?
              </span>
              <Link to={`/login`}>
                <span className="text-[#075178] text-[14px] font-[Poppins] font-medium cursor-pointer">
                  Sign in
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ///////////// */}
        <div
          className={`flex flex-col justify-center items-center order-1 md:order-2 overflow-hidden rounded-[40px] w-full md:w-[45%] min-h-[190px] md:min-h-[750px] px-5 max-w-[597px]`}
        >
          <div
            className={`w-full min-h-[190px] md:min-h-[750px] flex items-center justify-center`}
          >
            <img src={img1} alt="signUp" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
