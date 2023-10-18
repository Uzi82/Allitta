import React, { useEffect } from 'react'
import { Flex, Select, Subtitle, Title, FormWrapper } from './styled'
import { Input } from '../../../UI/Input'
import { onError, useProfileForm } from '../models/utils'
import { Button } from '../../../UI/Button'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'
import { type AccountContext, type ICreateProfile, type IUser } from '../'
import { useMutation } from 'react-query'
import { createUser } from '../models/createUser'
import { toast } from 'react-toastify'
import { AxiosResponse } from 'axios'

export const CreateProfile: React.FC = () => {
    const { handleSubmit, registerInput } = useProfileForm()
    const { email, password, isShoper } = useOutletContext<AccountContext>()
    const navigate = useNavigate()
    const createUserQuery = useMutation((data: { user: IUser, isShoper: boolean }) => createUser(data))
    const onSubmit: SubmitHandler<ICreateProfile> = async (data) => {
        await createUserQuery.mutateAsync({ 
            user: { ...data,
                    email: email,
                    password: password
            }, 
            isShoper: isShoper
        }).then(
            (res: AxiosResponse<{ jwt_token: string, token_type: string, expires_in: number }>) => {
                if(res.data?.jwt_token !== undefined && res.data?.expires_in !== undefined) {
                    document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`
                    console.log(document.cookie)
                    document.cookie = `token=${res.data.jwt_token}; max-age=${res.data.expires_in}`
                    navigate('/signup/profile/photo')
                }
                else console.log(res, 'else')
                return
            },
            err => {
                toast(err?.request?.response?.split(':')[1].replace(/[^(\w\s\d-)]/g, ''))
            }
        )
    };
    useEffect(()=>{
        if(email === '' || password === '') navigate('/signup')
    })
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
                <Input placeholder='Birthday (DD/MM/YYYY)' type='date' {...registerInput('birthday')} />
                <Select placeholder='Gender'{...registerInput('gender')} >
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                </Select>
            </Flex>
            <Flex $mb='10px'>
                <Input placeholder='Mobile Number' type='tel' {...registerInput('phone_number')} />
            </Flex>
            <Subtitle >Home Address</Subtitle>
            <Input placeholder='Street Address' {...registerInput('street')} />
            <Flex $mb='20px'>
                <Input placeholder='City' type='text'{...registerInput('city')} />
                <Input placeholder='Zip Code' {...registerInput('zip_code')} />
            </Flex>
            <Button type='submit' br='10px'>Continue</Button>
        </FormWrapper>
    )
}