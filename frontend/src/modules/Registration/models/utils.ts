import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { ICreateProfile, ICreateAccount, IVerification } from "./types"
import { ToastOptions, toast } from 'react-toastify';
import { FieldErrors } from "react-hook-form";

// <--- Profile Validation Functions ---> //
export const validateName = () => ({
    required: 'required',
    minLength: 2,
    maxLength: 20,
})
export const validateDate = () => ({
    required: 'required',
})
export const validateNic = () => ({
    required: 'required',
    maxLength: 13,
    minLength: 7,
})
export const validateAddress = () => ({
    required: 'required',
    minLength: 4,
    maxLength: 60,
})
export const validateTel = () => ({
    required: 'required',
    pattern: /^\+(?:[0-9] ?){6,14}[0-9]$/
})
export const validateCity = () => ({
    required: 'required',
    pattern: /^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$/
})
export const validateZIP = () => ({
    required: 'required',
    pattern: /^\d{5}$/
})
// </--- Profile Validation Functions ---/> //

// <--- Account Validation Functions  ---> //
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
// </--- Account Validation Functions  ---/> //
export const validateInput = (which: keyof ICreateAccount | keyof ICreateProfile | keyof IVerification) => {
    if (which === 'first name' || which === 'last name' || which === 'full name') return validateName()
    if (which === 'date') return validateDate()
    if (which === 'nic') return validateNic()
    if (which === 'address') return validateAddress()
    if (which === 'tel') return validateTel()
    if (which === 'city') return validateCity()
    if (which === 'zip') return validateZIP()
    if (which === 'email') return validateEmail()
    if (which === 'password') return validatePassword()
    if (which === 'verification') return validateVerification()
}

// <--- onSubmit onError  ---> //
export const onSubmit: SubmitHandler<ICreateProfile | ICreateAccount | IVerification> = (data) => {
    console.log('success', data);
}
export const onError: SubmitErrorHandler<ICreateProfile | ICreateAccount | IVerification> = (data) => {
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
        const typeOfError = data[key as keyof FieldErrors<ICreateProfile | ICreateAccount>]?.type
        if (typeOfError === 'required') {
            toast.error(`${key} is required`, toastOptions)
        } else if (typeOfError === 'minLength') {
            toast.error(`${key} is too short`, toastOptions)
        } else if (typeOfError === 'maxLength') {
            toast.error(`${key} is too long`, toastOptions)
        } else if (typeOfError === 'pattern') {
            toast.error(`${key} is invalid`, toastOptions)
        } else if (typeOfError === 'validate') {
            toast.error(`passwords should match`, toastOptions)
        }
        break;
    }
}
// </--- onSubmit onError  ---/> //
// <--- HOOKS ---> //
export const useAccountForm = () => {
    const { register, watch, formState: { errors }, ...rest } = useForm<ICreateAccount>({
        mode: 'onChange',
    })
    const hasError = (where: keyof ICreateAccount) => ({ error: errors[where]?.type, })

    const password = watch('password')
    const confirmPassword = watch('confirm password')

    const validateConfirmPassword = () => ({
        required: 'required',
        minLength: 4,
        maxLength: 30,
        validate: () => confirmPassword === password
    })
    function registerInput(name: keyof ICreateAccount,) {
        if (name === 'confirm password') {
            return {
                ...hasError(name),
                ...register(name, validateConfirmPassword()),
            }
        }
        return {
            ...hasError(name),
            ...register(name, validateInput(name)),
        }
    }
    return { registerInput, ...rest }
}
export const useProfileForm = () => {
    const { register, formState: { errors }, ...rest } = useForm<ICreateProfile>({
        mode: 'onChange',
    })
    const hasError = (where: keyof ICreateProfile) => ({ error: errors[where]?.type, })

    const registerInput = (name: keyof ICreateProfile) => ({
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
