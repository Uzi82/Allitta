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
    $gap?: string
}

export interface ICreateCustomer {
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
export interface ICreateShoper {
    email: string,
    password: string,
    confirmPassword: string,
}