import React from 'react'
import { Img, Title, Wrapper } from './styled'
import { CustomLink } from '../../../UI/CustomLink'
import { ISignInPopup } from '../models/types'


const SignInPopup: React.FC<ISignInPopup> = ({ type }) => {
    return (
        <Wrapper>
            {type === "email" ?
                <>
                    <Title $mb="40px">Your Password is fully Changed</Title>
                    <Img src="/svg/fail.svg" alt="fail" $mb='40px' />
                    <CustomLink to={'/signin'}>Sign in</CustomLink>
                </> :
                <>
                    <Title $mb="40px">Your Password is Successfully Changed</Title>
                    <Img src="/svg/success.svg" alt="success" $mb='40px' />
                    <CustomLink to={'/signin'}>Sign in</CustomLink>
                </>
            }
        </Wrapper>
    )
}

export { SignInPopup }