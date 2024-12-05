import { useSelector } from "react-redux";
import cvImg from "../../assets/images/home/cvImg.png";
import { ar, en } from "../../assets/langs/translation";
import footerLogo from "../../assets/images/logo/footerLogo.png";
import egypt from "../../assets/images/icons/egypt.png";

const TraineeCard = ({ trainee }) => {
  // to set lang
  const { lang } = useSelector((state) => state.settings);
  const currentLang = lang === "en" ? en : ar;

  return (
    <div
      className={` ${
        lang === "en" ? "ltr" : "rtl"
      }  flex-col w-[238px] h-[150px] border border-[#F1F1F2] rounded-[8px] max-w-[100%] overflow-hidden flex items-center justify-between `}
      style={{
        boxShadow: "0px 3px 4px 0px #00000008",
        background: `url(${footerLogo})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgb(0 47 68 / 5%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        flexGrow: "1",
      }}
    >
      <div class="relative block h-[66px] w-full">
        <div
          class="absolute flex h-[66px] top-0 left-0 w-full z-10 rounded-[8px] overflow-hidden"
          style={{
            backgroundImage: `
            linear-gradient(270deg, #075178 50%, rgba(0, 0, 0, 0) 120%)`,
            // background: "#075178"
          }}
        ></div>

        <img
          src={trainee.country_image}
          alt="Background"
          class="absolute rounded-[8px] top-0 left-0 w-[50%] !h-[66px] object-cover z-0"
        />
      </div>

      <div className="flex px-[10px] items-stretch justify-between w-full flex-col z-20 mt-[32px]">
        <div className="flex gap-[7px]  items-center justify-start w-full ">
          <div className="border-4 border-[#fff] rounded-full bg-[#fff] !w-[70px] !h-[70px] flex items-center justify-center">
            <img
              className="rounded-full !w-full !h-full border border-[rgb(0 47 68 / 5%)]"
              src={trainee.image || cvImg}
              alt="trainee"
            />
          </div>
          <div className="flex flex-col items-start justify-start mt-[30px]">
            <h2 className="text-[10px] font-[600] font-[Inter] text-[#000] w-full text-nowrap">
              {trainee.name}
            </h2>
            <span className="text-[8px] font-[600] font-[Inter] text-[#767676]">
              {trainee.code}
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-start">
          <ul className="flex flex-col items-start justify-start">
            {trainee.courses.map((cource, index) => {
              if (index > 1) {
                return null;
              }

              if (index === 1) {
                return (
                  <li key={index} className="text-[8px] text-[#263238] font-[500] font-[inter] ">
                    - {cource.title}....{currentLang.SeeMore}
                  </li>
                );
              }

              return (
                <li key={index} className="text-[8px] text-[#263238] font-[500] font-[inter] ">
                  - {cource.title}
                </li>
              );
            })}
          </ul>
          <div className="flex w-full items-center justify-end mb-[5px]  ">
            <svg
              width="54"
              height="15"
              viewBox="0 0 54 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.89929 10.808L0.868452 10.8944L0.949116 10.938C1.48567 11.2283 2.25049 11.4133 3.07227 11.4133C3.96423 11.4133 4.67888 11.1995 5.17324 10.8221C5.67028 10.4427 5.93716 9.90323 5.93716 9.27442C5.93716 8.74325 5.76329 8.31652 5.41889 7.96624C5.07837 7.6199 4.57672 7.35392 3.93045 7.12749C3.44955 6.95901 3.11427 6.8165 2.8989 6.6528C2.79303 6.57233 2.71955 6.48914 2.67203 6.39841C2.62474 6.30813 2.60019 6.20473 2.60019 6.07929C2.60019 5.86048 2.69515 5.65956 2.88018 5.51105C3.06646 5.36153 3.34958 5.26132 3.72748 5.26132C4.39009 5.26132 4.905 5.47819 5.18226 5.63924L5.29179 5.70286L5.33614 5.58421L5.67136 4.68733L5.70385 4.60041L5.62237 4.556C5.19466 4.32289 4.52176 4.12255 3.75795 4.12255C2.13455 4.12255 1.10639 5.04884 1.10639 6.21943C1.10639 7.1026 1.78923 7.80129 3.12985 8.24075C3.62219 8.40797 3.94742 8.56703 4.14944 8.74798C4.34449 8.92269 4.42812 9.1208 4.42812 9.38653C4.42812 9.63507 4.32811 9.85547 4.11928 10.0166C3.90769 10.1798 3.57539 10.2886 3.10275 10.2886C2.45479 10.2886 1.7727 10.0433 1.39033 9.81339L1.27842 9.74609L1.23451 9.86908L0.89929 10.808ZM7.45249 13.941V14.0479H7.55942H8.88507H8.99201V13.941V10.5335C9.48686 11.1067 10.2929 11.4274 11.1859 11.4274C12.0789 11.4274 12.9449 11.1174 13.5881 10.4896C14.2324 9.86067 14.645 8.9208 14.645 7.67685C14.645 5.56596 13.2641 4.12255 11.4145 4.12255C10.2818 4.12255 9.42924 4.54704 8.85615 5.27755L8.80901 4.37804L8.8037 4.2767H8.70222H7.49847H7.38636L7.39166 4.38868C7.42211 5.03291 7.45249 5.73156 7.45249 6.5978V13.941ZM9.07903 6.76834L9.07947 6.76678C9.32499 5.8901 10.1346 5.31738 11.0031 5.31738C11.6792 5.31738 12.1971 5.59348 12.5483 6.02904C12.9014 6.46705 13.0903 7.07248 13.0903 7.73291C13.0903 8.49288 12.8893 9.12154 12.5264 9.55816C12.1656 9.99244 11.6367 10.2465 10.9573 10.2465C10.0428 10.2465 9.28114 9.68787 9.05006 8.88492C9.02002 8.73268 8.99201 8.57481 8.99201 8.40557V7.24243C8.99201 7.0908 9.03367 6.92127 9.07903 6.76834ZM24.4903 11.1663V11.2732H24.5972H25.9229H26.0298V11.1663V7.55073C26.0298 7.35069 26.0588 7.16239 26.0889 6.99609C26.2639 6.11247 26.8973 5.49956 27.7818 5.49956C27.9585 5.49956 28.0884 5.51303 28.2175 5.53943L28.3459 5.56566V5.43466V4.27152V4.18639L28.2629 4.16731C28.1334 4.13752 28.0187 4.12255 27.858 4.12255C27.0167 4.12255 26.2551 4.60057 25.8506 5.37383L25.8164 4.37996L25.8129 4.2767H25.7096H24.5363H24.4213L24.4296 4.39137C24.4751 5.01829 24.4903 5.70206 24.4903 6.4997V11.1663ZM30.2333 2.6542L30.1519 2.67422V2.75805V4.2767H29.116H29.0091V4.38363V5.32255V5.42949H29.116H30.1519V9.02217C30.1519 9.82501 30.288 10.4667 30.7012 10.8634C31.0474 11.2261 31.5815 11.4133 32.2245 11.4133C32.7502 11.4133 33.1756 11.3425 33.4508 11.2382L33.5249 11.2102L33.5197 11.1312L33.4587 10.2063L33.4503 10.0784L33.326 10.1096C33.1671 10.1495 32.9169 10.1905 32.5749 10.1905C32.2266 10.1905 32.0125 10.0811 31.8795 9.89246C31.7408 9.69569 31.6762 9.3938 31.6762 8.98013V5.42949H33.4892H33.5961V5.32255V4.38363V4.2767H33.4892H31.6762V2.43573V2.2993L31.5437 2.33189L30.2333 2.6542ZM34.3797 10.808L34.3489 10.8944L34.4295 10.938C34.9661 11.2283 35.7309 11.4133 36.5527 11.4133C37.4446 11.4133 38.1593 11.1995 38.6537 10.8221C39.1507 10.4427 39.4176 9.90323 39.4176 9.27442C39.4176 8.74325 39.2437 8.31652 38.8993 7.96624C38.5588 7.6199 38.0571 7.35392 37.4109 7.12749C36.93 6.95901 36.5947 6.8165 36.3793 6.6528C36.2734 6.57233 36.2 6.48914 36.1524 6.39841C36.1052 6.30813 36.0806 6.20473 36.0806 6.07929C36.0806 5.86048 36.1756 5.65956 36.3606 5.51105C36.5469 5.36153 36.83 5.26132 37.2079 5.26132C37.8705 5.26132 38.3854 5.47819 38.6627 5.63924L38.7722 5.70286L38.8166 5.58421L39.1518 4.68733L39.1843 4.60041L39.1028 4.556C38.6751 4.32289 38.0022 4.12255 37.2384 4.12255C35.615 4.12255 34.5868 5.04884 34.5868 6.21943C34.5868 7.1026 35.2696 7.80129 36.6103 8.24075C37.1026 8.40797 37.4278 8.56703 37.6298 8.74798C37.8249 8.92269 37.9085 9.1208 37.9085 9.38653C37.9085 9.63507 37.8085 9.85547 37.5997 10.0166C37.3881 10.1798 37.0558 10.2886 36.5832 10.2886C35.9352 10.2886 35.2531 10.0433 34.8707 9.81339L34.7588 9.74609L34.7149 9.86908L34.3797 10.808Z"
                fill="#075178"
                stroke="#075178"
                stroke-width="0.213874"
              />
              <path
                d="M18.8134 3.36071C17.9481 3.50395 17.3264 3.8425 16.6598 4.51962C15.8587 5.33997 15.4805 6.22542 15.4805 7.32574C15.4741 9.10967 16.5188 10.6332 18.1724 11.2452C18.698 11.4405 19.8838 11.4861 20.4157 11.3298C21.6912 10.9587 22.7808 9.89747 23.1782 8.64741C23.3 8.25677 23.3384 7.98983 23.3448 7.4885C23.3513 6.70722 23.2615 6.29053 22.941 5.6004C22.1976 4.01178 20.467 3.07424 18.8134 3.36071ZM20.3965 3.8425C20.7234 3.9597 20.9349 4.18757 21.108 4.61728C21.2169 4.88422 21.2426 5.11209 21.1592 5.11209C21.1336 5.11209 20.9413 5.26184 20.7426 5.44414L20.3773 5.77619L20.0504 5.70457C19.6594 5.61993 19.0249 5.61342 18.6852 5.69806C18.4481 5.75014 18.416 5.73712 18.0571 5.45716C17.852 5.29439 17.6853 5.15116 17.6853 5.14465C17.6853 5.01443 18.2237 3.99225 18.3327 3.90761C18.416 3.8425 18.4416 3.80995 18.3904 3.82297C18.0507 3.94016 18.0058 3.94667 18.0058 3.88157C18.0058 3.8425 18.0571 3.80344 18.1212 3.80344C18.1789 3.79693 18.3711 3.78391 18.5378 3.7774C18.7044 3.77088 18.8647 3.73833 18.8903 3.71229C18.9672 3.63416 20.0696 3.73182 20.3965 3.8425ZM20.858 3.87506C20.9541 3.91412 21.0182 3.9597 20.999 3.97923C20.9605 4.01829 20.5696 3.82948 20.5696 3.77088C20.5696 3.75135 20.5952 3.75135 20.6273 3.77088C20.6529 3.79042 20.7618 3.83599 20.858 3.87506ZM22.0117 5.53529C22.4603 5.78921 22.5693 5.88036 22.6783 6.10823C22.9667 6.72024 23.0051 7.51455 22.7808 8.17864C22.6847 8.45209 22.6526 8.49115 22.4411 8.52371C22.3129 8.54975 22.0309 8.63439 21.813 8.70601L21.422 8.84924L21.1849 8.5823C20.6978 8.02889 20.7042 8.04191 20.7362 7.51455C20.7554 7.2411 20.7298 6.79837 20.6785 6.49236L20.5888 5.95849L20.9798 5.6004C21.1977 5.40507 21.3964 5.24882 21.422 5.24231C21.4541 5.24231 21.7169 5.37252 22.0117 5.53529ZM18.2301 6.71373C18.243 7.1825 18.2878 7.59267 18.3455 7.74893L18.4352 8.00936L17.993 8.51069L17.5507 9.01201L17.2623 8.88831C17.1085 8.81669 16.8329 8.74507 16.6598 8.71903C16.4355 8.68647 16.3073 8.63439 16.2368 8.53673C16.0766 8.30234 15.942 7.7294 15.9356 7.22807C15.9292 6.80488 15.9548 6.70071 16.1471 6.30355C16.365 5.87385 16.3842 5.85431 16.9034 5.58737L17.4354 5.31392L17.8263 5.61993L18.2173 5.93244L18.2301 6.71373ZM16.0766 6.05615C15.8843 6.38819 15.8458 6.23845 16.0253 5.88036C16.1214 5.69806 16.1791 5.63946 16.1919 5.70457C16.2048 5.76316 16.1535 5.91942 16.0766 6.05615ZM22.8 5.79572C22.9282 6.07568 22.8834 6.20589 22.7488 5.95849C22.6142 5.70457 22.5949 5.63295 22.6719 5.63295C22.7039 5.63295 22.7616 5.70457 22.8 5.79572ZM20.8195 8.57579C21.2682 9.03805 21.2746 9.05759 21.0118 9.86491C20.8324 10.4379 20.7362 10.5681 20.3901 10.7308C20.1465 10.8415 19.9671 10.8676 19.4159 10.8676C18.7108 10.8676 18.5314 10.8155 18.3135 10.555C18.1724 10.3858 17.8135 9.46125 17.8135 9.27895C17.8135 9.20082 17.9866 8.94039 18.2109 8.69299L18.6019 8.24375L19.0249 8.2177C19.2556 8.20468 19.6658 8.19166 19.935 8.18515L20.4286 8.17213L20.8195 8.57579ZM22.941 8.69299C22.8257 8.90784 22.7936 8.79716 22.8898 8.52371C22.9539 8.32839 22.9795 8.30885 22.9923 8.41954C23.0051 8.49115 22.9795 8.62137 22.941 8.69299ZM16.0125 8.58881C16.1535 8.8232 16.1855 8.95341 16.0894 8.95341C16.0573 8.95341 15.9997 8.87529 15.9676 8.77111C15.9356 8.67345 15.8843 8.54324 15.8587 8.47813C15.7817 8.29583 15.8715 8.35443 16.0125 8.58881ZM21.0118 10.7699C21.1208 10.8415 20.576 11.0629 20.4029 11.0238C20.3132 10.9978 20.3516 10.9587 20.5696 10.8545C20.9093 10.6983 20.8964 10.6983 21.0118 10.7699ZM18.3006 10.8415C18.4224 10.8871 18.4545 10.9327 18.4096 10.9782C18.3455 11.0434 17.8776 10.9001 17.8776 10.8155C17.8776 10.7569 18.1148 10.7699 18.3006 10.8415Z"
                fill="#075178"
              />
              <path
                d="M44.3386 11.2811H44.4455V11.1742V4.30248V4.19554H44.3386H42.9736H42.8667V4.30248V11.1742V11.2811H42.9736H44.3386ZM46.502 11.1742V11.2811H46.609H47.9739H48.0808V11.1742V7.04264C48.0808 6.83778 48.111 6.63942 48.1664 6.50002L48.1665 6.50008L48.1684 6.49445C48.387 5.84066 49.0454 5.28967 49.8972 5.28967C50.5122 5.28967 50.9123 5.50822 51.1627 5.84623C51.417 6.1897 51.5275 6.67114 51.5275 7.21302V11.1742V11.2811H51.6344H52.9994H53.1063V11.1742V7.07104C53.1063 5.86574 52.6924 5.10208 52.1307 4.64212C51.573 4.18552 50.8834 4.03936 50.347 4.03936C49.2109 4.03936 48.3703 4.55961 47.9223 5.15749L47.8634 4.29519L47.8566 4.19554H47.7568H46.5469H46.4309L46.4403 4.31121C46.4865 4.87506 46.502 5.45396 46.502 6.16238V11.1742Z"
                fill="#93B44B"
                stroke="#90B748"
                stroke-width="0.213874"
              />
              <path
                d="M44.7907 2.13339C44.7906 1.80798 44.6803 1.51786 44.4819 1.30886C44.2833 1.0996 43.9979 0.973266 43.6511 0.973266C42.9765 0.973266 42.4908 1.48033 42.4908 2.13383C42.4908 2.76605 42.9552 3.27379 43.6099 3.27379C43.9768 3.27379 44.2775 3.14783 44.484 2.94127C44.6904 2.73482 44.8011 2.44938 44.7907 2.13339Z"
                fill="#93B44B"
                stroke="#90B748"
                stroke-width="0.0534684"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraineeCard;
