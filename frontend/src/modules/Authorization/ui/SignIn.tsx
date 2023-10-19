import React from 'react'
import { FormStyled, FormLink, Subtitle, Title, CreateLinkWrapper, CreateLink } from './styled'
import { Input } from '../../../UI/Input'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { Button } from '../../../UI/Button'
import { CustomLink } from '../../../UI/CustomLink'
import { onError, useSignInForm } from '../models/utils'
import { SubmitHandler } from 'react-hook-form'
import { ISignIn, SignInContext } from '../models/types'
import { useMutation } from 'react-query'
import { auth } from '../models/auth'

const SignIn: React.FC = () => {
    const { isShoper, setIsShoper, setEmail, setPassword } = useOutletContext<SignInContext>()
    const navigate = useNavigate()
    const authQuery = useMutation((data: { email: string, password: string, isShoper: boolean }) => auth(data))
    const { handleSubmit, registerInput } = useSignInForm()
    const onSubmit: SubmitHandler<ISignIn> = async (data) => {
        setEmail(data.email)
        setPassword(data.password)
        await authQuery.mutateAsync({ ...data, isShoper })
            .then(
                ()=>navigate(`/${isShoper?'shop':'user'}`),
                (err)=>console.log(err)
            )
    };
    return (
        <FormStyled onSubmit={handleSubmit(onSubmit, onError)} $maxwidth='388px' autoComplete='off'>
            <Title $mb='20px'>Sign In</Title>
            <Subtitle $mb='20px'>Sign in with your email address and password</Subtitle>
            <CreateLinkWrapper $mb='10px' >
                <CreateLink $active={!isShoper} onClick={() => setIsShoper(false)} type='button'>Customer Account</CreateLink>
                <CreateLink $active={isShoper} onClick={() => setIsShoper(true)} type='button'>Shopper Account</CreateLink>
            </CreateLinkWrapper>
            <Input placeholder='email address' $mb='20px' {...registerInput('email')} />
            <Input placeholder='password' type='password' $mb='10px' {...registerInput('password')} />
            <FormLink $mb='20px' $justify='end' ><Link to='/signin/forget'>Forget password?</Link></FormLink>
            <Button br={'10px'} mb={'20px'}>Sign In</Button>
            <CustomLink $transparent to='/signup'>Create Account</CustomLink>
        </FormStyled>
    )
}

export { SignIn }