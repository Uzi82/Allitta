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
    firstName: string,
    lastName: string,
    fullName: string,
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