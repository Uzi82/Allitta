import React from 'react'
import { FormStyled, Subtitle, Title } from './styled'
import { Input } from '../../../UI/Input'
import { ForgetVector } from '../../../UI/ForgetVector'
import { Button } from '../../ProductCard'


const ForgetPassword: React.FC = () => {
    return (
        <FormStyled $maxwidth='388px'>
            <Title $mb='20px'>Email Address</Title>
            <ForgetVector mb='20px' />
            <Subtitle $mb='20px'>First, tell us what is your email address</Subtitle>
            <Input placeholder='email address' />
            <Button br={'10px'} mb={'30px'}>Continue</Button>
        </FormStyled>
    )
}

export { ForgetPassword }