import googleIcon from "../../assets/images/icons/googleIcon.png";
import img1 from "../../assets/images/authImages/SignUpEmIl.png";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeData } from "../../store/slices/user/rejesterSlice";
import server from "../../assets/axios/server";
import { useEffect, useState } from "react";
import { ar, en } from "../../assets/langs/translation";
import useLoginWithGoogle from "../../assets/hooks/useLoginWithGoogle";

const SignUpEmail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [countries, setCountries] = useState([]);

  // get countries
  useEffect(() => {
    server
      .get(`/countries-api`)
      .then((res) => {
        setCountries(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeData({ field: name, value }));
  };

  const { name, date, email, country_id, sex } = useSelector(
    (state) => state.rejester
  );

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
              {/* username */}
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
                  <g clip-path="url(#clip0_70_205)">
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke="#075178"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.9999 14C5.51247 14 5.03283 19.6831 5.00143 20.8079C4.99841 20.9161 5.08608 21 5.19431 21H18.8056C18.9138 21 19.0015 20.9161 18.9985 20.8079C18.9671 19.6831 18.4874 14 11.9999 14Z"
                      stroke="#075178"
                      stroke-width="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_70_205">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  value={name}
                  className={`w-full border-none outline-none text-[16px] font-[Poppins] font-normal`}
                  onChange={handleInputChange}
                />
              </div>
              {/* email */}
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
                  <g clipPath="url(#clip0_110_22)">
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="#075178"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="#075178"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_110_22">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  name="email"
                  className={`w-full border-none outline-none text-[16px] font-[Poppins] font-normal`}
                  onChange={handleInputChange}
                />
              </div>
              {/* birthday */}
              <div
                className={`flex justify-start items-center gap-4 w-full py-[13px] px-[16px] border-2 border-[#efeefc] rounded-[20px]`}
              >
                <input
                  type="date"
                  placeholder="dd / mm / yy"
                  value={date}
                  name="date"
                  className={`w-full border-none outline-none text-[16px] font-[Poppins] font-normal`}
                  onChange={handleInputChange}
                />
              </div>
              {/* sex */}
              <div
                className={`flex justify-start items-center gap-4 w-full py-[13px] px-[16px] border-2 border-[#efeefc] rounded-[20px]`}
              >
                <select
                  type="password"
                  placeholder="Password"
                  className={`w-full border-none outline-none text-[16px] font-[Poppins] font-normal`}
                  name="sex"
                  value={sex}
                  onChange={handleInputChange}
                >
                  <option value="male">male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              {/* country */}
              <div
                className={`flex justify-start items-center gap-4 w-full py-[13px] px-[16px] border-2 border-[#efeefc] rounded-[20px]`}
              >
                <select
                  type="password"
                  placeholder="Password"
                  className={`w-full border-none outline-none text-[16px] font-[Poppins] font-normal`}
                  name="country_id"
                  value={country_id}
                  onChange={handleInputChange}
                >
                  <option value="">{currentLang.country}</option>
                  {countries.map((contry, index) => {
                    return (
                      <option key={index} value={contry.id}>
                        {contry.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {/* progress line */}
            <div className={`w-full my-7`}>
              <div
                className={`flex w-full items-center justify-end text-[#075178] font-bold`}
              >
                1 of 2
              </div>
              <div
                className={`w-full flex items-center justify-center bg-[#E9F1FF] rounded-lg `}
              >
                <div
                  className={`w-1/2 border-[5px] border-[#075178] rounded-lg`}
                ></div>
                <div className={`w-1/2 `}></div>
              </div>
            </div>
          </div>
          <div className={`flex justify-end items-center w-full`}>
            <div
              className={`flex justify-end items-center w-1/2 py-[16px] mt-[50px] bg-[#075178] rounded-[20px] cursor-pointer`}
            >
              <div
                className={`text-center text-white text-[16px] font-[Poppins] font-medium leading-[24px] w-full`}
                onClick={() => navigate(`/signUp-email-2`)}
              >
                Confirm
              </div>
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

export default SignUpEmail;
