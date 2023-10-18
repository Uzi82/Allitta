import React, { useEffect } from 'react'
import { Img, Title, UploadContent, UploadInput, UploadWrapper, FormWrapper, ImgInput } from './styled'
import { CustomLink } from '../../../UI/CustomLink'
import { Button } from '../../../UI/Button'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { type AccountContext, type IFormInput } from '../'
import { toast } from 'react-toastify'
import { useMutation } from 'react-query'
import { sendPhoto } from '../models/sendPhoto'
import { useNavigate, useOutletContext } from 'react-router-dom'



export const ProfilePicture: React.FC = () => {
    const { register, handleSubmit, watch } = useForm<IFormInput>()
    const { isShoper } = useOutletContext<AccountContext>()
    const navigate = useNavigate()
    const sendPhotoQuery = useMutation((data: { file: FileList, isShoper: boolean })=> sendPhoto(data))
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        await sendPhotoQuery.mutateAsync({
            file: data.file,
            isShoper
        }).then(
            res => {
                if(res.status === 200) navigate(`/${isShoper?'shop':'customer'}`)
                return
            },
            err => console.log(err)
        )
    }
    function getJwt(cookie: string) {
        let cookies = cookie.split('; ')
        for(let el of cookies) {
            let [key, value] = el.split('=')
            if(key === 'token') return value
        }
    }
    useEffect(()=>{
        if(!getJwt(document.cookie)) navigate('/signup')
    }, [])
    const fileinput = watch('file')
    return (
        <FormWrapper $gap='20px' onSubmit={handleSubmit(onSubmit)} $maxWidth='644px'>
            <Title $mb='20px'>Profile Picture</Title>
            <UploadWrapper $mb='30px'>
                <UploadInput placeholder='avatar' type="file" accept=".jpg, .jpeg, .png, .bmp, .svg, .webp" {...register('file', { required: 'required' })} />
                <UploadContent>
                    <Img $mb='12px' src='/svg/upload.svg' />
                    Upload a Profile Picture
                </UploadContent>
                {fileinput && fileinput.length ? <ImgInput src={URL.createObjectURL(fileinput[0])} alt="Upload a Profile Picture" /> : ''}
            </UploadWrapper>
            <Button br='10px'>Submit</Button>
            <CustomLink $transparent to={`/${isShoper?'shop':'customer'}`}>Skip</CustomLink>
        </FormWrapper>
    )
}