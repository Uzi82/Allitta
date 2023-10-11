import React from 'react'
import { FormStyled, FormLink, Subtitle, Title, VerifyingActions } from './styled'
import { Input } from '../../../UI/Input'
import { Button } from '../../../UI/Button'
import { onError, useVerificationForm } from '../models/utils'
import { SubmitHandler } from 'react-hook-form'
import { IVerification, SignInContext } from '../models/types'
import axios from 'axios'
import { useNavigate, useOutletContext } from 'react-router-dom'

const VerifyingEmail: React.FC = () => {
    const [count, setCount] = React.useState(30)
    const { handleSubmit, registerInput } = useVerificationForm()
    const { email, isShoper, setIsSuccess } = useOutletContext<SignInContext>()
    const navigate = useNavigate()


    const onSubmit: SubmitHandler<IVerification> = async (data) => {
        try {
            await axios.post(`http://localhost/api/users/email/verify/check`, { params: { email, code: data.verification, user_type: isShoper ? 3 : 2, event_type: 2 } });
            navigate('/signin/reset')
        } catch (error) {
            setIsSuccess(1)
            console.error('Error:', error);
        }
    };

    React.useEffect(() => {
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
                <FormLink $disabled={!!count} $mb='20px' onClick={(e) => {
                    if (count) return
                    e.preventDefault()
                    // повторный запрос????
                    setCount(30)
                }} $justify='start'>00:{count < 10 ? `0${count}` : count}s left</FormLink>
                <FormLink $disabled={!!count} $mb='20px' $justify='end'>Resend Code</FormLink>
            </VerifyingActions>
            <Button br={'10px'} mb={'20px'}>Submit</Button>
        </FormStyled>
    )
}

export { VerifyingEmail }