import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { formData } from "./data";
import { SignInProps } from "./types";

const SignIn: React.FC<SignInProps> = ({ onChange, formValues,onSubmit }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F9FAFB] sm:w-[50vw] h-screen flex items-center justify-center w-full">
      <form
        onSubmit={onSubmit}
        className="sm:w-[45.6%] w-full p-8 sm:p-0 flex flex-col gap-[0.5rem]"
      >
        <GoArrowLeft
          className="w-[1.5rem] h-[1.5rem] cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div className="flex flex-col">
          <span className="text-neutral-700 font-extrabold text-lg leading-8 tracking-tight">
            Sign In
          </span>
          <span className="text-neutral-500 text-base leading-6">
            Enter Your Phone Number and Password to Continue
          </span>
        </div>
        {formData.map((data) => (
          <label
            key={data.placeholder}
            className="relative rounded-sm border border-neutral-300 bg-generic-white shadow-xs h-[3rem] overflow-hidden"
          >
            <input
              type={data.type}
              placeholder={data.placeholder}
              className="w-[100%] pl-[3rem] h-[100%] focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              onChange={onChange}
              value={formValues[data.type]}
              name={data.type}
              required
            />
            <i className="absolute left-[0.75rem] w-[1.25rem] h-[1.25rem] text-[#6B7280] top-[50%] mt-[-0.6rem]">
              {data.icon}
            </i>
          </label>
        ))}
        <button className="rounded-sm text-[#fff] bg-[#077DBB] w-[100%] py-2.5 px-6 text-center font-inter text-lg font-medium leading-7">
          Proceed
        </button>
        <Link
          to="/forgot-password"
          className="text-[#077DBB] font-feature-salt text-sm font-medium leading-5 underline ml-auto"
        >
          Forgot Password
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
