import React from 'react'
import { FormStyled, FormLink, Subtitle, Title, VerifyingActions } from './styled'
import { Input } from '../../../UI/Input'
import { Button } from '../../../UI/Button'

const VerifyingEmail: React.FC = () => {
    return (
        <FormStyled $maxwidth='388px'>
            <Title $mb='20px'>Verifying</Title>
            <Subtitle $mb='20px'>A 6 Digits OTP code will be sent via e-mail to verify your e-mail address</Subtitle>
            <Input placeholder='6 Digits Code' />
            <VerifyingActions $mb='20px'>
                <FormLink $mb='20px' $justify='start'>00:26s left</FormLink>
                <FormLink $mb='20px' $justify='end'>Resend Code</FormLink>
            </VerifyingActions>
            <Button br={'10px'} mb={'20px'} >Submit</Button>
        </FormStyled>
    )
}

export { VerifyingEmail }