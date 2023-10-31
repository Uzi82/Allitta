export type infoAxios = {
    name: string,
    full_name: string,
    nic: number,
    birthday: string,
    gender: 1 | 2,
    phone_number: number,
    street: string,
    city: string,
    zip_code: number
}

export type info = {
    [key: string]: string | number,
    name: string,
    full_name: string,
    nic: number,
    birthday: string,
    gender: string,
    phone_number: string,
    street: string,
    city: string,
    zip_code: number
}