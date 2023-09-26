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
    for (let key in data) {
        console.log(key);
        data[key as keyof FieldErrors<ICreateCustomer>]?.type === 'required' && toast.error(`${key} is required`);
    }
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
    data.firstName && toast.error('first name is required', toastOptions);
    data.lastName && toast.error('last name is required', toastOptions);
    data.fullName && toast.error('full name is required', toastOptions);
    data.date && toast.error('date is required', toastOptions);
    data.nic && toast.error('nic is required', toastOptions);
    data.tel && toast.error('tel is required', toastOptions);
    data.city && toast.error('city is required', toastOptions);
    data.zip && toast.error('zip is required', toastOptions);
    data.address && toast.error('address is required', toastOptions);
}