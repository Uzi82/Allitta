import React, { useEffect, useRef } from 'react'
import { Img, Subtitle, Title, FormWrapper } from './styled'
import { Input } from '../../../UI/Input'
import { CustomLink } from '../../../UI/CustomLink'
import { Button } from '../../../UI/Button'
import { onError, useVerificationForm } from '../models/utils'
import { SubmitHandler } from 'react-hook-form'
import { AccountContext, IVerification } from '../models/types'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'
import { checkVerify, sendVerify } from '../'
import { ToastContainer, toast } from 'react-toastify'

export const Verification: React.FC = () => {
    const { handleSubmit, registerInput } = useVerificationForm()
    const { isShoper, email, password, setIsShoper , setIsVerifyPassed, isVerifyPassed } = useOutletContext<AccountContext>()
    const checkVerifyQuery = useMutation((data : { email: string, isShoper: boolean, code: number }) => checkVerify(data))
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<IVerification> = async (data) => {
        await checkVerifyQuery.mutateAsync({
            email,
            isShoper,
            code: data.verification
        }).then(
            () => setIsVerifyPassed(1),
            () => setIsVerifyPassed(2)
        )
    };
    useEffect(()=>{
        if(email === '' || password === '') navigate('/signup')
    }, [])
    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit, onError)} $gap='20px' $maxWidth='456px'>
            <Title $mb='10px'>Create Account</Title>
            <Img src='/svg/email.svg' $mb='20px' />
            <Subtitle $mb='10px'>Enter the 6 Digits code you received to {email}</Subtitle>
            <Input placeholder='6 Digits Code' type='number' {...registerInput('verification')} />
            <Button type='submit' br='10px'>Submit</Button>
            <CustomLink $transparent to='/signup'><Img src="/svg/backward.svg" />{' '}Back</CustomLink>
        </FormWrapper>
    )
}