import React from 'react'
import { Flex, Select, Subtitle, Title, FormWrapper } from './styled'
import { Input } from '../../../UI/Input'
import { CustomLink } from '../../../UI/CustomLink'
import { useForm } from 'react-hook-form'
import { BackLink } from '../../../UI/BackLink'

interface ICreateCustomer {
    firstName: string,
    lastName: string,
    fullName: string,
    date: typeof Date,
    gender: 'not-specified' | 'male' | 'female' | 'own-gender',
    nic: number,
    tel: number,
    address: string,
    city: string,
    zip: number,
}

export const CreateCustomerAccount: React.FC = () => {
    const { } = useForm<ICreateCustomer>({
        defaultValues: {}
    })
    return (
        <FormWrapper $gap='20px'>
            <Title $mb='10px'>Your Profile</Title>
            <Subtitle >Your Informations</Subtitle>
            <Flex >
                <Input placeholder='First Name' type='text' />
                <Input placeholder='Last Name' type='text' />
            </Flex>
            <Input placeholder='Full Name' type='text' />
            <Flex >
                <Input placeholder='Birthday (DD/MM/YYYY)' type='date' />
                <Select placeholder='Gender' >
                    <option value="not-specified">Not Specified</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="own-gender">Own Gender</option>
                </Select>
            </Flex>
            <Flex $mb='10px'>
                <Input placeholder='NIC Number' type='number' />
                <Input placeholder='Mobile Number' type='tel' />
            </Flex>
            <Subtitle >Home Address</Subtitle>
            <Input placeholder='Street Address' />
            <Flex $mb='20px'>
                <Input placeholder='City' type='text' />
                <Input placeholder='Zip Code' type='number' />
            </Flex>
            <CustomLink to='/signup/customer/photo'>Continue</CustomLink>
            <BackLink $left='10px' $top='10px' />
        </FormWrapper>
    )
}