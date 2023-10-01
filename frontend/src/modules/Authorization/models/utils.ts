import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { IForgetPassword, IResetPassword, ISignIn, IVerification } from "./types"
import { ToastOptions, toast } from 'react-toastify';
import { FieldErrors } from "react-hook-form";

// <--- Validation Input objects  ---> //
const validateInput = (which: keyof ISignIn | keyof IVerification) => {
    if (which === 'password') return { required: 'required', minLength: 4, maxLength: 30, }
    if (which === 'email') return { required: 'required', pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/ }
    if (which === 'verification') return { required: 'required', maxLength: 6, minLength: 6 }
}
export const hasError = <T extends FieldErrors>(field: string, errors: T): FieldErrors => ({ error: errors[field as string] });
// </--- Validation Input objects ---/> //

// <--- onSubmit onError  ---> //
export const onSubmit: SubmitHandler<ISignIn | IForgetPassword | IVerification | IResetPassword> = (data) => {
    console.log('success', data);
}
export const onError: SubmitErrorHandler<ISignIn | IForgetPassword | IVerification | IResetPassword> = (data) => {
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
        const typeOfError = data[key as keyof FieldErrors<ISignIn | IForgetPassword | IVerification | IResetPassword>]?.type
        if (typeOfError === 'required') {
            toast.error(`${key} is required`, toastOptions)
        } else if (typeOfError === 'minLength') {
            toast.error(`${key} is too short`, toastOptions)
        } else if (typeOfError === 'maxLength') {
            toast.error(`${key} is too long`, toastOptions)
        } else if (typeOfError === 'pattern') {
            toast.error(`${key} is invalid`, toastOptions)
        } else if (typeOfError === 'validate') {
            toast.error(`password should match`, toastOptions)
        }
        break;
    }
}
// </--- onSubmit onError  ---/> //

// <--- HOOKS ---> //
export const useSignInForm = () => {
    const { register, formState: { errors }, ...rest } = useForm<ISignIn>({ mode: 'onChange', })

    const registerInput = (name: keyof ISignIn,) => ({
        ...hasError(name, errors),
        ...register(name, validateInput(name)),
    })

    return { registerInput, ...rest }
}
export const useResetPasswordForm = () => {
    const { register, watch, formState: { errors }, ...rest } = useForm<IResetPassword>({ mode: 'onChange', })

    const password = watch('password')
    const confirmPassword = watch('confirm password')

    const validateConfirmPassword = () => ({
        required: 'required',
        minLength: 4,
        maxLength: 30,
        validate: () => confirmPassword === password
    })
    function registerInput(name: keyof IResetPassword,) {
        if (name === 'confirm password') {
            return {
                ...hasError(name, errors),
                ...register(name, validateConfirmPassword()),
            }
        }
        return {
            ...hasError(name, errors),
            ...register(name, validateInput(name)),
        }
    }
    return { registerInput, ...rest }
}
export const useForgetPasswordForm = () => {
    const { register, formState: { errors }, ...rest } = useForm<IForgetPassword>({ mode: 'onChange', })

    const registerInput = (name: keyof IForgetPassword,) => ({
        ...hasError(name, errors),
        ...register(name, validateInput(name)),
    })

    return { registerInput, ...rest }
}
export const useVerificationForm = () => {
    const { register, formState: { errors }, ...rest } = useForm<IVerification>({ mode: 'onChange', })

    const registerInput = (name: keyof IVerification) => ({
        ...hasError(name, errors),
        ...register(name, validateInput(name)),
    })

    return { registerInput, ...rest }
}
// </--- HOOKS  ---/> //
