import { FormProps } from "./types";
import { FaPhone } from "react-icons/fa6";
import { HiLockClosed } from "react-icons/hi";

export const formData: FormProps[] = [
  { icon: <FaPhone />, placeholder: "Phone Number", type: "tel" },
  { icon: <HiLockClosed />, placeholder: "Password", type: "password" },
];

