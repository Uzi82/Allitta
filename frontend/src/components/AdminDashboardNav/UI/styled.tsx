import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 572px;
    display: flex;
    padding: 26px 0;
    flex-direction: column;
    align-items: center;
    gap: 85px;
    background-color: #4B4B4B;
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        height: 100%;
        flex-direction: row;
        justify-content: space-around;
        padding: 0;
        gap: 10px;
    }
    @media screen and (max-width: 766px) {
        height: 100%;
        flex-direction: row;
        justify-content: space-between;
        padding:0 30px;
        gap: 10px;
    }
`

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        flex-direction: row;
        gap: 10px;
    }
    @media screen and (max-width: 766px) {
        display: none;
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
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 100px;
        font-size: 10px;
        gap: 4px;
        padding: 0;
        justify-content: space-evenly;
    }
    @media screen and (max-width: 766px) {
        display: none;
    }
`

export const Img = styled.img`
    @media screen and (max-width: 766px) {
        width: 20px;
        height: 20px;
    }
`
export const NavigationMobile = styled.div`
    display: none;
    @media screen and (max-width: 766px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const NavBurger = styled.div<{ $active: boolean }>`
    display: none;
    @media screen and (max-width: 766px) {
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
    }
`
export const NavBurgerItem = styled.button<{ $active: boolean }>`
    display: none;
    @media screen and (max-width: 766px) {
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
