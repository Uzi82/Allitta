import { FieldError } from "react-hook-form"

export type MarginBottom = {
    $mb?: string
}
export type CreateLinkStyles = {
    $mb?: string
    active?: boolean
}
export type FormWrapperStyles = {
    $maxWidth?: string
    $gap?: string
}

// <--- Form  ---> //
export interface ICreateProfile {
    'first name': string,
    'last name': string,
    'full name': string,
    date: typeof Date,
    gender: 'not-specified' | 'male' | 'female' | 'own-gender',
    nic: number,
    tel: number,
    address: string,
    city: string,
    zip: number,
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
