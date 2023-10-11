export type Props = {
    children?: string | JSX.Element | JSX.Element[],
    type: 'email' | 'password',
    success?: boolean
}
export type MarginBottom = {
    $mb?: string
}
export type FormLinkStyles = {
    $justify?: string,
    $mb?: string
    width?: string,
}

export interface ISignInPopup {
    type: 'email' | 'password'
}

export interface ISignUpPopup {
    isVerifyPassed: 1 | 2
    setIsVerifyPassed: React.Dispatch<React.SetStateAction<0 | 1 | 2>>
}
