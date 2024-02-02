import Navbar from "./Navbar";
import youngwoman from "../../assets/img/youngwoman.png";
import ValueCard from "./ValueCard";
import { features, howItWorksData, socialIcons, values } from "./data";
import FeatureCard from "./FeatureCard";
import padlock from "../../assets/icons/Lock.svg";
import woman from "../../assets/img/woman.png";
import HowItWorksCard from "./HowItWorksCard";
import yieldlogo from "../../assets/icons/yieldlogo.svg";
import leftBig from "../../assets/icons/left_big.png";
import leftSmall from "../../assets/icons/left_small.png";
import rightBig from "../../assets/icons/right_big.png";
import rightSmall from "../../assets/icons/right_small.svg";
import woman2 from "../../assets/img/woman_fantastic.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const SmallStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="44"
      viewBox="0 0 45 44"
      fill="none"
      className="absolute top-[5.81rem] left-[18.37rem] w-8 sm:w-auto"
    >
      <path
        d="M22.6452 0.0292969L26.4852 17.9116L44.3676 21.7516L26.4852 25.5917L22.6452 43.474L18.8052 25.5917L0.922852 21.7516L18.8052 17.9116L22.6452 0.0292969Z"
        fill="#34B4F7"
      />
    </svg>
  );
};

const BigStar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="91"
      height="91"
      viewBox="0 0 91 91"
      fill="none"
      className="absolute right-[15.72rem] top-[15.69rem] w-12 md:w-auto"
    >
      <path
        d="M45.4512 0.964844L53.4093 38.0245L90.469 45.9826L53.4093 53.9407L45.4512 91.0004L37.4931 53.9407L0.433411 45.9826L37.4931 38.0245L45.4512 0.964844Z"
        fill="#077DBB"
      />
    </svg>
  );
};

const Landing = () => {
  return (
    <>
      <div className=" p-4 md:px-28 md:py-10 flex flex-col gap-12 relative">
        <Navbar />
        <section className="flex flex-col gap-20">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col gap-4 items-start">
              <h1 className=" text-slate-700 text-5xl font-bold">
                Grow your <span className=" text-primary"><br/>money</span> today
              </h1>
              <p className=" text-slate-600 text-base font-medium tracking-normal">
                Get the opportunity to unlock earnings <br/>as you save
              </p>
              <Button variant="contained" className=" w-100% p-4 rounded-md bg-primary">
                Start Investing
              </Button>
            </div>
            <div className="pt-16 w-auto bg-var rounded-3xl">
              <img
                src={youngwoman}
                alt="Woman Picture"
                className="hidden md:flex"
              />
              <img src={woman2} alt="Smiling woman" className="md:hidden" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center justify-between w-full">
            {/* mapping */}
            {values.map((item) => (
              <ValueCard
                key={item.title}
                mainBg={item.mainBg}
                smallBg={item.smallBg}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <h1 className=" text-neutral-800 text-center text-4xl  font-medium leading-10 tracking-tighter m-auto md:text-5xl lg:px-80 md:my-20 md:mx-2">
            Feel the best experience with our features
          </h1>
          {/* flex flex-col md:flex-row justify-between gap-6 */}
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {features.map((data) => (
              <FeatureCard
                key={data.bigTitle}
                icon={data.icon}
                bigTitle={data.bigTitle}
                content={data.content}
                smallTitle={data.smallTitle}
                smallText={data.smallText}
                image={data.image}
                smallTitleColor={data.smallTitleColor}
                smallTextColor={data.smallTextColor}
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center px-6 py-8 rounded-3xl bg-neutral-50 justify-between md:px-12 h-96 md:h-96 relative overflow-hidden">
            <div className="flex flex-col gap-8 items-start w-auto md:w-2/5">
              <div className="rounded-full bg-primary flex items-center justify-center w-14 h-14 md:w-18 md:h-18">
                <img
                  src={padlock}
                  alt="padlock"
                  className="w-6 h-6 md:w-auto md:h-auto"
                />
              </div>
              <div className="flex flex-col">
                <span className=" text-primary text-2xl md:text-4xl font-semibold">
                  Guaranteed Returns
                </span>
                <span className=" text-neutral text-xs md:text-base font-normal">
                  With Fixed Savings, you can enjoy the peace of mind that comes
                  with guaranteed returns. Your deposited funds are protected.
                </span>
              </div>
            </div>

            <div className="w-full md:w-5/12 bg-neutral-200 flex justify-center border border-neutral-50 rounded-2xl absolute top-64 md:right-12 md:top-16 h-4/5 md:h-80">
              <div className="w-11/12 flex items-center justify-center bg-neutral-50 border border-natural-200 p-6 absolute -top-8 rounded-2xl">
                <img src={woman} alt="woman" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-medium leading-3.25 tracking-tighter text-center text-neutral-800">
              How it works
            </h1>
            <p className="text-lg text-center text-neutral">
              It’s very easy
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            {howItWorksData.map((data) => (
              <HowItWorksCard
                icon={data.icon}
                title={data.title}
                content={data.content}
              />
            ))}
          </div>
        </section>
        <section className="flex flex-col overflow-hidden relative items-center justify-center px-5 py-20 md:py-32 bg-gradient-to-b from-[#077DBB] to-[#07608F] rounded-3xl">
          <div className="flex flex-col items-center w-full md:w-2/5 gap-8 relative ">
            <span className="text-white text-center text-4xl md:text-5xl font-bold">
              Start Saving Today!
            </span>
            <span className="text-white text-sm md:text-lg font-normal text-center">
              Fixed Saving Solution designed to help you grow your savings
              effortlessly.
            </span>
            <Button variant="contained" className="w-full md:w-auto text-white  px-5 py-2.5 rounded-md">
              Get Started
            </Button>
          </div>
          <SmallStar />
          <BigStar />
          <img src={leftBig} alt="" className="absolute bottom-0 left-0 w-16" />
          <img
            src={leftSmall}
            alt=""
            className="absolute bottom-0 left-48 w-12"
          />
          <img src={rightBig} alt="" className="absolute top-0 right-0 w-20" />
          <img
            src={rightSmall}
            alt=""
            className="absolute top-0 right-48"
          />
        </section>
      </div>
      <footer className=" bg-neutral-900 flex px-28 py-16 flex-col items-start gap-16">
        <div className="flex w-full flex-col md:flex-row items-start justify-between gap-6">
          <div className="flex flex-col w-full sm:w-1/3">
            <img
              src={yieldlogo}
              alt="Yield Cdl"
              className="w-24 h-10"
            />
            <p className=" text-neutral-200 text-sm sm:text-base font-normal leading-6">
              Fixed savings plans tailored to your financial goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-2/5 items-start justify-between text-neutral-300 text-base leading-6 self-stretch gap-6">
            <div className="text-base font-normal flex flex-col gap-2 w-full sm:w-2/4 leading-6 self-stretch">
              <p className="text-neutral-100 font-medium">Company</p>
              <p>About</p>
              <p>Legal</p>
              <p>Privacy Policy</p>
            </div>

            <div className="text-neutral-300 w-full sm:w-2/4 text-base flex flex-col gap-2 font-normal leading-6 self-stretch">
              <span className=" text-neutral-100 font-medium"> Contact Us</span>
              <p>Phone: 01-4482225</p>
              <p>
                Address: 48/50 Isaac John Street, GRA, Ikeja, Lagos, Nigeria.
              </p>
              <p>Whatsapp: 09070309430</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center border-t w-full pt-7 gap-4 justify-between">
          <div className="flex gap-4 mr-auto sm:m-0">
            {socialIcons.map((url) => (
              <Link to={url.url} key={url.url}>
                <img src={url.path} className="w-6 h-6" />
              </Link>
            ))}
          </div>
          <span className=" text-neutral-400 text-sm font-normal">
            Copyright © Credit Direct Limited. Authorized and regulated by the
            CBN.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Landing;
