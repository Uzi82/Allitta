import React from 'react'
import { Img, Title, Upload, Wrapper } from './styled'
import { CustomLink } from '../../../UI/CustomLink'
import { useParams } from 'react-router-dom'


const ProfilePicture: React.FC = () => {
    const s = useParams()
    return (
        <Wrapper>
            <Title $mb='40px'>Profile Picture</Title>
            <Upload $mb='50px'>
                <Img $mb='12px' src='/upload.svg'></Img>
                Upload a Profile Picture
            </Upload>
            <CustomLink $mb='10px' to='/signup'>Submit</CustomLink>
            <CustomLink $transparent to='/signup'>Skip</CustomLink>
        </Wrapper>
    )
}

export { ProfilePicture }