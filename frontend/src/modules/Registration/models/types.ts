import { FieldError } from "react-hook-form"

export type MarginBottom = {
    $mb?: string
}
export type CreateLinkStyles = {
    $mb?: string
    $active?: boolean | undefined
}
export type FormWrapperStyles = {
    $maxWidth?: string
    $gap?: string
}

// <--- Form  ---> //
export interface ICreateProfile {
    first_name: string,
    last_name: string,
    full_name: string,
    birthday: typeof Date,
    gender: 1 | 2,
    phone_number: string,
    street: string,
    city: string,
    zip_code: number,
}
export interface ICreateAccount {
    email: string,
    password: string,
    'confirm password': string,
}
export interface IVerification {
    verification: number,
}
export interface IFormInput {
    file: FileList
}
export type FormErrors<T> = {
    [key: string]: FieldError | T;
};
// </--- Form  ---/> //
export type AccountContext = {
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    isShoper: boolean,
    setIsShoper: React.Dispatch<React.SetStateAction<boolean>>,
    isVerifyPassed: 0 | 1 | 2,
    setIsVerifyPassed: React.Dispatch<React.SetStateAction<0 | 1 | 2>>,
}

// </--- Axios ---/> //
export interface IUser {
    first_name: string,
    last_name: string,
    full_name: string,
    birthday: typeof Date,
    gender: 1 | 2,
    phone_number: string,
    street: string,
    city: string,
    zip_code: number,
    email: string,
    password: string
} 