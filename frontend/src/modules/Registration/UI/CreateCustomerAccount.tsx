import React from 'react'
import { Flex, Select, Subtitle, Title, FormWrapper } from './styled'
import { Input } from '../../../UI/Input'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { BackLink } from '../../../UI/BackLink'
import { validateAddress, validateCity, validateDate, validateName, validateNic, validateTel, validateZIP } from '../models/utils'
import { Button } from '../../../UI/Button'
import { useNavigate } from 'react-router-dom'
import { ICreateCustomer } from '../models/types'



export const CreateCustomerAccount: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ICreateCustomer>({
        mode: 'onChange',
    })
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<ICreateCustomer> = (data) => {
        console.log('success', data);
    }
    const onError: SubmitErrorHandler<ICreateCustomer> = (data) => {
        console.log(data);
    }
    const hasError = (where: keyof ICreateCustomer) => {
        return { error: errors[where]?.type, }
    }
    return (
        <FormWrapper $gap='20px' onSubmit={handleSubmit(onSubmit, onError)}>
            <Title $mb='10px'>Your Profile</Title>
            <Subtitle >Your Informations</Subtitle>
            <Flex >
                <Input placeholder='First Name' type='text' {...register('firstName', validateName(),)}{...hasError('firstName')} />
                <Input placeholder='Last Name' type='text' {...register('lastName', validateName())}{...hasError('lastName')} />
            </Flex>
            <Input placeholder='Full Name' type='text' {...register('fullName', validateName())}{...hasError('fullName')} />
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
    )
}

// возможно понадобится. это если нам нужно чтобы валидация происходила разными функциями, которые можно вынести в отдельный файл (либо использовать функции из других библиотек)
// и использовать как на фронте так и на беке
// function validateRegistration(values: ICreateCustomer) {
//     const errors = {
//         firstName: validateName(values.firstName),
//         ...
//         lastName: '',
//         fullName: '',
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