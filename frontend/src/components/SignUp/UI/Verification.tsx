import React from 'react'
import { Img, Subtitle, Title, FormWrapper } from './styled'
import { Input } from '../../../UI/Input'
import { CustomLink } from '../../../UI/CustomLink'
import { Button } from '../../../UI/Button'

export const Verification: React.FC = () => {
    return (
        <FormWrapper>
            <Title $mb='30px'>Create Account</Title>
            <Img src='/svg/email.svg' $mb='40px' />
            <Subtitle $mb='30px'>Enter the 6 Digits code you received to shasheesha@gmail.com</Subtitle>
            <Input mb='20px' placeholder='6 Digits Code '></Input>
            <Button mb='20px' br='10px'>Submit</Button>
            <CustomLink $transparent to='/signup'><Img src="/svg/backward.svg" />{' '}Back</CustomLink>
        </FormWrapper>
    )
}