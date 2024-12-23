import { useEffect, useState } from "react";
import server from "../../assets/axios/server";
import AcademyCard from "../../components/academy/AcademyCard";
import AcademyFilters from "../../components/academy/AcademyFilters";
import AcademySwiper from "../../components/academy/AcademySwiper";
import "./academy.css";
import { useSelector } from "react-redux";
import { ar, en } from "../../assets/langs/translation";
import { useSearchParams } from "react-router-dom";

const Academy = () => {
  const [academias, setAcademias] = useState([]);
  const [sliders, setSliders] = useState([]);
  const [filters, setfilters] = useState({ country: "all", type: "all" });
  const [searchParams] = useSearchParams();

  useEffect(()=>{
    searchParams.get("type") && setfilters((prev) => ({ ...prev, type :searchParams.get("type") }));
  },[searchParams])

  // get data form backend
  useEffect(() => {
    server
      .get("/academias-api")
      .then((data) => {
        setSliders(data.data.sliders);

        // filter logic
        if (filters.country === "all" && filters.type === "all") {
          setAcademias(data.data.academias);
          return;
        }

        const filteredAcademias = data.data.academias.filter((academia) => {
          const matchesCountry =
            filters.country === "all" || academia.country === filters.country;
          const matchesType =
            filters.type === "all" || academia.type === filters.type;

          // Include academia if it matches both filters
          return matchesCountry && matchesType;
        });

        setAcademias(filteredAcademias);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [server, filters]);

  // to set lang
  const { lang } = useSelector((state) => state.settings);
  const currentLang = lang === "en" ? en : ar;

  return (
    <div className="container mx-auto lg:max-w-[1140px] flex flex-col items-center justify-center px-[5px] sm:px-0 mb-[50px]">
      {/* swiper */}
      <AcademySwiper slides={sliders} />

       {/* join now section */}
       <div className="flex w-full max-w-[1060px]  items-center justify-between bg-[#0751781A] border border-[#0751784D] rounded-[12px] p-[12px] mt-[20px] ">
        <h2 className="font-[Cairo] text-[clamp(10px,0.625vw,12px)] font-[700] leading-[clamp(15px,1.1458333333333333vw,22px)] text-[#075178] ">
          {currentLang.joinInstitutions}
        </h2>
        <a
          href={"https://wa.me/4915252455276"}
          target="_blank"
          className="font-[Cairo] text-[clamp(10px,0.625vw,12px)] text-nowrap font-[400] leading-[clamp(15px,1.1458333333333333vw,22px)] text-[#fff] rounded-[8px] bg-[#075178] py-[clamp(5px,0.46875vw,9px)] px-[clamp(10px,2.604166666666667vw,50px)] "
        >
          {currentLang.joinNow}
        </a>
      </div>

      {/* filters section */}
      <AcademyFilters setfilters={setfilters} filters={filters} />

      {/* cards */}
      <div className="w-full flex flex-wrap gap-[clamp(5px,1.0416666666666665vw,20px)] items-stretch justify-center sm:justify-start mt-[20px] ">
        {academias.length === 0 ? (
          <div className="w-full  min-h-[500px] font-[cairo] font-extrabold text-[#0000009f] text-[25px] flex items-center justify-center">
            {currentLang.noInstitutions}
          </div>
        ) : (
          academias.map((cardData, index) => {
            return <AcademyCard key={index} cardData={cardData} />;
          })
        )}
      </div>
    </div>
  );
};

export default Academy;
