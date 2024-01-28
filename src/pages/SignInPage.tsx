import { useState } from "react";
import SignIn from "../components/SignIn";
import { FormValuesProps } from "../components/SignIn/types";
import SuccessComponent from "../components/SuccessComponent";

const SignInPage = () => {
  const [loginValues, setLoginValues] = useState<FormValuesProps>({
    tel: "",
    password: "",
  });
  const [successful, setSuccessful] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setSuccessful(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {successful ? (
        <SuccessComponent />
      ) : (
        <SignIn
          onChange={handleChange}
          formValues={loginValues}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default SignInPage;
