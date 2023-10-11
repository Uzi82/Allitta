import { FieldError } from "react-hook-form"

export type Props = {
    children?: string | JSX.Element | JSX.Element[],
    type: 'signIn' | 'reset' | 'forget' | 'verifying',
}
export type FormStyles = {
    width?: string,
    $maxwidth?: string,
    height?: string,
    $mb?: string
}
export type MarginBottom = {
    $mb?: string
}
export type FormLinkStyles = {
    $justify?: string,
    $mb?: string
    width?: string,
}
export type CreateLinkStyles = {
    $mb?: string
    $active?: boolean | undefined
}
// <--- Form  ---> //
export interface ISignIn {
    email: string,
    password: string
}
export interface IForgetPassword {
    email: string,
}
export interface IVerification {
    verification: number,
}
export interface IResetPassword {
    password: string,
    'confirm password': string,
}
export type FormErrors<T> = {
    [key: string]: FieldError | T;
};
// </--- Form  ---/> //
export type SignInContext = {
    email: string | undefined,
    setEmail: React.Dispatch<React.SetStateAction<string | undefined>>,
    password: string | undefined,
    setPassword: React.Dispatch<React.SetStateAction<string | undefined>>,
    isShoper: boolean | undefined,
    setIsShoper: React.Dispatch<React.SetStateAction<boolean | undefined>>,
    isSuccess: 0 | 1 | 2,
    setIsSuccess: React.Dispatch<React.SetStateAction<0 | 1 | 2>>,
}