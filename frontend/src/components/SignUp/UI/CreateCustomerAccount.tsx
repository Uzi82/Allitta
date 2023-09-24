import React from 'react'
import { Flex, Subtitle, Title, Wrapper } from './styled'
import { Input } from '../../../UI/Input'
import { CustomLink } from '../../../UI/CustomLink'
import { useParams } from 'react-router-dom'

const CreateCustomerAccount: React.FC = () => {
    const s = useParams()
    return (
        <Wrapper>
            <Title $mb='30px'>Your Profile</Title>
            <Subtitle $mb='12px'>Your Informations</Subtitle>
            <Flex $mb='20px'>
                <Input placeholder='First Name' />
                <Input placeholder='Last Name' />
            </Flex>
            <Input mb='20px' width='100%' placeholder='Full Name' />
            <Flex $mb='20px'>
                <Input placeholder='Birthday (DD/MM/YYYY)' />
                <Input placeholder='Gender' />
            </Flex>
            <Flex $mb='30px'>
                <Input placeholder='NIC Number' />
                <Input placeholder='Mobile Number' />
            </Flex>
            <Subtitle $mb='20px'>Home Address</Subtitle>
            <Input mb='20px' width='100%' placeholder='Street Address' />
            <Flex $mb='40px'>
                <Input placeholder='City' />
                <Input placeholder='Zip Code' />
            </Flex>
            <CustomLink to='/signup/customer/photo'>Continue</CustomLink>
        </Wrapper>
    )
}

export { CreateCustomerAccount }