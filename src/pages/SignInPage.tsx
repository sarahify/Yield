import { useState } from "react";
import SignIn from "../components/SignIn";
import { FormValuesProps } from "../components/SignIn/types";
import SuccessComponent from "../components/SuccessComponent";
import axios from "axios";


const baseURL = "https://40.113.169.208:8443/fineract-provider/api/v1/self/authentication/client"
const SignInPage = () => {
  const [loginValues, setLoginValues] = useState<FormValuesProps>({
    tel: "",
    password: "",
  });
  const[loading, setLoading] =useState<boolean>(false);
  
  const [successful, setSuccessful] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
        await axios.post(baseURL, {
          password:loginValues.password,
          username:loginValues.tel,
        })
        .then(res=>console.log(res))

      setLoading(false);
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
          loading={loading}
        />
      )}
    </>
  );
};

export default SignInPage;
