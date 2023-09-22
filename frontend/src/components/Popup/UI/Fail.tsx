import React from 'react'
import { Img, Subtitle, Title, Wrapper } from './styled'
import { CustomLink } from '../../../UI/CustomLink'
interface IFail { type: 'email' | 'password' }

const Fail: React.FC<IFail> = ({ type }) => {
    return (
        <Wrapper>
            {type === "email" ?
                <>
                    <Title $mb="40px">Verification Failed</Title>
                    <Img src="/fail.svg" alt="fail" $mb='40px' />
                    <Subtitle $mb="40px" >Your Email address verification is failed.</Subtitle>
                    <CustomLink to={'/'} $mb="20px" >Try Again</CustomLink>
                </> :
                <>
                    <Title $mb="40px">Your Password is fully Changed</Title>
                    <Img src="/fail.svg" alt="fail" $mb='40px' />
                    <CustomLink to={'/signin'}>Sign in</CustomLink>
                </>
            }
        </Wrapper>
    )
}

export { Fail }