import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 40px 20px 0 20px;
    gap: 10px;
    @media screen and (max-width: 1280px) {
        flex-direction: column;
        align-items: center;
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
    background-image: url(${({ $img }) => $img !== undefined && $img });
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    @media screen and (max-width: 1280px) {
        width: 60vw;
        height: 60vw;
    }
    @media screen and (max-width: 450px) {
        width: 80vw;
        height: 80vw;
    }
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
    background-image: url(${({ $verified }) => $verified ? require('./verified.png') : require('./unverified.png') });
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

export const Status = styled.h1<{ $verified: boolean }>`
    color: ${({ $verified }) => $verified ? `#3DB39E` : `#E21B1B` };
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const ShopListHead = styled.h1`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Shops = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 350px;
    height: 625px;
    overflow-y: auto;
    border-radius: 10px;
    padding: 20px 10px 0 10px;
    background: #FBF9F9;
    align-items: center;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.10) inset;
    @media screen and (max-width: 1280px) {
        width: 90%;
    }
    @media screen and (max-width: 450px) {
        width: 100%;
    }
`

export const ShopsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    overflow-y: auto;
    border-radius: 10px;
    align-items: center;
    padding: 5px;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: inherit;
        border-radius: 11px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #C1C1C1;
        width: 8px;
        border-radius: 9px;
    }
    @media screen and (max-width: 1400px) {
        &::-webkit-scrollbar {
            width: 6px;
        }
    }
`

export const ShopsListEl = styled.button`
    max-width: calc(100% - 5px);
    width: calc(100% - 5px);
    min-height: 70px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.10);
    display: flex;
    padding: 10px 15px;
    align-items: center;
    justify-content: stretch;
    gap: 15px;
    border: 2px solid #F4F4F4;
    transition-duration: 300ms;
    cursor: pointer;
    &:hover {
        border-color: #5D20D6;
    }
`

export const ShopImg = styled.div<{ $img?: string }>`
    min-width: 50px;
    min-height: 50px;
    background-image: url(${({ $img })=>$img!==undefined?`${$img}`:`none`});
    background-color: #8B8B8B;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    @media screen and (max-width: 1400px) {
        min-width: 35px;
        min-height: 35px;
    }
`

export const ShopName = styled.h1`
    color: black;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.6;
    transition-duration: 300ms;
    width: 100%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 1400px) {
        font-size: 12px;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: calc(100% - 20px - 250px - 350px);
    @media screen and (max-width: 1280px) {
        max-width: 90%;
    }
    @media screen and (max-width: 450px) {
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
`

export const ElText = styled.h1<{ $big?: boolean, $wrap?: boolean }>`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: ${({ $big })=>$big === true ? '32px' : '20px' };
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 100%;
    height: fit-content;
    word-wrap: break-word;
    ${({ $wrap }) => $wrap === true ? '' : `overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;`}
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