import React from 'react'
import { CreateLink, CreateLinkWrapper, FormStyled, Img, Subtitle, Title } from './styled'
import { Input } from '../../../UI/Input'
import { Button } from '../../../UI/Button'
import { onError, useForgetPasswordForm } from '../models/utils'
import { SubmitHandler } from 'react-hook-form'
import { IForgetPassword, SignInContext } from '../models/types'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useMutation } from 'react-query'
import { sendVerify } from '../'

const ForgetPassword: React.FC = () => {
    const { handleSubmit, registerInput } = useForgetPasswordForm()
    const { isShoper, setIsShoper, setEmail } = useOutletContext<SignInContext>()
    const sendVerifyQuery = useMutation((data: { email: string, isShoper: boolean }) => sendVerify(data))
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<IForgetPassword> = async (data) => {
        setEmail(data.email)
        await sendVerifyQuery.mutateAsync({
            email: data.email,
            isShoper
        }).then(res=>{
            if(res.status===201) navigate('/signin/verify')
        },
            err=>console.log(err)
        )
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