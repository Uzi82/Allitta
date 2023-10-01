import React from 'react'
import { Flex, Select, Subtitle, Title, FormWrapper, CreateLinkWrapper, CreateLink } from './styled'
import { Input } from '../../../UI/Input'
import { onError, onSubmit, useProfileForm } from '../models/utils'
import { Button } from '../../../UI/Button'

export const CreateProfile: React.FC = () => {
    const { handleSubmit, registerInput } = useProfileForm()

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit, onError)} autoComplete='off' $gap='20px' $maxWidth='644px' >
            <Title $mb='10px'>Your Profile</Title>
            <CreateLinkWrapper $mb='10px' >
                <CreateLink $active to='/signup/customer'>Create Account</CreateLink>
                <CreateLink to='/signup'>Create Profile</CreateLink>
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
                <Input placeholder='Mobile Number' type='tel' {...registerInput('phone')} />
            </Flex>
            <Subtitle >Home Address</Subtitle>
            <Input placeholder='Street Address' {...registerInput('address')} />
            <Flex $mb='20px'>
                <Input placeholder='City' type='text'{...registerInput('city')} />
                <Input placeholder='Zip Code' type='number'{...registerInput('zip')} />
            </Flex>
            <Button type='submit' /*onClick={() => navigate('/signup/customer/photo')}*/ br='10px'>Continue</Button>
        </FormWrapper>
    )
}