import send from "../../assets/icons/send.svg";
import padlock from "../../assets/icons/padlock.svg";
import setting from "../../assets/icons/setting.svg";
import highInterest from "../../assets/icons/high_interest.svg";
import fixedTerm from "../../assets/icons/fixed_term.svg";
import man from "../../assets/icons/man.svg";
import flower from "../../assets/icons/flower.svg";
import avatar from "../../assets/icons/create_account.svg";
import fundAccount from "../../assets/icons/deposit.svg";
import createPlan from "../../assets/icons/create_a_plan.svg";
import withdraw from "../../assets/icons/Withdraw.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/insta.svg";
import linkedIn from "../../assets/icons/linkedIn.svg";

export const values: {
  mainBg: string;
  smallBg: string;
  icon: string;
  title: string;
  description: string;
}[] = [
  {
    mainBg: "rgba(7, 125, 187, 0.04)",
    smallBg: "rgba(7, 125, 187, 0.11)",
    icon: send,
    title: "Easy to use",
    description: "Effortless and User-friendly",
  },
  {
    mainBg: "#F0FDF4",
    smallBg: "#BBF7D0",
    icon: padlock,
    title: "Secured",
    description: "Bank-level protection",
  },
  {
    mainBg: "#FEF2F2",
    smallBg: "#FEE2E2",
    icon: setting,
    title: "Automated",
    description: "Smart, Smooth Savings Solution",
  },
];

export const features: {
  icon: string;
  bigTitle: string;
  content: string;
  smallTitle: string;
  smallText: string;
  image: string;
  smallTitleColor: string;
  smallTextColor: string;
}[] = [
  {
    icon: highInterest,
    bigTitle: "High Interest Rates",
    content:
      "Earn higher interest rates compared to traditional savings accounts with Fixed Savings. Our competitive rates ensure that your money grows faster, giving you more returns over time.",
    smallTitle: "Hi, Olawale",
    smallText: "Your savings has yielded 10%",
    image: man,
    smallTitleColor: "#077DBB",
    smallTextColor: "#04476B",
  },
  {
    icon: fixedTerm,
    bigTitle: "Fixed Term",
    content:
      "The plan comes with a specified duration and provides stability and predictability, allowing you to plan your finances with confidence. Your funds can be withdrawn at your convenience.",
    smallTitle: "Plan, Save, Grow",
    smallText: "Save with Confidence",
    image: flower,
    smallTitleColor: "#15803D",
    smallTextColor: "#15803D",
  },
];

export const howItWorksData: {
  icon: string;
  title: string;
  content: string;
}[] = [
  {
    icon: avatar,
    title: "Create Account",
    content: "Sign up in minutes to begin your savings journey.",
  },
  {
    icon: fundAccount,
    title: "Fund Account",
    content: "Add funds securely to your account for hassle-free transactions",
  },
  {
    icon: createPlan,
    title: "Create a Plan",
    content:
      "Start your fixed savings plan and watch your money grow with attractive interest rates!",
  },
  {
    icon: withdraw,
    title: "Withdraw",
    content: "Withdraw your funds after they have matured",
  },
];

export const socialIcons: { path: string; url: string }[] = [
  { path: facebook, url: "https://www.facebook.com" },
  { path: twitter, url: "https://www.twitter.com" },
  { path: instagram, url: "https://www.instagram.com" },
  { path: linkedIn, url: "https://www.linkedin.com" },
];
