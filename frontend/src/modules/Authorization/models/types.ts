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

export interface ISignIn {
    email: string,
    password: string
}