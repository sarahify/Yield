import { Link } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <nav className="flex items-center justify-between relative">
      <Link to="/">
        <img src={logo} alt="Yield Logo" />
      </Link>
      {show ? (
        <IoCloseOutline
          className="flex sm:hidden"
          onClick={() => setShow(!show)}
        />
      ) : (
        <HiOutlineMenuAlt3
          className="flex sm:hidden"
          onClick={() => setShow(!show)}
        />
      )}

      <div
        className={`${
          show ? "flex" : "hidden"
        } border border-white items-center gap-[12px] absolute w-full z-50 bg-white top-full flex-col h-screen left-0 p-6 sm:p-0 sm:flex sm:relative sm:w-fit sm:flex-row sm:h-auto`}
      >
        <Link to="/login" className="w-full sm:w-auto">
          <button className="py-2.5 border border-slate-300 w-full sm:w-auto rounded-md sm:border-0">
            SIGN IN
          </button>
        </Link>
        <button className="py-2.5 sm:p-2 bg-[#077DBB] w-full text-white rounded-md sm:w-auto">
          GET STARTED
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
