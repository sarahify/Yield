import { Link } from "react-router-dom";
import logo from "../../assets/icons/Logo.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { Button } from "@mui/material";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <nav className="flex items-center justify-between relative">
      <Link to="/">
        <img src={logo} alt="Yield Logo" />
      </Link>
      {show ? (
        <IoCloseOutline
          className="flex md:hidden"
          onClick={() => setShow(!show)}
        />
      ) : (
        <HiOutlineMenuAlt3
          className="flex md:hidden"
          onClick={() => setShow(!show)}
        />
      )}

      <div className="hidden md:flex">
          <Button variant="text" className="py-2.5 border border-slate-300 w-auto rounded-md text-neutral" href="/login">
            SIGN IN
          </Button>

        <Button variant="contained" className="py-2.5 px-2 bg-primary w-100% rounded-md">
          GET STARTED
        </Button>   
      </div>
      {
        show?
        <div className="flex md:hidden bg-white flex-col w-100 absolute h-screen z-50 top-16 gap-2 w-screen">
          <Button variant="text" className="py-2.5 border border-slate-300 w-auto rounded-md text-neutral" href="/login">
            SIGN IN
          </Button>

          <Button variant="contained" className="py-2.5 px-2 bg-primary w-100% rounded-md">
          GET STARTED
          </Button>
        </div>:null
      }
    </nav>
  );
};

export default Navbar;

