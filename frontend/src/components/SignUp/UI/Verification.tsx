import React from 'react'
import { Img, Subtitle, Title, Wrapper } from './styled'
import { Input } from '../../../UI/Input'
import { CustomLink } from '../../../UI/CustomLink'
import { Button } from '../../../UI/Button'

const Verification: React.FC = () => {
    return (
        <Wrapper>
            <Title $mb='30px'>Create Account</Title>
            <Img src='/email.svg' $mb='40px' />
            <Subtitle $mb='30px'>Enter the 6 Digits code you received to shasheesha@gmail.com</Subtitle>
            <Input mb='20px' placeholder='6 Digits Code '></Input>
            <Button mb='20px' br='10px'>Submit</Button>
            <CustomLink $transparent to='/signup'>{'<'} Back</CustomLink>
        </Wrapper>
    )
}

export { Verification }