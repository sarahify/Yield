import { GoArrowLeft } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { formData } from "./data";
import { SignInProps } from "./types";
import { LoadingButton } from "@mui/lab";


const SignIn: React.FC<SignInProps> = ({ onChange, formValues,onSubmit,loading }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-50 md:w-1/2 h-screen flex items-center justify-center w-full">
      <form
        onSubmit={onSubmit}
        className="w-full px-8 md:px-44 flex flex-col gap-2"
      >
        <GoArrowLeft
          className="w-6 h-6 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div className="flex flex-col">
          <span className="text-neutral-700 font-extrabold text-lg leading-8 tracking-tight">
            Sign In
          </span>
          <h6 className="text-neutral text-base font-normal leading-6">
            Enter Your Phone Number and Password to Continue
          </h6>
        </div>
        <div className="flex flex-col gap-4 py-6">
        {formData.map((data) => (
          <label
            key={data.placeholder}
            className="relative bg-white shadow-xs h-12 overflow-hidden"
          >
            <input
              type={data.type}
              placeholder={data.placeholder}
              className="w-full pl-12 h-full rounded-md px-3 py-2.5 border focus:outline-none border-neutral-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              onChange={onChange}
              value={formValues[data.type]}
              name={data.type}
              required
            />
            <i className="absolute left-3 w-5 h-5 text-neutral top-2/4 -mt-2.5">
              {data.icon}
            </i>
          </label>
        ))}
        </div>
        <LoadingButton loading={loading} disabled={loading} variant="contained" type="submit" loadingPosition="end" className="rounded-1xl text-white bg-primary w-full py-2.5 px-6 text-center font-inter text-lg font-medium leading-7">
          Proceed
        </LoadingButton>
        

        <Link
          to="/forgot-password"
          className="text-primary font-feature-salt text-sm font-medium leading-5 underline ml-auto"
        >
          Forgot Password
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
