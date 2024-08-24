import logoIcon from "../../assets/images/logo/logoIcon.png";
import logoTitle from "../../assets/images/logo/logoTitle.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A142F] flex items-center justify-center text-white">
      <div className="container mx-auto flex flex-col items-center justify-center p-16">
        <div className="flex items-center justify-between w-full">
          <div className="flex w-[60%] items-start justify-between">
            <div className="flex flex-col items-start justify-start ">
              <div className="text-[16px] font-[700] ">Product</div>
              <ul className="flex flex-col items-start justify-start mt-3 gap-1">
                <li className="text-[16px] font-[400] text-[#ffffffb4]">
                  Employee database
                </li>
                <li className="text-[16px] font-[400] text-[#ffffffb4]">
                  Payroll
                </li>
                <li className="text-[16px] font-[400] text-[#ffffffb4]">
                  Absences
                </li>
                <li className="text-[16px] font-[400] text-[#ffffffb4]">
                  Time tracking
                </li>
                <li className="text-[16px] font-[400] text-[#ffffffb4]">
                  Shift planner
                </li>
                <li className="text-[16px] font-[400] text-[#ffffffb4]">
                  Recruiting
                </li>
              </ul>
            </div>
            <div className="">
              <div className="text-[16px] font-[700]">Information</div>
              <ul className="flex flex-col items-start justify-start mt-3 gap-1">
                <li className="text-[16px] font-[400] text-[#ffffffb4]">FAQ</li>
                <li className="text-[16px] font-[400] text-[#ffffffb4]">
                  Blog
                </li>
                <li className="text-[16px] font-[400] text-[#ffffffb4]">
                  Support
                </li>
              </ul>
            </div>
            <div className="">
              <div className="text-[16px] font-[700]">Company</div>
              <ul className="flex flex-col items-start justify-start mt-3 gap-1">
                <li className="text-[16px] font-[400] text-[#ffffffb4]">
                  About us
                </li>
                <li className="text-[16px] font-[400] text-[#ffffffb4]">
                  Careers
                </li>
                <li className="text-[16px] font-[400] text-[#ffffffb4]">
                  Contact us
                </li>
                <li className="text-[16px] font-[400] text-[#ffffffb4]">
                  Lift Media
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-[30%] items-start justify-between">
            <div className=" w-full flex flex-col items-start bg-[#ffffff1f] p-6">
              <h3 className="text-[16px] font-[700]">Subscribe</h3>
              <div className="flex w-full items-center justify-start mt-3">
                <div className="w-full bg-white rounded overflow-hidden flex items-center justify-start">
                  <input
                    type="email"
                    className="bg-transparent text-[14px] font-[400] w-[80%] text-[#7A7E92] border-none outline-none "
                  />
                  <button className="border-none outline-none bg-[#28AF60] px-6 py-2">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <p className="text-[13px] font-[400] text-[#ffffff8e] w-full mt-3">
                Hello, we are Lift Media. Our goal is to translate the positive
                effects from revolutionizing how companies engage with their
                clients & their team.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-between mt-10 border-t border-[#ffffff42] p-5">
          <div className="flex items-center justify-center gap-2">
            <img className="" src={logoIcon} />
            <img className="" src={logoTitle} />
          </div>
          <div className=" flex items-center justify-center gap-5">
            <div className="text-[14px] font-[500]">Terms</div>
            <div className="text-[14px] font-[500]">Privacy</div>
            <div className="text-[14px] font-[500]">Cookies</div>
          </div>
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center justify-center py-2 rounded-full border border-[#ffffff50] w-[35px] h-[35px]">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="flex items-center justify-center py-2 rounded-full border border-[#ffffff50] w-[35px] h-[35px]">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="flex items-center justify-center py-2 rounded-full border border-[#ffffff50] w-[35px] h-[35px]">
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;