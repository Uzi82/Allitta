import styled from "styled-components"

export const Wrapper = styled.div`
    padding: 40px 50px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.60);
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(50px);
    display: flex;
    flex-direction: column;
    max-width: 644px;
    width: 100%;
    gap: 30px;
`
export const Title = styled.div`
    text-align: center;
    font-family: Inter-bold;
    font-size: 32px;
`
export const Subtitle = styled.div`
    font-size: 18px;
    font-family: Inter-regular;
    @media (max-width: 480px) {
        font-size: 16px;
    }
`
export const Actions = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 480px) {
        flex-direction: column;
    }
`
export const ButtonTransparent = styled.button`
    width: 100%;
    border: 2px solid #5D20D6;
    font-size: 14px;
    height: 45px;
    padding: 0 2px;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #000000;
    color: #000000;
    background: #FEFEFE;
    transition: all 0.2s ease-in-out;
    &:hover {
        background: #5D20D6;
        border: 2px solid #fff;
        color: #fff;
    }
`
