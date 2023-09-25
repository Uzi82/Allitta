import React from 'react'
import { CreateLink, CreateLinkWrapper, FormWrapper, Title } from './styled'
import { Input } from '../../../UI/Input'
import { CustomLink } from '../../../UI/CustomLink'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { ICreateShoper } from '../models/types'
import { validateEmail, validatePassword } from '../models/utils'
import { Button } from '../../../UI/Button'


export const CreateShoperAccount: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<ICreateShoper>({
        mode: 'onChange',
    })
    const password = watch('password')
    const confirmPassword = watch('confirmPassword')

    const onSubmit: SubmitHandler<ICreateShoper> = (data) => {
        console.log('success', data);
    }
    const onError: SubmitErrorHandler<ICreateShoper> = (data) => {
        console.log(data);
    }

    const confirmPasswordValidation = () => {
        if (confirmPassword === '') {
            return 'required'
        }
        if (confirmPassword === password) {
            return '';
        }
        return 'Passwords do not match';
    };


    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)} $gap='20px'>
            <Title $mb='10px'>Create Account</Title>
            <CreateLinkWrapper $mb='10px' >
                <CreateLink to='/signup/customer'>Customer Account</CreateLink>
                <CreateLink active to='/signup'>Shopper Account</CreateLink>
            </CreateLinkWrapper>
            <Input placeholder='Email Address' type='email' {...register('email', validateEmail())} error={errors.email?.type} />
            <Input placeholder='Create Password' type='password' {...register('password', validatePassword())} error={errors.password?.type} />
            <Input placeholder='Confirm Password' type='password' {...register('confirmPassword', validatePassword())} error={confirmPasswordValidation()} />
            <Button type='submit' /*onClick={() => navigate('/signup/verify')}*/ br='10px'>Continue</Button>
        </FormWrapper>
    )
}