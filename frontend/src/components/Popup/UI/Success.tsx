import React from 'react'
import { Img, Subtitle, Title, Wrapper } from './styled'
import { CustomLink } from '../../../UI/CustomLink'

interface ISuccess { type: 'email' | 'password' }

const Success: React.FC<ISuccess> = ({ type }) => {
    return (
        <Wrapper>
            {type === "email" ?
                <>
                    <Title $mb="40px">Email Verified</Title>
                    <Img src="/success.svg" alt="success" $mb='40px' />
                    <Subtitle $mb="40px" >Your Email address is verified to the allitta.lk</Subtitle>
                    <CustomLink to={'/'} $mb="20px" >Go To Home</CustomLink>
                    <CustomLink $transparent to={'/signin'}>Sign in</CustomLink>
                </> :
                <>
                    <Title $mb="40px">Your Password is Successfully Changed</Title>
                    <Img src="/success.svg" alt="success" $mb='40px' />
                    <CustomLink to={'/signin'}>Sign in</CustomLink>
                </>
            }
        </Wrapper>
    )
}

export { Success }