import { ReactNode } from "react";

export interface FormProps {
  icon: ReactNode;
  placeholder: string;
  type: string;
}

export interface FormValuesProps {
  tel: string;
  password: string;
  [key: string]: any;
}

export interface SignInProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formValues: FormValuesProps;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  [key: string]: any;
}

export interface SliderProps {
  title: string;
  content: string;
}
