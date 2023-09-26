import { SubmitErrorHandler, SubmitHandler } from "react-hook-form"
import { ICreateCustomer, ICreateShoper } from "./types"
import { ToastOptions, toast } from 'react-toastify';
import { FieldErrors } from "react-hook-form";

// <--- Shoper ---> //
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

// </--- Customer ---/> //

// <--- Shoper ---> //
export const validatePassword = () => ({
    required: 'required',
    minLength: 4,
    maxLength: 30,
})
export const validateConfirmPassword = () => ({
    required: 'required',
    minLength: 4,
    maxLength: 30,
})
export const validateEmail = () => ({
    required: 'required',
    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
})
// </--- Shoper ---/> //
export const onSubmit: SubmitHandler<ICreateCustomer> = (data) => {
    console.log('success', data);
}

export const onError: SubmitErrorHandler<ICreateCustomer> = (data) => {
    const toastOptions: ToastOptions = {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    }
    for (let key in data) {
        const typeOfError = data[key as keyof FieldErrors<ICreateCustomer>]?.type
        key = key.toLowerCase()
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