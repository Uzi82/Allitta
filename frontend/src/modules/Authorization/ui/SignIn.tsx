import React from 'react'
import { FormStyled, FormLink, Subtitle, Title } from './styled'
import { Input } from '../../../UI/Input'
import { Link } from 'react-router-dom'
import { Button } from '../../../UI/Button'
import { CustomLink } from '../../../UI/CustomLink'
import { onError, onSubmit, useSignInForm } from '../models/utils'

const SignIn: React.FC = () => {
    const { handleSubmit, registerInput } = useSignInForm()

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit, onError)} $maxwidth='388px' autoComplete='off'>
            <Title $mb='20px'>Sign In</Title>
            <Subtitle $mb='20px'>Sign in with your email address and password</Subtitle>
            <Input placeholder='email address' $mb='20px' {...registerInput('email')} />
            <Input placeholder='password' type='password' $mb='10px' {...registerInput('password')} />
            <FormLink $mb='20px' $justify='end' ><Link to='/signin/verify'>Forget password?</Link></FormLink>
            <Button br={'10px'} mb={'20px'}>Sign In</Button>
            <CustomLink $transparent to='/signup'>Create Account</CustomLink>
        </FormStyled>
    )
}

export { SignIn }