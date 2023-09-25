import React from 'react'
import { FormStyled, FormLink, Subtitle, Title } from './styled'
import { Input } from '../../../UI/Input'
import { Link } from 'react-router-dom'
import { Button } from '../../../UI/Button'
import { CustomLink } from '../../../UI/CustomLink'

const SignIn: React.FC = () => {
    return (
        <FormStyled $maxwidth='388px'>
            <Title $mb='20px'>Sign In</Title>
            <Subtitle $mb='20px'>Sign in with your email address and password</Subtitle>
            <Input placeholder='email address' $mb='20px' />
            <Input placeholder='password' type='password' $mb='10px' />
            <FormLink $mb='20px' $justify='end' ><Link to='/'>Forget password?</Link></FormLink>
            <Button br={'10px'} mb={'20px'} >Sign In</Button>
            <CustomLink $transparent to='/signup' >Create Account</CustomLink>
        </FormStyled>
    )
}

export { SignIn }