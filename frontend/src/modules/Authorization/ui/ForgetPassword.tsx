import React from 'react'
import { FormStyled, Img, Subtitle, Title } from './styled'
import { Input } from '../../../UI/Input'
import { Button } from '../../../UI/Button'
import { onError, onSubmit, useForgetPasswordForm } from '../models/utils'

const ForgetPassword: React.FC = () => {
    const { handleSubmit, registerInput } = useForgetPasswordForm()

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit, onError)} $maxwidth='388px' >
            <Title $mb='20px'>Email Address</Title>
            <Img src="/svg/forgetemail.svg" alt='forget email' $mb='40px' />
            <Subtitle $mb='20px'>First, tell us what is your email address</Subtitle>
            <Input $mb='20px' placeholder='email address' {...registerInput('email')} />
            <Button br={'10px'} mb={'30px'}>Continue</Button>
        </FormStyled>
    )
}

export { ForgetPassword }