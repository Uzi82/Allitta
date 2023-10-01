import React from 'react'
import { CreateLink, CreateLinkWrapper, FormWrapper, Title } from './styled'
import { Input } from '../../../UI/Input'
import { onError, onSubmit, useAccountForm } from '../models/utils'
import { Button } from '../../../UI/Button'

export const CreateAccount: React.FC = () => {
    const { handleSubmit, registerInput } = useAccountForm()
    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit, onError)} autoComplete='off' $gap='20px' $maxWidth='456px'>
            <Title $mb='10px'>Create Account</Title>
            <CreateLinkWrapper $mb='10px' >
                <CreateLink to='/signup/customer'>Create Account</CreateLink>
                <CreateLink $active to='/signup'>Create Profile</CreateLink>
            </CreateLinkWrapper>
            <Input placeholder='Email Address' type='email' {...registerInput('email')} />
            <Input placeholder='Create Password' type='password' {...registerInput('password')} />
            <Input placeholder='Confirm Password' type='password'   {...registerInput('confirm password')} />
            <Button type='submit' /*onClick={() => navigate('/signup/verify')}*/ br='10px'>Continue</Button>
        </FormWrapper>
    )
}