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
    date: typeof Date,
    gender: 'not-specified' | 'male' | 'female' | 'own-gender',
    nic: number,
    phone: string,
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
