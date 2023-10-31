import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    width: 100%;
    padding: 40px 20px 0 20px;
    gap: 32px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px 6px 6px 6px;
    }
`

export const ImageAndStatus = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Image = styled.div<{ $img?: string }>`
    width: 250px;
    height: 250px;
    border-radius: 10px;
    background-color: #D9D9D9;
    background-image: url(${({ $img }) => $img !== undefined && $img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

export const Verified = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const StatusImg = styled.div<{ $verified: boolean }>`
    width: 25px;
    height: 25px;
    background-image: url(${({ $verified }) => $verified ? require('./verified.png') : require('./unverified.png')});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

export const Status = styled.h1<{ $verified: boolean }>`
    color: ${({ $verified }) => $verified ? `#3DB39E` : `#E21B1B`};
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 414px;
    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`

export const El = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const ElTitle = styled.p`
    color: black;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.7;
    transition-duration: 300ms;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`

export const ElText = styled.h1<{ $big?: boolean, $wrap?: boolean }>`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: ${({ $big }) => $big ? '32px' : '20px'};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 100%;
    height: fit-content;
    word-wrap: break-word;
    ${({ $wrap }) => $wrap ? '' : `overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;`
    }
    @media screen and (max-width: 1024px) {
        font-size: ${({ $big }) => $big ? '28px' : '18px'};
    }
    @media screen and (max-width: 768px) {
        font-size: ${({ $big }) => $big ? '26px' : '16px'};
        overflow-x: initial; 
        white-space: initial;
        text-overflow: clip;
    }
`

export const Settings = styled.button`
    border-radius: 10px;
    border: 1px solid #5D20D6;
    background: #5D20D6;
    width: 250px;
    height: 45px;
    color: #FFF;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition-duration: 300ms;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover {
        background-color: inherit;
        color: #5D20D6;
    }
    @media screen and (max-width: 1280px) {
        align-self: flex-end;
    }
    @media screen and (max-width: 450px) {
        width: 100%;
    }
`