import React from 'react'
import { Img, Title, UploadContent, UploadInput, UploadWrapper, FormWrapper } from './styled'
import { CustomLink } from '../../../UI/CustomLink'
import { BackLink } from '../../../UI/BackLink'


export const ProfilePicture: React.FC = () => {
    return (
        <FormWrapper $gap='20px'>
            <Title $mb='20px'>Profile Picture</Title>
            <UploadWrapper $mb='30px'>
                <UploadInput placeholder='something' type="file" />
                <UploadContent>
                    <Img $mb='12px' src='/svg/upload.svg' />
                    Upload a Profile Picture
                </UploadContent>
            </UploadWrapper>
            <CustomLink to='/signup'>Submit</CustomLink>
            <CustomLink $transparent to='/signup'>Skip</CustomLink>
            <BackLink $left='10px' $top='10px' />
        </FormWrapper>
    )
}