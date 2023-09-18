import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Content = styled(Link)`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 262px;
    height: 80px;
    border-radius: 10px;
    align-items: center;
    box-shadow: 0px 0px 5px 2px rgba(34, 60, 80, 0.2);
    justify-content: center;
`

const Img = styled.img`
    width: 30px;
    height: 30px;
`

const ImgContainer = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 45px;
    background: #E6E6E6;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Image = ({src}: { src?: string }) => <ImgContainer><Img src={src !== '' && !src ? src : require('./shoppingBag.png')} /></ImgContainer>

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 145px
`

export const Header = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Description = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`