import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 572px;
    display: flex;
    padding: 26px 0;
    flex-direction: column;
    align-items: center;
    gap: 85px;
    background-color: #FBF9F8;
`

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
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
`