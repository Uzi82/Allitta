import React from 'react'
import { FormStyled, Subtitle, Title } from './styled'
import { Input } from '../../../UI/Input'
import { Button } from '../../../UI/Button'

const ResetPassword: React.FC = () => {
    return (
        <FormStyled $maxwidth='388px'>
            <Title $mb='20px'>Re-Set Password</Title>
            <Subtitle $mb='20px'>Create your new Password and confirm it.</Subtitle>
            <Input placeholder='password' type='password' />
            <Input placeholder='confirm password' type='password' />
            <Button br={'10px'} mb={'20px'}>Save Password</Button>
        </FormStyled>
    )
}

export { ResetPassword }