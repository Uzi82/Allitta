import { FieldError } from "react-hook-form"
export type FormWrapperStyles = {
    $maxWidth?: string
    $gap?: string
}
export type MarginBottom = {
    $mb?: string
}
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
export type FormErrors<T> = {
    [key: string]: FieldError | T;
};