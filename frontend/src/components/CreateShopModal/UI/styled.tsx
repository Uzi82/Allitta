import styled from "styled-components";

export const Container = styled.form`
    width: 550px;
    padding: 40px 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const Title = styled.div`
    color: #000;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 100%;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const Part = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const PartTitle = styled.h1`
    color: #000;
    font-family: Inter-Regylar, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 0 6px;
`

export const Input = styled.input<{ $half?: boolean }>`
    width: ${({ $half })=> $half ? "48%" : "100%"};
    padding: 14px;
    color: black;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 10px;
    border: 1px solid black;
    background: rgba(255, 255, 255, 0.80);
    backdrop-filter: blur(10px);
    opacity: 0.6;
    transition-duration: 300ms;
    &:focus {
        opacity: 1;
    }
`