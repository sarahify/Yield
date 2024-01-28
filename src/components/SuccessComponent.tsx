import logo from "../assets/icons/credit_direct_logo.svg";
import successful from "../assets/img/successful.gif";

const SuccessComponent = () => {
  return (
    <div className="flex items-center flex-col justify-center w-screen h-screen bg-[#fff] fixed">
      <img
        src={logo}
        alt="credit direct logo"
        className="absolute top-[5.1%] left-[7.8%]"
      />
      <div className="flex flex-col items-center">
        <img src={successful} alt="successful gif" />
        <span className="text-neutral-700 text-center text-xl font-extrabold leading-8 tracking-tighter">
          Sign In Successful
        </span>
        <span className="text-gray-600 text-center text-sm font-normal leading-5">
          OTP Verification Confirmed{" "}
        </span>
      </div>
    </div>
  );
};

export default SuccessComponent;
