import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 50px;
    gap: 20px;
`

export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid #848484;
    padding-bottom: 20px;
`

export const Title = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 50%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
`

export const Overall = styled.div`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ExitStars = styled.div`
    display: flex;
    gap: 50px;
    align-items: flex-start;
`

export const Exit = styled.button`
    width: 25px;
    height: 25px;
    cursor: pointer;
    background-color: inherit;
    background-size: 25px 25px;
    background-image: url(${ require('./exit.png') });
`

export const Stars = styled.div`
    display: flex;
    gap: 10px;
`

export const Star = styled.div<{ $big?: boolean, $active: boolean }>`
    background-image: url(${ require('./star.png') });
    background-size: ${ ({ $big }) => $big ? `25px 25px` : `20px 20px` };
    width: ${ ({ $big }) => $big ? `25px` : `20px` };
    height: ${ ({ $big }) => $big ? `25px` : `20px` };
    background-position: center;
    opacity: ${ ({ $active }) => $active ? '1': '0.6' };
`

export const List = styled.div`
    width: 100%;
    max-height: 50vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: #F3F3F3;
        border-radius: 11px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #C1C1C1;
        width: 8px;
        border-radius: 9px;
    }
`

export const El = styled.div`
    display: flex;
    justify-content: space-between;
    width: 98%;
    padding: 20px 0;
    border-bottom: 0.5px solid #D3D3D3;
`

export const ElText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ElTitle = styled.h1`
    color: #000;
    font-family: Inter-Regular;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const ElFeedback = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`

export const Publish = styled.button`
    width: 20%;
    height: 45px;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    border: 1px solid #5D20D6;
    background: #5D20D6;
    transition-duration: 300ms;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &:hover {
        background: none;
        color: #5D20D6;
    }
`

export const Cancel = styled.button`
    width: 20%;
    height: 45px;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid #5D20D6;
    background: none;
    color: #5D20D6;
    transition-duration: 300ms;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    &:hover {
        background: #5D20D6;
        color: white;
    }
`