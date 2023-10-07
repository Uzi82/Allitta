import React from 'react'
import { Flex, Select, Subtitle, Title, FormWrapper, CreateLinkWrapper, CreateLink } from './styled'
import { Input } from '../../../UI/Input'
import { onError, useProfileForm } from '../models/utils'
import { Button } from '../../../UI/Button'
import { useOutletContext } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'
import { ICreateProfile } from '../models/types'
import axios from 'axios'

export const CreateProfile: React.FC = () => {
    const { handleSubmit, registerInput } = useProfileForm()
    const onSubmit: SubmitHandler<ICreateProfile> = async (data) => {
        try {
            const response = await axios.post('http://api.localhost/api/users/customer/register', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const a = useOutletContext()
    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit, onError)} autoComplete='off' $gap='20px' $maxWidth='644px' >
            <Title $mb='10px'>Your Profile</Title>
            <Subtitle >Your Informations</Subtitle>
            <Flex >
                <Input placeholder='First name' type='text' {...registerInput('first_name')} />
                <Input placeholder='Last name' type='text' {...registerInput('last_name')} />
            </Flex>
            <Input placeholder='Full name' type='text' {...registerInput('full_name')} />
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