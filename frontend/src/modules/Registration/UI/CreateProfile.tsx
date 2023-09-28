import React from 'react'
import { Flex, Select, Subtitle, Title, FormWrapper, CreateLinkWrapper, CreateLink } from './styled'
import { Input } from '../../../UI/Input'
import { BackLink } from '../../../UI/BackLink'
import { onError, onSubmit, useProfileForm } from '../models/utils'
import { Button } from '../../../UI/Button'
import 'react-toastify/dist/ReactToastify.css';

export const CreateProfile: React.FC = () => {
    const { handleSubmit, registerInput } = useProfileForm()

    return (
        <FormWrapper autoComplete='off' $gap='20px' onSubmit={handleSubmit(onSubmit, onError)}>
            <Title $mb='10px'>Your Profile</Title>
            <CreateLinkWrapper $mb='10px' >
                <CreateLink active to='/signup/customer'>Customer Account</CreateLink>
                <CreateLink to='/signup'>Shopper Account</CreateLink>
            </CreateLinkWrapper>
            <Subtitle >Your Informations</Subtitle>
            <Flex >
                <Input placeholder='First Name' type='text' {...registerInput('first name')} />
                <Input placeholder='Last Name' type='text' {...registerInput('last name')} />
            </Flex>
            <Input placeholder='Full Name' type='text' {...registerInput('full name')} />
            <Flex >
                <Input placeholder='Birthday (DD/MM/YYYY)' type='date' {...registerInput('date')} />
                <Select placeholder='Gender'{...registerInput('gender')} >
                    <option value="not-specified">Not Specified</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="own-gender">Own Gender</option>
                </Select>
            </Flex>
            <Flex $mb='10px'>
                <Input placeholder='NIC Number' type='number' {...registerInput('nic')} />
                <Input placeholder='Mobile Number' type='tel' {...registerInput('tel')} />
            </Flex>
            <Subtitle >Home Address</Subtitle>
            <Input placeholder='Street Address' {...registerInput('address')} />
            <Flex $mb='20px'>
                <Input placeholder='City' type='text'{...registerInput('city')} />
                <Input placeholder='Zip Code' type='number'{...registerInput('zip')} />
            </Flex>
            <Button type='submit' /*onClick={() => navigate('/signup/customer/photo')}*/ br='10px'>Continue</Button>
            <BackLink $left='10px' $top='10px' />
        </FormWrapper>
    )
}

// возможно понадобится. это если нам нужно чтобы валидация происходила разными функциями, которые можно вынести в отдельный файл (либо использовать функции из других библиотек)
// и использовать как на фронте так и на беке
// function validateRegistration(values: ICreateProfile) {
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