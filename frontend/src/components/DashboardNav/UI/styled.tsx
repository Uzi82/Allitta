import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div<{ $active: boolean | undefined }>`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 26px 0 0 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #FBF9F8;
    @media screen and (max-width: 1023px) {
        width: 90vw;
        min-height: 100vh;
        padding-top: 50px;
        z-index: 999;
        position: absolute;
        height: 100%;
        display: flex;
        transform: ${({ $active }) => $active === true ? 'translateX(0)' : 'translateX(-100%)'};
        animation: ${({ $active }) => $active !== undefined ? $active === true ? `appearBurger 200ms` : `disappearBurger 200ms` : `none`};
    }
    @media screen and (max-width: 767px) {
        width: 98vw;
    }
    @keyframes appearBurger {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }
    @keyframes disappearBurger {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }
`

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media screen and (max-width: 1023px) {
        gap: 10px;
        width: 100%;
        align-items: center;
    }
`

export const Element = styled.button<{ $active: boolean }>`
    width: 210px;
    height: 45px;
    padding: 10px 25px;
    gap: 16px;
    align-items: center;
    border-radius: 10px;
    background: ${ ({ $active })=> $active ? `#F2EEEA` : `none` };
    display: flex;
    color: ${ ({ $active })=> $active ? '#5D20D6' : 'black' };
    font-family: Inter-Bold, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: ${ ({ $active })=> $active ? '1' : '0.7' };
    cursor: pointer;
    transition-duration: 100ms;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 1023px) {
        width: 90%;
        font-size: 14px;
        gap: 4px;
        justify-content: center;
    }
`

export const Img = styled.img`
    @media screen and (max-width: 766px) {
        width: 20px;
        height: 20px;
    }
`

export const Profile = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: rgba(93,32,214, 0.2);
`

export const ProfileHead = styled.h1`
    color: #000;
    padding: 0 20px;
    font-family: Inter-Bold, sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    opacity: 0.6;
`

export const LogoutBtn = styled.button`
    border-radius: 8px;
    background: #FFF;
    width: 210px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
`

export const LogoutText = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const LogoutImg = styled.div`
    width: 20px;
    height: 20px;
    background-image: url(${require('./imgs/log-out.png')});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

export const UserContainer = styled(Link)`
    width: 100%;
    display: flex;
    padding: 5px 10px;
    gap: 6px;
    border-radius: 10px;
    transition-duration: 300ms;
    &:hover {
        background-color: #FBF9F8;
    }
`

export const UserImg = styled.div<{ $img?: string}>`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    ${({ $img }) => $img && `background-image: url(${$img});`}
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: #D9D9D9;
`

export const UserData = styled.div`
    display: flex;
    padding: 5px 0;
    flex-direction: column;
    justify-content: space-between;
`

export const UserName = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const UserStatus = styled.p`
    color: #5D20D6;
    font-family: Inter-Regular, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const LogoLink = styled(Link)`
    cursor: pointer;
`

export const LogOutModal = styled.div`
    width: 644px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px 50px;
`

export const LogOutTitle = styled.h1`
    color: #000;
    width: 100%;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const LogOutText = styled.p`
    color: #000;
    width: 100%;
    font-family: Inter-Regular, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const LogOutBtns = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const LogOutBtn = styled.button<{ $confirm?: boolean }>`
    height: 45px;
    width: 48%;
    border-radius: 10px;
    border: 1px solid #5D20D6;
    background: ${({ $confirm })=>$confirm?'#5D20D6':'none'};
    transition-duration: 300ms;
    color: ${({ $confirm })=>$confirm?'white':'black'};
    cursor: pointer;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &:hover {
        background: ${({ $confirm })=>$confirm?'none':'#5D20D6'};
        color: ${({ $confirm })=>$confirm?'black':'white'};
    }
`