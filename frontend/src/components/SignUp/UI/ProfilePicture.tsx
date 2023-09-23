import React from 'react'
import { Img, Title, UploadContent, UploadInput, UploadWrapper, Wrapper } from './styled'
import { CustomLink } from '../../../UI/CustomLink'


export const ProfilePicture: React.FC = () => {
    return (
        <Wrapper>
            <Title $mb='40px'>Profile Picture</Title>
            <UploadWrapper $mb='50px'>
                <UploadInput placeholder='something' type="file" />
                <UploadContent>
                    <Img $mb='12px' src='/upload.svg'></Img>
                    Upload a Profile Picture
                </UploadContent>
            </UploadWrapper>
            <CustomLink $mb='10px' to='/signup'>Submit</CustomLink>
            <CustomLink $transparent to='/signup'>Skip</CustomLink>
        </Wrapper>
    )
}