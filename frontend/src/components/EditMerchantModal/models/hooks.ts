import { useForm, FieldValues, FieldError, DeepMap, FieldErrors, SubmitErrorHandler } from "react-hook-form" 
import React from "react"
import { ICreateProfile, FormErrors } from '../'
import { ToastOptions, toast } from "react-toastify"

const validateInput = (which: keyof ICreateProfile) => {
    if (which === 'first_name' || which === 'last_name') return { required: 'required', minLength: 2, maxLength: 25 }
    if (which === 'full_name') return { required: 'required', minLength: 4, maxLength: 50 }
    if (which === 'street') return { required: 'required', minLength: 4, maxLength: 100, }
    if (which === 'phone_number') return { required: 'required', maxLength: 17, minLength: 17, }
    if (which === 'city') return { required: 'required', maxLength: 25 }
    if (which === 'zip_code') return { required: 'required', maxLength: 50 }
    return { required: 'required' }
}
const hasError = <T extends FieldValues>(field: string, errors: DeepMap<T, FieldError>): FormErrors<T> => ({ error: errors[field as string] });

export const onError: SubmitErrorHandler<ICreateProfile> = (data) => {
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
        const typeOfError = data[key as keyof FieldErrors<ICreateProfile>]?.type
        if (typeOfError === 'required') {
            toast.error(`${key.replace(/_/g, ' ')} is required`, toastOptions)
        } else if (typeOfError === 'minLength') {
            toast.error(`${key.replace(/_/g, ' ')} is too short`, toastOptions)
        } else if (typeOfError === 'maxLength') {
            toast.error(`${key.replace(/_/g, ' ')} is too long`, toastOptions)
        } else if (typeOfError === 'pattern') {
            toast.error(`${key.replace(/_/g, ' ')} is invalid`, toastOptions)
        } else if (typeOfError === 'validate') {
            toast.error(`passwords should match`, toastOptions)
        }
        break;
    }
}

export const useProfileForm = () => {
    const { register, formState: { errors }, watch, setValue, ...rest } = useForm<ICreateProfile>({ mode: 'onChange' })

    const registerInput = (name: keyof ICreateProfile) => ({
        ...hasError(name, errors),
        ...register(name, validateInput(name)),
    })

    const telInput = watch('phone_number')

    React.useEffect(() => {
        if (telInput) {
            let telValue = telInput.toString().replace(/\D/g, "");
            if (telValue.length) {
                telValue = "+" + telValue;
            }
            if (telValue.length >= 3) {
                telValue = telValue.slice(0, 2) + " (" + telValue.slice(2);
            }
            if (telValue.length >= 8) {
                telValue = telValue.slice(0, 7) + ") " + telValue.slice(7);
            }
            if (telValue.length >= 13) {
                telValue = telValue.slice(0, 12) + "-" + telValue.slice(12);
            }
            if (telValue.length >= 18) {
                telValue = telValue.slice(0, 17);
            }
            setValue('phone_number', telValue)
        }
    }, [telInput, setValue])

    return { registerInput, ...rest }
}