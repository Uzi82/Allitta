import React, { useEffect, useRef } from 'react'
import { Img, Title, UploadContent, UploadInput, UploadWrapper, FormWrapper, ImgInput } from './styled'
import { CustomLink } from '../../../UI/CustomLink'
import { BackLink } from '../../../UI/BackLink'
import { Button } from '../../../UI/Button'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'

interface IFormInput {
    file: FileList
}

export const ProfilePicture: React.FC = () => {
    const { register, handleSubmit, watch } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log('success', data);
    }
    const onError: SubmitErrorHandler<IFormInput> = (data) => {

    }
    const fileinput = watch('file')

    return (
        <FormWrapper $gap='20px' onSubmit={handleSubmit(onSubmit, onError)}>
            <Title $mb='20px'>Profile Picture</Title>
            <UploadWrapper $mb='30px'>
                <UploadInput placeholder='avatar' type="file" {...register('file', { required: 'required' })} />
                <UploadContent>
                    <Img $mb='12px' src='/svg/upload.svg' />
                    Upload a Profile Picture
                </UploadContent>
                {fileinput ? <ImgInput src={URL.createObjectURL(fileinput[0])} alt="Upload a Profile Picture" /> : ''}
            </UploadWrapper>
            <Button br='10px' >Submit</Button>
            <CustomLink $transparent to='/signup'>Skip</CustomLink>
            <BackLink $left='10px' $top='10px' />
        </FormWrapper>
    )
}