import styled from "styled-components";

export const Container = styled.div<{ $active: boolean }>`
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
        display: ${({ $active }) => $active ? `flex` : `none`};
        animation: appearBurger 1s;
    }
    @media screen and (max-width: 767px) {
        width: 98vw;
        display: ${({ $active }) => $active ? `flex` : `none`};
    }
    @keyframes appearBurger {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
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

export const UserContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 0 10px;
    gap: 6px;
`

export const UserImg = styled.div<{ $img?: FileList}>`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    ${({ $img }) => $img && `background-image: url(${$img})`}
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