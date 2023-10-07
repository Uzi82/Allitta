import React from 'react'
import { CreateLink, CreateLinkWrapper, FormWrapper, Title } from './styled'
import { Input } from '../../../UI/Input'
import { onError, useAccountForm } from '../models/utils'
import { Button } from '../../../UI/Button'
import { SubmitHandler } from 'react-hook-form'
import { AccountContext, ICreateAccount } from '../models/types'
import { useNavigate, useOutletContext } from 'react-router-dom'

export const CreateAccount: React.FC = () => {
    const navigate = useNavigate()
    const { handleSubmit, registerInput } = useAccountForm()
    const { setIsShoper, isShoper, setEmail, setPassword } = useOutletContext<AccountContext>()
    const onSubmit: SubmitHandler<ICreateAccount> = async (data) => {
        setEmail(data.email)
        setPassword(data.password)
        navigate('/signup/verify')
    };
    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit, onError)} autoComplete='off' $gap='20px' $maxWidth='456px'>
            <Title $mb='10px'>Create Account</Title>
            <CreateLinkWrapper $mb='10px' >
                <CreateLink $active={!isShoper} onClick={() => setIsShoper(false)} type='button'>Customer Account</CreateLink>
                <CreateLink $active={isShoper} onClick={() => setIsShoper(true)} type='button'>Shopper Account</CreateLink>
            </CreateLinkWrapper>
            <Input placeholder='Email Address' type='email' {...registerInput('email')} />
            <Input placeholder='Create Password' type='password' {...registerInput('password')} />
            <Input placeholder='Confirm Password' type='password'   {...registerInput('confirm password')} />
            <Button br='10px'>Continue</Button>
        </FormWrapper>
    )
}