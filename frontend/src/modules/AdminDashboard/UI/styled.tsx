import styled from "styled-components";

export const Container = styled.div`
    padding: 35px 44px 20px 0px;
    width: calc(100vw - 250px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 100%;
        padding: 10px;
    }
    @media screen and (max-width: 766px) {
        width: 100%;
        padding: 10px;
    }
`

export const Stats = styled.div`
    display: flex;
    width: 100%;
    column-gap: 24px;
    row-gap: 20px;
    @media screen and (max-width: 766px) {
        flex-direction: column;
    }
`

export const Line = styled.div`
    height: 1px;
    width: 100%;
    background: #E3E3E3;
`
export const Btn = styled.button`
    width: 325px;
    height: 163px;
    border-radius: 9px;
    padding: 20px;
    background: rgba(93, 32, 214, 0.5);
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    cursor: pointer;
    transition-duration: 300ms;
    color: white;
    &:hover {
        box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.5);
    }
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        width: 200px;
        height: 121px;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 200px;
        height: 121px;
    }
    @media screen and (max-width: 766px) {
        width: 48%;
        height: 120px;
    }
`
export const Text = styled.div`
    color: #000;
    font-family: Inter-regular;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.6;   
    @media screen and (max-width: 1023px)  {
        font-size: 12px;
    }
`

