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
        justify-content: space-around;
        padding: 0;
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
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
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
        width: 60px;
        height: 20px;
        font-size: 8px;
        gap: 4px;
        padding: 0;
        justify-content: space-evenly;
    }
`

export const Img = styled.img`
    @media screen and (max-width: 766px) {
        width: 20px;
        height: 20px;
    }
`