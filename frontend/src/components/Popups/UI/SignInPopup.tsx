import React from 'react'
import { Button, Img, Title, Wrapper } from './styled'
import { ISignInPopup } from '../models/types'
import { useNavigate } from 'react-router-dom'


const SignInPopup: React.FC<ISignInPopup> = ({ isSuccess, setIsSuccess }) => {
    const navigate = useNavigate()
    return (
        <Wrapper>
            {
                isSuccess === 1 ?
                    <>
                        <Title $mb="40px">You entered code is wrong.</Title>
                        <Img src="/svg/fail.svg" alt="fail" $mb='40px' />
                        <Button onClick={(e) => {
                            e.preventDefault()
                            navigate('/signin/verify')
                            setIsSuccess(0)
                        }}>Try again</Button>
                    </> : isSuccess === 2 &&
                    <>
                        <Title $mb="40px">Your Password is Successfully Changed</Title>
                        <Img src="/svg/success.svg" alt="success" $mb='40px' />
                        <Button onClick={(e) => {
                            e.preventDefault()
                            navigate('/signin/reset')
                            setIsSuccess(0)
                        }}>Re-Set Password</Button>
                    </>
            }

        </Wrapper>
    )
}

export { SignInPopup }