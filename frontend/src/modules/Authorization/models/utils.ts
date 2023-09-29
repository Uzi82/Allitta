import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { ISignIn } from "./types"
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
// </---SignIn Validation Functions  ---/> //

// <--- onSubmit onError  ---> //
export const onSubmit: SubmitHandler<ISignIn> = (data) => {
    console.log('success', data);
}
export const onError: SubmitErrorHandler<ISignIn> = (data) => {
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
        const typeOfError = data[key as keyof FieldErrors<ISignIn>]?.type
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

export const validateInput = (which: keyof ISignIn) => {
    if (which === 'password') return validatePassword()
}

// <--- HOOKS ---> //
export const useSignInForm = () => {
    const { register, formState: { errors }, ...rest } = useForm<ISignIn>({
        mode: 'onChange',
    })
    const hasError = (where: keyof ISignIn) => ({ error: errors[where]?.type, })

    function registerInput(name: keyof ISignIn,) {
        return {
            ...hasError(name),
            ...register(name, validateInput(name)),
        }
    }
    return {
        registerInput,
        ...rest
    }
}
// </--- HOOKS  ---/> //
