import React from 'react'
import { CreateLink, CreateLinkWrapper, FormWrapper, Title } from './styled'
import { Input } from '../../../UI/Input'
import { CustomLink } from '../../../UI/CustomLink'


export const CreateShoperAccount: React.FC = () => {
    return (
        <FormWrapper>
            <Title $mb='30px'>Create Account</Title>
            <CreateLinkWrapper $mb='30px' >
                <CreateLink to='/signup/customer'>Customer Account</CreateLink>
                <CreateLink active to='/signup'>Shopper Account</CreateLink>
            </CreateLinkWrapper>
            <Input mb='20px' placeholder='Email Address'></Input>
            <Input mb='20px' placeholder='Create Password'></Input>
            <Input mb='20px' placeholder='Confirm Password'></Input>
            <CustomLink to='/signup/verify'>Continue</CustomLink>
        </FormWrapper>
    )
}