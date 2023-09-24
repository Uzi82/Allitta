import React from 'react'
import { CreateLink, CreateLinkWrapper, FormWrapper, Title } from './styled'
import { Input } from '../../../UI/Input'
import { CustomLink } from '../../../UI/CustomLink'


export const CreateShoperAccount: React.FC = () => {
    return (
        <FormWrapper $gap='20px'>
            <Title $mb='10px'>Create Account</Title>
            <CreateLinkWrapper $mb='10px' >
                <CreateLink to='/signup/customer'>Customer Account</CreateLink>
                <CreateLink active to='/signup'>Shopper Account</CreateLink>
            </CreateLinkWrapper>
            <Input placeholder='Email Address'></Input>
            <Input placeholder='Create Password'></Input>
            <Input placeholder='Confirm Password'></Input>
            <CustomLink to='/signup/verify'>Continue</CustomLink>
        </FormWrapper>
    )
}