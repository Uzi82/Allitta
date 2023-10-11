import React from 'react'
import { FormStyled, Subtitle, Title } from './styled'
import { Input } from '../../../UI/Input'
import { Button } from '../../../UI/Button'
import { onError, useResetPasswordForm } from '../models/utils'
import { SubmitHandler } from 'react-hook-form'
import { IResetPassword, SignInContext } from '../models/types'
import axios from 'axios'
import { useOutletContext } from 'react-router-dom'

const ResetPassword: React.FC = () => {
    const { handleSubmit, registerInput } = useResetPasswordForm()
    const { email, isShoper, setIsSuccess } = useOutletContext<SignInContext>()

    const onSubmit: SubmitHandler<IResetPassword> = async (data) => {
        try {
            await axios.post(`http://localhost/api/users/${isShoper ? 'merchant' : 'customer'}/login`, { params: { email, password: data.password } });
            setIsSuccess(2)
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <FormStyled onSubmit={handleSubmit(onSubmit, onError)} $maxwidth='388px'>
            <Title $mb='20px'>Re-Set Password</Title>
            <Subtitle $mb='20px'>Create your new Password and confirm it.</Subtitle>
            <Input placeholder='password' type='password' {...registerInput('password')} $mb='20px' />
            <Input placeholder='confirm password' type='password' {...registerInput('confirm password')} $mb='20px' />
            <Button br={'10px'} mb={'20px'}>Save Password</Button>
        </FormStyled>
    )
}

export { ResetPassword }