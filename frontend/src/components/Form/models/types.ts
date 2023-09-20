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
export type TitleStyles = {
    $mb?: string
}
export type SubtitleStyles = {
    $mb?: string
}
export type VerifyingActionsStyles = {
    $mb?: string
}
export type FormLinkStyles = {
    $justify?: string,
    $mb?: string
    width?: string,
} 