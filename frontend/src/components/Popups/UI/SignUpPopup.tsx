import React from 'react'
import { Img, Subtitle, Title, Wrapper } from './styled'
import { Button } from '../../../UI/Button'
import { useNavigate } from 'react-router-dom'
import { ISignUpPopup } from '../models/types'


export const SignUpPopup: React.FC<ISignUpPopup> = ({ isVerifyPassed, setIsVerifyPassed }) => {
    const navigate = useNavigate()
    return (
        <Wrapper>
            {isVerifyPassed === 1 ?
                <>
                    <Title $mb="40px">Email Verified</Title>
                    <Img src="/svg/success.svg" alt="success" $mb='40px' />
                    <Subtitle $mb="40px" >Your Email address is verified to the allitta.lk</Subtitle>
                    <Button onClick={() => {
                        setIsVerifyPassed(0)
                        navigate('/signup/profile')
                    }} mb="20px" br='10px'>Create Account</Button>
                </>
                :
                <>
                    <Title $mb="40px">Verification Failed</Title>
                    <Img src="/svg/fail.svg" alt="fail" $mb='40px' />
                    <Subtitle $mb="40px" >Your Email address verification is failed.</Subtitle>
                    <Button onClick={() => {
                        setIsVerifyPassed(0)
                        navigate('/signup')
                    }} mb="20px" br='10px'>Try Again</Button>
                </>
            }
        </Wrapper>
    )
}