import React from 'react'
import { Flex, Select, Subtitle, Title, FormWrapper } from './styled'
import { Input } from '../../../UI/Input'
import { onError, useProfileForm } from '../models/utils'
import { Button } from '../../../UI/Button'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'
import { AccountContext, ICreateProfile } from '../models/types'
import axios from 'axios'

export const CreateProfile: React.FC = () => {
    const { handleSubmit, registerInput } = useProfileForm()
    const { email, password, isShoper } = useOutletContext<AccountContext>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<ICreateProfile> = async (data) => {
        try {
            await axios.get('http://api.localhost/sanctum/csrf-cookie');
            const response = await axios.post('http://api.localhost/api/users/customer/register', { params: { email, password, ...data } });
            if (response.status === 200) navigate('/signup/profile/photo')
        } catch (error) {
            console.error('Error:', error);
        }
    };
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
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                </Select>
            </Flex>
            <Flex $mb='10px'>
                {isShoper && <Input placeholder='NIC Number' type='number' {...registerInput('nic')} />}
                <Input placeholder='Mobile Number' type='tel' {...registerInput('phone')} />
            </Flex>
            <Subtitle >Home Address</Subtitle>
            <Input placeholder='Street Address' {...registerInput('address')} />
            <Flex $mb='20px'>
                <Input placeholder='City' type='text'{...registerInput('city')} />
                <Input placeholder='Zip Code' {...registerInput('zip')} />
            </Flex>
            <Button type='submit' br='10px'>Continue</Button>
        </FormWrapper>
    )
}