import { DeepMap, FieldError, FieldValues, SubmitErrorHandler, useForm } from "react-hook-form"
import { ICreateShop, FormErrors } from "./types"
import { ToastOptions, toast } from 'react-toastify';
import { FieldErrors } from "react-hook-form";
import React from "react";


// <--- Validation Functions  ---> //
const validateInput = (which: keyof ICreateShop) => {
    if (which === 'name') return { required: 'required', minLength: 2, maxLength: 25 }
    if (which === 'email') return { required: 'required', pattern: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/ }
    if (which === 'street') return { required: 'required', minLength: 4, maxLength: 100, }
    if (which === 'phone_number') return { required: 'required', maxLength: 17, minLength: 17, }
    if (which === 'city') return { required: 'required', maxLength: 25 }
    if (which === 'zip_code') return { required: 'required', maxLength: 50 }
    return
}
const hasError = <T extends FieldValues>(field: string, errors: DeepMap<T, FieldError>): FormErrors<T> => ({ error: errors[field as string] });
// </--- Validation Functions  ---/> //


// <--- onError  ---> //
export const onError: SubmitErrorHandler<ICreateShop> = (data) => {
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
    if(Object.keys(data).length === 0) toast.error(`Not all required inputs fulled`, toastOptions)
    for (let key in data) {
        const typeOfError = data[key as keyof FieldErrors<ICreateShop>]?.type
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
// </--- onError  ---/> //

export const useShopForm = () => {
    const { register, formState: { errors }, watch, setValue, ...rest } = useForm<ICreateShop>({ mode: 'onBlur' })

    const registerInput = (name: keyof ICreateShop) => ({
        ...hasError(name, errors),
        ...register(name, validateInput(name)),
    })

    const telInput = watch('phone_number')
    const mainInputs = [watch('name'), watch('category'), watch('email'), watch('phone_number'), watch('street'), watch('city'), watch('zip_code')]

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

    const checkMainInputs = () => {
        for(let el of mainInputs) {
            if(el === '') return true 
        }
    }

    return { registerInput, watch, checkMainInputs, formState: { errors }, setValue, ...rest }
}
// </--- HOOKS  ---/> //
