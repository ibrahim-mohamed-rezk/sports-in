import googleIcon from "../../assets/images/icons/googleIcon.png";
import img1 from "../../assets/images/authImages/SignUpEmIl.png";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeData,
  resetRejesterState,
} from "../../store/slices/user/rejesterSlice";
import server from "../../assets/axios/server";
import { rememberUser, setUser } from "../../store/slices/user/userSlice";
import { SyncLoader } from "react-spinners";
import { toast } from "react-toastify";
import { ar, en } from "../../assets/langs/translation";
import { useState } from "react";
import useLoginWithGoogle from "../../assets/hooks/useLoginWithGoogle";

const SignUpEmail2 = () => {
  const dispatch = useDispatch();
  const rejesterData = useSelector((state) => state.rejester);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handelRejester = () => {
    setLoading(true);
    server
      .post("/register-api", rejesterData)
      .then((data) => {
        dispatch(
          setUser({ user: data.data.data.user, token: data.data.data.token })
        );
        dispatch(
          rememberUser({
            user: data.data.data.user,
            token: data.data.data.token,
          })
        );
        dispatch(resetRejesterState());
        navigate("/login");
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data.message || currentLang.error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeData({ field: name, value }));
  };

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
          <div
            className={`flex justify-center items-center w-full cursor-pointer py-6`}
          >
            <div
            onClick={lgoinWithGoogle}
              className={`flex justify-center items-center gap-2 w-full mx-auto bg-[#e9f1ff] rounded-[20px] py-[15px]`}
            >
              <img
                className={`w-[26px] flex-shrink-0 flex-grow-0`}
                src={googleIcon}
                alt="Google"
              />
              <div
                className={`text-[#4285f4] text-[16px] font-[Poppins] font-normal`}
              >
                Sign Up with Google
              </div>
            </div>
          </div>
          <div
            className={`flex justify-center items-center gap-2.5 w-full py-6`}
          >
            <div className={`w-[35%] border-b border-[#e6e6e6]`} />
            <div
              className={`text-center text-[#858494] text-[16px] font-[Poppins] font-normal`}
            >
              OR
            </div>
            <div className={`w-[35%] border-b border-[#e6e6e6]`} />
          </div>
          <div
            className={`flex flex-col justify-start items-start gap-2.5 w-full`}
          >
            <div
              className={`flex flex-col justify-start items-start gap-2.5 w-full`}
            >
              {/* password */}
              <div
                className={`flex justify-start items-center gap-4 w-full py-[13px] px-[16px] border-2 border-[#efeefc] rounded-[20px]`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_70_626)">
                    <path
                      d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z"
                      stroke="#075178"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                      stroke="#075178"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11"
                      stroke="#075178"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_70_626">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <input
                  type="password"
                  placeholder="Password"
                  className={`w-full border-none outline-none text-[16px] font-[Poppins] font-normal`}
                  name="password"
                  value={rejesterData.password}
                  onChange={handleInputChange}
                />
              </div>
              {/* cofirm password */}
              <div
                className={`flex justify-start items-center gap-4 w-full py-[13px] px-[16px] border-2 border-[#efeefc] rounded-[20px]`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_70_626)">
                    <path
                      d="M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z"
                      stroke="#075178"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                      stroke="#075178"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11"
                      stroke="#075178"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_70_626">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className={`w-full border-none outline-none text-[16px] font-[Poppins] font-normal`}
                  name="password_confirmation"
                  value={rejesterData.password_confirmation}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* progress line */}
            <div className={`w-full my-7`}>
              <div
                className={`flex w-full items-center justify-end text-[#075178] font-bold`}
              >
                2 of 2
              </div>
              <div
                className={`w-full flex items-center justify-center bg-[#E9F1FF] rounded-lg overflow-hidden `}
              >
                <div className={`w-1/2 border-[5px] border-[#075178] `}></div>
                <div className={`w-1/2 border-[5px] border-[#075178]`}></div>
              </div>
            </div>
          </div>
          <div className={`flex justify-end items-center w-full`}>
            <div
              className={`flex justify-end items-center w-1/2 py-[16px] mt-[50px] ${
                loading ? "bg-[#075178a8]" : "bg-[#075178]"
              } rounded-[20px] ${!loading && "cursor-pointer"}`}
            >
              <button
                onClick={handelRejester}
                className={`text-center border-none outline-none text-white text-[16px] font-[Poppins] font-medium leading-[24px] w-full`}
              >
                {loading ? <SyncLoader color="white" /> : "Sign Up"}
              </button>
            </div>
          </div>
          <div
            className={`w-full text-center mt-16 flex items-center justify-center`}
          >
            <span
              className={`text-[#858494] text-[14px] font-[Poppins] font-normal`}
            >
              Already have an account?
            </span>
            <Link to={`/login`}>
              <span className="text-[#075178] text-[14px] font-[Poppins] font-medium cursor-pointer">
                Login
              </span>
            </Link>
          </div>
        </div>

        {/* ///////////// */}
        <div
          className={`flex flex-col justify-center order-1 md:order-2 items-center overflow-hidden rounded-[40px] w-full md:w-[45%] min-h-[190px] md:min-h-[750px] px-5 max-w-[597px]`}
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

export default SignUpEmail2;
