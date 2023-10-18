import styled from "styled-components";
import { IProfile } from "../models/types";

export const Container = styled.div`
    width: 250px;
    height: 100%;
    display: flex;
    padding: 26px 0 0 0;
    flex-direction: column;
    position: fixed;
    align-items: center;
    gap: 85px;
    background-color: #4B4B4B;
    @media screen and (max-width: 1023px) and (min-width: 768px) {
        position: relative;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
        gap: 10px;
    }
    @media screen and (max-width: 768px) {
        position: relative;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        padding:0 30px;
        gap: 10px;
    }
`
export const Navigation = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: 15px;
    @media screen and (max-width: 1023px) and (min-width: 768px) {
        flex-direction: row;
        gap: 10px;
        flex: 0 0 auto;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const ProfileWrapper = styled.div<IProfile>`
    background: ${({ $bg }) => $bg || '#343331'} ; 
    width: 100%; 
    padding: 30px;
    height: 100%;
    @media screen and (max-width: 1023px) {
        display: flex;
        width: auto; 
        padding: 0 20px;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const ProfileTitle = styled.h3`
    color: #FFF;
    font-family: Inter-bold, sans-serif;
    font-size: 10px;
    text-transform: uppercase;
    opacity: 0.5;
    margin-bottom: 12px;
    @media screen and (max-width: 1023px) and (min-width: 768px) {
        display: none;
    }
`
export const Profile = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
    align-items: center;
    @media screen and (max-width: 1023px) and (min-width: 768px) {
        align-items: center;
        justify-content: center;
        margin-bottom: 0;
    }
    @media screen and (max-width: 768px) {
        padding: 20px;
        margin: 0 auto;
        background: #4B4B4B;
        width: 100%;
    }
`
export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const ProfileAvatar = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background: #D9D9D9;
    overflow: hidden;
    @media screen and (max-width: 1023px)  {
        width: 25px;
        height: 25px;
    }
    @media screen and (max-width: 768px) {
        width: 45px;
        height: 45px;
    }
`
export const ProfileName = styled.div`
    color: #FFF;
    font-family: Inter-regular, sans-serif;
    font-size: 10px;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`
export const ProfileRole = styled.div`
    color: #ffffffd9;
    font-family: Inter-bold, sans-serif;
    font-size: 12px;
    @media screen and (max-width: 1023px) {
        font-size: 10px;
    }
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`
export const ProfileButton = styled.button`
    border-radius: 8px;
    background: #FFF;
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 12px 27px;
    cursor: pointer;
    border: 1px solid #FFF;
    transition:background .2s ease, border .2s ease, color .2s ease, stroke .2s ease;
    stroke: black;
    &:hover {
        background: #5D20D6;
        border: 1px solid black;
        color: #FFF;
        stroke: #FFF;
    }
    @media screen and (max-width: 1023px) {
        padding: 8px 12px;
        gap: 5px;
        max-width: 100px;
        height: 30px;
    }
    @media screen and (max-width: 768px) {
        padding: 8px 12px;
        gap: 5px;
        max-width: 180px;
        height: 40px;
        margin: 0 0 0 auto;
    }
    @media screen and (max-width: 768px) {
        padding: 8px 12px;
        gap: 5px;
        max-width: 100px;
        height: 40px;
        margin: 0 0 0 auto;
    }
`
export const Element = styled.button<{ $active: boolean }>`
    width: 210px;
    height: 45px;
    padding: 10px 25px;
    gap: 16px;
    align-items: center;
    border-radius: 10px;
    background: ${({ $active }) => $active ? `#5D20D6` : `none`};
    display: flex;
    color: #fff;
    font-family: Inter-Bold, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: ${({ $active }) => $active ? '1' : '0.8'};
    cursor: pointer;
    transition-duration: 100ms;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 1023px) and (min-width: 768px) {
        width: 100px;
        font-size: 10px;
        gap: 4px;
        padding: 0;
        justify-content: space-evenly;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Img = styled.img`
    @media screen and (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
`
export const NavigationMobile = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const NavBurger = styled.div<{ $active: boolean }>`
    display: none;
    @media screen and (max-width: 768px) {
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 75px 0 0 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #343331;
        z-index: 3;
        transform: ${({ $active }) => $active ? 'translateX(0)' : 'translateX(-100%)'};
        overflow-y: scroll;
    }
`
export const NavBurgerItem = styled.button<{ $active: boolean }>`
    display: none;
    @media screen and (max-width: 768px) {
        padding: 10px 25px;
        gap: 16px;
        align-items: center;
        border-radius: 10px;
        background: ${({ $active }) => $active ? `#5D20D6` : `none`};
        display: flex;
        color: ${({ $active }) => $active ? `black` : `black`} ;
        font-family: Inter-Bold, sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: ${({ $active }) => $active ? '1' : '0.8'};
        cursor: pointer;
        transition-duration: 100ms;
    }
`
export const BurgerStyled = styled.div<{ $active: boolean }>`
    width: 30px;
    height: 24px;
    position: relative;
    cursor: pointer;
    z-index: 1000;
    &::before,
    &::after,
    & span {
    content: '';
    width: 100%;
    height: 3px;
    background-color: ${({ $active }) => $active ? '#5D20D6' : '#fff'} ;
    position: absolute;
    left: 0;
    transition: transform 0.3s ease, background-color  0.3s ease;
}
    &::before {
    top:0;
    ${({ $active }) => $active ? 'transform: translateY(8px) rotate(45deg);' : ''}
}
    & span {
    top: 8px;
    ${({ $active }) => $active ? 'display:none;' : ''}

}
    &::after {
    top:16px;
    ${({ $active }) => $active ? 'transform: translateY(-8px) rotate(-45deg);' : ''}
}
`
