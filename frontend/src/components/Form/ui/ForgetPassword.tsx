import React from 'react'
import { FormStyled, Img, Subtitle, Title } from './styled'
import { Input } from '../../../UI/Input'
import { Button } from '../../../UI/Button'

const ForgetPassword: React.FC = () => {
    return (
        <FormStyled $maxwidth='388px'>
            <Title $mb='20px'>Email Address</Title>
            <Img src="/svg/forgetemail.svg" alt='forget email' $mb='40px' />
            <Subtitle $mb='20px'>First, tell us what is your email address</Subtitle>
            <Input $mb='20px' placeholder='email address' />
            <Button br={'10px'} mb={'30px'}>Continue</Button>
        </FormStyled>
    )
}

export { ForgetPassword }