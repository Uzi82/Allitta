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
