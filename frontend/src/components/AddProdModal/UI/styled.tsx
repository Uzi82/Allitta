import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 40px 50px;
`

export const Head = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
`

export const Exit = styled.button`
    cursor: pointer;
    width: 25px;
    position: absolute;
    background-color: inherit;
    height: 25px;
    background-image: url(${require('./Exit.png')});
`

export const Title = styled.h1`
    width: 100%;
    height: 20px;
    text-align: center;
    color: #000;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Form = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 40px;
`