import { FormStyled, FormLink, Subtitle, Title, VerifyingActions } from './styled'
import { Input } from '../../../UI/Input'
import { Button } from '../../../UI/Button'
import { onError, useVerificationForm } from '../models/utils'
import { SubmitHandler } from 'react-hook-form'
import { IVerification, SignInContext } from '../models/types'
import { useOutletContext } from 'react-router-dom'
import { useMutation } from 'react-query'
import { checkVerify, sendVerify } from '../'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const VerifyingEmail: React.FC = () => {
    const [count, setCount] = useState(30)
    const { handleSubmit, registerInput } = useVerificationForm()
    const { email, isShoper, setIsSuccess } = useOutletContext<SignInContext>()
    const checkVerifyQuery = useMutation((data: { email: string, isShoper: boolean, code: number }) => checkVerify(data))
    const sendVerifyQuery = useMutation((data: { email: string, isShoper: boolean })=> sendVerify(data))
    const onSubmit: SubmitHandler<IVerification> = async (data) => {
        await checkVerifyQuery.mutateAsync({
            email: email,
            code: data.verification,
            isShoper
        }).then(
            ()=>setIsSuccess(2),
            ()=>setIsSuccess(1)
        )
    };
    const resend = async () => {
        if(count !== 0) return
        await sendVerifyQuery.mutateAsync({
            email,
            isShoper
        })
            .then(
                ()=>toast('Code resended!'),
                err=>console.log(err)
            )
        setCount(5)
    }
    useEffect(() => {
        const timer = setInterval(() => {
            if (count === 0) return
            setCount((currentCount) => --currentCount)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [count])

    return (
        <FormStyled onSubmit={handleSubmit(onSubmit, onError)} $maxwidth='388px'>
            <Title $mb='20px'>Verifying</Title>
            <Subtitle $mb='20px'>A 6 Digits OTP code will be sent via e-mail to verify your e-mail address</Subtitle>
            <Input placeholder='6 Digits Code' type='number' {...registerInput('verification')} $mb='20px' />
            <VerifyingActions $mb='20px'>
                <FormLink $disabled={!!count} $mb='20px' onClick={resend} $justify='start'>00:{count < 10 ? `0${count}` : count}s left</FormLink>
                <FormLink $disabled={!!count} onClick={resend} $mb='20px' $justify='end'>Resend Code</FormLink>
            </VerifyingActions>
            <Button br={'10px'} mb={'20px'}>Submit</Button>
        </FormStyled>
    )
}

export { VerifyingEmail }