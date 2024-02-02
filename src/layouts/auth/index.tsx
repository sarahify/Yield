import { ReactNode, useEffect, useState } from "react";
import signInImg from "../../assets/img/signIn-Img.png";
import logo from "../../assets/icons/Logo.svg";
import bigNaira from "../../assets/icons/big-naira.svg";
import smallNaira from "../../assets/icons/small-naira.svg";
import { slidingTexts } from "./data";
import { Link } from "react-router-dom";

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex === slidingTexts.length - 1
        ? setCurrentIndex(0)
        : setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);
  return (
    <div className=" flex bg-neutral-100 h-screen w-screen">
      <div className="w-2/4 h-screen hidden justify-center items-center relative md:flex">
        <Link to="/">
          <img
            src={logo}
            alt="company logo"
            className="w-20 h-10 absolute top-[3.8%] left-[8.1%]"
          />
        </Link>
        <div className="w-4/6 pb-8 gap-2 flex flex-col rounded-lg bg-white bg-opacity-90 backdrop-blur-14 relative">
          <img src={signInImg} alt="" className="rounded-lg" />
          <div className="flex flex-col items-center gap-2 py-0 px-4">
            <span className="text-primary text-s text-center font-bold text-lg leading-8 tracking-tight">
              {slidingTexts?.[currentIndex]?.title}
            </span>
            <p className="text-neutral-500 text-center font-medium text-sm leading-5 h-12">
              {slidingTexts?.[currentIndex]?.content}
            </p>
          </div>
          <div className="flex align-center justify-center gap-2">
            <span
              style={{
                background: `${currentIndex === 0 ? "#077DBB" : "#9CA3AF"}`,
                cursor: `${currentIndex === 0 ? "not-allowed" : "pointer"}`,
              }}
              className={`rounded-full w-2 h-2`}
              onClick={() => setCurrentIndex(0)}
            ></span>
            <span
              style={{
                background: `${currentIndex === 1 ? "#077DBB" : "#9CA3AF"}`,
                cursor: `${currentIndex === 1 ? "not-allowed" : "pointer"}`,
              }}
              className={`rounded-full w-2 h-2`}
              onClick={() => setCurrentIndex(1)}
            ></span>
            <span
              style={{
                background: `${currentIndex === 2 ? "#077DBB" : "#9CA3AF"}`,
                cursor: `${currentIndex === 2 ? "not-allowed" : "pointer"}`,
              }}
              className={`rounded-full w-2 h-2`}
              onClick={() => setCurrentIndex(2)}
            ></span>
          </div>
          <img
            src={smallNaira}
            alt="naira sign"
            className="absolute left-[70%] top-[-4rem] z-99"
          />
          <img
            src={bigNaira}
            alt="naira sign"
            className="absolute top-[-3rem] right-[-3rem]"
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
