import React from 'react'
import { Flex, Select, Subtitle, Title, FormWrapper, CreateLinkWrapper, CreateLink } from './styled'
import { Input } from '../../../UI/Input'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { BackLink } from '../../../UI/BackLink'
import { onError, onSubmit, validateAddress, validateCity, validateDate, validateName, validateNic, validateTel, validateZIP } from '../models/utils'
import { Button } from '../../../UI/Button'
import { ICreateCustomer } from '../models/types'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CreateCustomerAccount: React.FC = () => {
    const { register, handleSubmit, formState: { errors, } } = useForm<ICreateCustomer>({
        mode: 'onChange',
    })

    const hasError = (where: keyof ICreateCustomer) => {
        return { error: errors[where]?.type, }
    }

    return (
        <>
            <FormWrapper autoComplete='off' $gap='20px' onSubmit={handleSubmit(onSubmit, onError)}>
                <Title $mb='10px'>Your Profile</Title>
                <CreateLinkWrapper $mb='10px' >
                    <CreateLink active to='/signup/customer'>Customer Account</CreateLink>
                    <CreateLink to='/signup'>Shopper Account</CreateLink>
                </CreateLinkWrapper>
                <Subtitle >Your Informations</Subtitle>
                <Flex >
                    <Input placeholder='First Name' type='text' {...register('first name', validateName(),)}{...hasError('first name')} />
                    <Input placeholder='Last Name' type='text' {...register('last name', validateName())}{...hasError('last name')} />
                </Flex>
                <Input placeholder='Full Name' type='text' {...register('full name', validateName())}{...hasError('full name')} />
                <Flex >
                    <Input placeholder='Birthday (DD/MM/YYYY)' type='date' {...register('date', validateDate())} {...hasError('date')} />
                    <Select placeholder='Gender'{...register('gender')} >
                        <option value="not-specified">Not Specified</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="own-gender">Own Gender</option>
                    </Select>
                </Flex>
                <Flex $mb='10px'>
                    <Input placeholder='NIC Number' type='number' {...register('nic', validateNic())} {...hasError('nic')} />
                    <Input placeholder='Mobile Number' type='tel' {...register('tel', validateTel())} {...hasError('tel')} />
                </Flex>
                <Subtitle >Home Address</Subtitle>
                <Input placeholder='Street Address' {...register('address', validateAddress())} {...hasError('address')} />
                <Flex $mb='20px'>
                    <Input placeholder='City' type='text'{...register('city', validateCity())} {...hasError('city')} />
                    <Input placeholder='Zip Code' type='number'{...register('zip', validateZIP())} {...hasError('zip')} />
                </Flex>
                <Button type='submit' /*onClick={() => navigate('/signup/customer/photo')}*/ br='10px'>Continue</Button>
                <BackLink $left='10px' $top='10px' />
            </FormWrapper>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                limit={2}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="dark"
            />
        </>

    )
}

// возможно понадобится. это если нам нужно чтобы валидация происходила разными функциями, которые можно вынести в отдельный файл (либо использовать функции из других библиотек)
// и использовать как на фронте так и на беке
// function validateRegistration(values: ICreateCustomer) {
//     const errors = {
//         'first name': validateName(values.first name),
//         ...
//         'last name': '',
//         'full name': '',
//         date: '',
//         gender: '',
//         nic: '',
//         tel: '',
//         address: '',
//         city: '',
//         zip: '',
//     }

//     const invalid = Object.values(errors).some(Boolean)
//     return invalid ? errors : {}
// }
// function validateName(value: string) {
//     if (value.length < 3) {
//         return 'Name must be at least 3 characters long'
//     }
// }