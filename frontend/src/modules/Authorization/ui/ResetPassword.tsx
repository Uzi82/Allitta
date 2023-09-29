import React from 'react'
import { FormStyled, Subtitle, Title } from './styled'
import { Input } from '../../../UI/Input'
import { Button } from '../../../UI/Button'
import { onError, onSubmit, useResetPasswordForm } from '../models/utils'

const ResetPassword: React.FC = () => {
    const { handleSubmit, registerInput } = useResetPasswordForm()

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