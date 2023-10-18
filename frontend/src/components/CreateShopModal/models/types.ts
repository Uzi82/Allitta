import { FieldError } from "react-hook-form"

// <--- Form  ---> //
export interface ICreateShop {
    name: string,
    category: string,
    regnumber: number,
    email: string,
    phone_number: string,
    street: string,
    city: string,
    zip_code: number,
    logo: FileList | undefined,
    banner: FileList | undefined
}

export interface IFormInput {
    file: FileList
}

export type FormErrors<T> = {
    [key: string]: FieldError | T;
};

// </--- Form  ---/> //
export type AccountContext = {
    email: string | undefined,
    setEmail: React.Dispatch<React.SetStateAction<string | undefined>>,
    password: string | undefined,
    setPassword: React.Dispatch<React.SetStateAction<string | undefined>>,
    isShoper: boolean | undefined,
    setIsShoper: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    isVerifyPassed: 0 | 1 | 2,
    setIsVerifyPassed: React.Dispatch<React.SetStateAction<0 | 1 | 2>>,
}