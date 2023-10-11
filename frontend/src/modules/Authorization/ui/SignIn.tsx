import React from 'react'
import { FormStyled, FormLink, Subtitle, Title } from './styled'
import { Input } from '../../../UI/Input'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { Button } from '../../../UI/Button'
import { CustomLink } from '../../../UI/CustomLink'
import { onError, useSignInForm } from '../models/utils'
import { SubmitHandler } from 'react-hook-form'
import { ISignIn, SignInContext } from '../models/types'
import axios from 'axios'

const SignIn: React.FC = () => {
    const { isShoper } = useOutletContext<SignInContext>()
    const navigate = useNavigate()

    const { handleSubmit, registerInput } = useSignInForm()
    const onSubmit: SubmitHandler<ISignIn> = async (data) => {
        try {
            await axios.post(`http://localhost/api/users/${isShoper ? 'merchant' : 'customer'}/login`, { params: { email: data.email, password: data.password } });
            navigate('/')
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <FormStyled onSubmit={handleSubmit(onSubmit, onError)} $maxwidth='388px' autoComplete='off'>
            <Title $mb='20px'>Sign In</Title>
            <Subtitle $mb='20px'>Sign in with your email address and password</Subtitle>
            <Input placeholder='email address' $mb='20px' {...registerInput('email')} />
            <Input placeholder='password' type='password' $mb='10px' {...registerInput('password')} />
            <FormLink $mb='20px' $justify='end' ><Link to='/signin/forget'>Forget password?</Link></FormLink>
            <Button br={'10px'} mb={'20px'}>Sign In</Button>
            <CustomLink $transparent to='/signup'>Create Account</CustomLink>
        </FormStyled>
    )
}

export { SignIn }