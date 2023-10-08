import React from 'react'
import { Img, Title, UploadContent, UploadInput, UploadWrapper, FormWrapper, ImgInput } from './styled'
import { CustomLink } from '../../../UI/CustomLink'
import { Button } from '../../../UI/Button'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { IFormInput } from '../models/types'



export const ProfilePicture: React.FC = () => {
    const { register, handleSubmit, watch } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log('success', data);
    }
    const onError: SubmitErrorHandler<IFormInput> = (data) => {
    }
    const fileinput = watch('file')
    return (
        <FormWrapper $gap='20px' onSubmit={handleSubmit(onSubmit, onError)} $maxWidth='644px'>
            <Title $mb='20px'>Profile Picture</Title>
            <UploadWrapper $mb='30px'>
                <UploadInput placeholder='avatar' type="file" accept=".jpg, .jpeg, .png, .bmp, .svg, .webp" {...register('file', { required: 'required' })} />
                <UploadContent>
                    <Img $mb='12px' src='/svg/upload.svg' />
                    Upload a Profile Picture
                </UploadContent>
                {fileinput && fileinput.length ? <ImgInput src={URL.createObjectURL(fileinput[0])} alt="Upload a Profile Picture" /> : ''}
            </UploadWrapper>
            <Button br='10px' >Submit</Button>
            <CustomLink $transparent to='/signup'>Skip</CustomLink>
        </FormWrapper>
    )
}