import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { IForgetPassword, ISignIn, IVerification } from "./types"
import { ToastOptions, toast } from 'react-toastify';
import { FieldErrors } from "react-hook-form";

// <---SignIn Validation Functions  ---> //

export const validatePassword = () => ({
    required: 'required',
    minLength: 4,
    maxLength: 30,
})
export const validateEmail = () => ({
    required: 'required',
    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
})
export const validateVerification = () => ({
    required: 'required',
    maxLength: 6,
    minLength: 6
})
export const validateInput = (which: keyof ISignIn | keyof IVerification) => {
    if (which === 'password') return validatePassword()
    if (which === 'email') return validateEmail()
    if (which === 'verification') return validateVerification()
}
// </---SignIn Validation Functions  ---/> //

// <--- onSubmit onError  ---> //
export const onSubmit: SubmitHandler<ISignIn | IForgetPassword | IVerification> = (data) => {
    console.log('success', data);
}
export const onError: SubmitErrorHandler<ISignIn | IForgetPassword | IVerification> = (data) => {
    const toastOptions: ToastOptions = {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    }
    for (let key in data) {
        const typeOfError = data[key as keyof FieldErrors<ISignIn | IForgetPassword | IVerification>]?.type
        if (typeOfError === 'required') {
            toast.error(`${key} is required`, toastOptions)
        } else if (typeOfError === 'minLength') {
            toast.error(`${key} is too short`, toastOptions)
        } else if (typeOfError === 'maxLength') {
            toast.error(`${key} is too long`, toastOptions)
        } else if (typeOfError === 'pattern') {
            toast.error(`${key} is invalid`, toastOptions)
        }
        break;
    }
}
// </--- onSubmit onError  ---/> //

// <--- HOOKS ---> //
export const useSignInForm = () => {
    const { register, formState: { errors }, ...rest } = useForm<ISignIn>({
        mode: 'onChange',
    })
    const hasError = (where: keyof ISignIn) => ({ error: errors[where]?.type, })

    const registerInput = (name: keyof ISignIn,) => ({
        ...hasError(name),
        ...register(name, validateInput(name)),
    })

    return { registerInput, ...rest }
}
export const useForgetPasswordForm = () => {
    const { register, formState: { errors }, ...rest } = useForm<IForgetPassword>({
        mode: 'onChange',
    })
    const hasError = (where: keyof IForgetPassword) => ({ error: errors[where]?.type, })

    const registerInput = (name: keyof IForgetPassword,) => ({
        ...hasError(name),
        ...register(name, validateInput(name)),
    })

    return { registerInput, ...rest }
}
export const useVerificationForm = () => {
    const { register, formState: { errors }, ...rest } = useForm<IVerification>({
        mode: 'onChange',
    })
    const hasError = (where: keyof IVerification) => ({ error: errors[where]?.type, })

    const registerInput = (name: keyof IVerification) => ({
        ...hasError(name),
        ...register(name, validateInput(name)),
    })

    return { registerInput, ...rest }
}
// </--- HOOKS  ---/> //
