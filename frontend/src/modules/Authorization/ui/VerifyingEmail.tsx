import React from 'react'
import { FormStyled, FormLink, Subtitle, Title, VerifyingActions } from './styled'
import { Input } from '../../../UI/Input'
import { Button } from '../../../UI/Button'
import { onError, onSubmit, useVerificationForm } from '../models/utils'

const VerifyingEmail: React.FC = () => {
    const [count, setCount] = React.useState(30)
    const { handleSubmit, registerInput } = useVerificationForm()

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
                <FormLink $disabled={!!count} $mb='20px' $justify='start'>00:{count < 10 ? `0${count}` : count}s left</FormLink>
                <FormLink $disabled={!!count} $mb='20px' $justify='end'>Resend Code</FormLink>
            </VerifyingActions>
            <Button br={'10px'} mb={'20px'}>Submit</Button>
        </FormStyled>
    )
}

export { VerifyingEmail }