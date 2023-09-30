export type Props = {

}
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