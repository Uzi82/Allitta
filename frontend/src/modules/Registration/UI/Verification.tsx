import React from 'react'
import { Img, Subtitle, Title, FormWrapper } from './styled'
import { Input } from '../../../UI/Input'
import { CustomLink } from '../../../UI/CustomLink'
import { Button } from '../../../UI/Button'
import { onError, useVerificationForm } from '../models/utils'
import { SubmitHandler } from 'react-hook-form'
import { IVerification } from '../models/types'

export const Verification: React.FC = () => {
    const { handleSubmit, registerInput } = useVerificationForm()

    const onSubmit: SubmitHandler<IVerification> = async (data) => {
        try {
        } catch (error) {
        }
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit, onError)} $gap='20px' $maxWidth='456px'>
            <Title $mb='10px'>Create Account</Title>
            <Img src='/svg/email.svg' $mb='20px' />
            <Subtitle $mb='10px'>Enter the 6 Digits code you received to shasheesha@gmail.com</Subtitle>
            <Input placeholder='6 Digits Code' type='number' {...registerInput('verification')} />
            <Button br='10px'>Submit</Button>
            <CustomLink $transparent to='/signup'><Img src="/svg/backward.svg" />{' '}Back</CustomLink>
        </FormWrapper>
    )
}