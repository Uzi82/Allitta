import React from 'react'
import { CreateLink, CreateLinkWrapper, FormStyled, Img, Subtitle, Title } from './styled'
import { Input } from '../../../UI/Input'
import { Button } from '../../../UI/Button'
import { onError, useForgetPasswordForm } from '../models/utils'
import { SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { IForgetPassword, SignInContext } from '../models/types'
import { useOutletContext } from 'react-router-dom'

const ForgetPassword: React.FC = () => {
    const { handleSubmit, registerInput } = useForgetPasswordForm()
    const { isShoper, setIsShoper, setEmail } = useOutletContext<SignInContext>()

    const onSubmit: SubmitHandler<IForgetPassword> = async (data) => {
        try {
            setEmail(data.email)
            await axios.post(`http://localhost/api/users/email/verify`, { params: { email: data.email, user_type: isShoper ? 3 : 2, event_type: 2 } });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit, onError)} $maxwidth='388px' >
            <Title $mb='20px'>Email Address</Title>
            <Img src="/svg/forgetemail.svg" alt='forget email' $mb='40px' />
            <Subtitle $mb='20px'>First, tell us what is your email address and what kind of account you have</Subtitle>
            <Input $mb='20px' placeholder='email address' {...registerInput('email')} />
            <CreateLinkWrapper $mb='30px' >
                <CreateLink $active={!isShoper} onClick={() => setIsShoper(false)} type='button'>Customer Account</CreateLink>
                <CreateLink $active={isShoper} onClick={() => setIsShoper(true)} type='button'>Shopper Account</CreateLink>
            </CreateLinkWrapper>
            <Button br={'10px'} mb={'30px'} height='45px'>Continue</Button>
        </FormStyled>
    )
}

export { ForgetPassword }