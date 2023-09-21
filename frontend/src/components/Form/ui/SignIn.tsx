import React from 'react'
import { FormStyled, FormLink, Subtitle, Title } from './styled'
import { Input } from '../../../UI/Input'
import { Button } from '../'
import { Link } from 'react-router-dom'

const SignIn: React.FC = () => {
    return (
        <FormStyled $maxwidth='388px'>
            <Title $mb='20px'>Sign In</Title>
            <Subtitle $mb='20px'>Sign in with your email address and password</Subtitle>
            <Input placeholder='email address' />
            <Input placeholder='password' type='password' mb='10px' />
            <FormLink $mb='20px' $justify='end' ><Link to='/'>Forget password?</Link></FormLink>
            <Button br={'10px'} mb={'20px'} >Sign In</Button>
            <FormLink ><Link to='/'>Create Account</Link></FormLink>
        </FormStyled>
    )
}

export { SignIn }