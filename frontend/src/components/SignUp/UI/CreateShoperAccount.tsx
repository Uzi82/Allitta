import React from 'react'
import { CreateLink, CreateLinks, Title, Wrapper } from './styled'
import { Input } from '../../../UI/Input'
import { CustomLink } from '../../../UI/CustomLink'
import { useParams } from 'react-router-dom'


const CreateShoperAccount: React.FC = () => {
    const s = useParams()
    return (
        <Wrapper>
            <Title $mb='30px'>Create Account</Title>
            <CreateLinks $mb='30px' >
                <CreateLink to='/signup/customer'>Customer Account</CreateLink>
                <CreateLink active to='/signup'>Shopper Account</CreateLink>
            </CreateLinks>
            <Input mb='20px' placeholder='Email Address'></Input>
            <Input mb='20px' placeholder='Create Password'></Input>
            <Input mb='20px' placeholder='Confirm Password'></Input>
            <CustomLink to='/signup/verify'>Continue</CustomLink>
        </Wrapper>
    )
}

export { CreateShoperAccount }