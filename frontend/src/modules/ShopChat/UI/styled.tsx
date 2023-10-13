import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    width: 100%;
    padding: 30px 0 0 25px;
    height: calc(100vh - 100px);
    position: relative;
    @media screen and (max-width: 1400px) {
        padding: 5px;
    }
    @media screen and (max-width: 767px) {
        height: calc(100vh - 175px);
    }
`

export const BackBtn = styled.div<{ $show: boolean }>`
    display: ${({ $show })=>$show?'block':'none'};
    position: absolute;
    right: 5px;
    top: 5px;
    width: 25px;
    height: 25px;
    background-image: url(${require('./back.png')});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 9999;
`

export const ChatMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 25%;
    height: 100%;
    border-radius: 10px;
    align-items: center;
    padding: 20px 15px;
    background: #FBF9F8;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10) inset;
    @media screen and (max-width: 1120px) {
        width: 30%;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`

export const ChatList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: calc(100% - 60px);
    overflow-y: auto;
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

export const Chat = styled.div`
    width: 75%;
    height: 100%;
    padding: 20px 0 0 50px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    @media screen and (max-width: 1120px) {
        width: 70%;
        padding: 5px 0 0 5px;
    }
    @media screen and (max-width: 767px) {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 9;
        background-color: white;
        transform: translateX(calc(100% + 10px));
        &.open{
            animation-name: appearShopChat;
            animation-duration: 300ms;
            transform: translate(0)
        }
        &.close{
            animation-name: disappearShopChat;
            animation-duration: 300ms;
        }
        &.opened {
            transform: translate(0)
        }
    }
    @keyframes appearShopChat {
        0% {
            transform: translateX(calc(100% + 10px));
        }
        100% {
            transform: translateX(0);
        }
    }
    @keyframes disappearShopChat {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(100% + 10px));
        }
    }
`

export const ChatListEl = styled.button`
    width: calc(100% - 5px);
    min-height: 70px;
    border-radius: 10px;
    background: #F4F4F4;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.10);
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

export const ElImg = styled.div<{ $img?: FileList | undefined }>`
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

export const ElText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-width: 200px;
    @media screen and (max-width: 1400px) {
        max-width: 70%;
    }
`

export const ElName = styled.h1`
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

export const ElLastMsg = styled.p`
    color: black;
    font-family: Inter-Regular, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    opacity: 0.6;
    transition-duration: 300ms;
    padding: 0 5px 8px 5px;
    text-align: left;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    &:hover {
        opacity: 1;
    }
    @media screen and (max-width: 1400px) {
        font-size: 10px;
    }
`

export const ChatName = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    max-width: 80%;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    min-height: 30px;
`

export const ChatHistory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
    width: 100%;
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
`

export const ChatMsg = styled.div<{ $authorIsYou: boolean }>`
    max-width: 500px;
    padding: 10px 15px;
    margin: 0 10px;
    color: white;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 20px;
    background-color: rgba(93, 32, 214, ${({ $authorIsYou })=> $authorIsYou ? `1` : `0.5` });
    align-self: flex-${({ $authorIsYou }) => $authorIsYou ? 'end' : 'start' };
    @media screen and (max-width: 1120px) {
        font-size: 12px;
        max-width: 300px;
    }
`

export const SendMsg = styled.div`
    width: 100%;
    display: flex;
    gap: 15px;
    align-items: flex-end;
    height: auto;
`

export const InputMsg = styled.textarea`
    width: calc(100% - 75px);
    height: 60px;
    color: black;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    resize: none;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.6;
    border-radius: 9px;
    border: 1px solid black;
    transition-duration: 300ms;
    padding: 10px 20px;
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
    &:hover {
        opacity: 1;
    }
    &:focus {
        border-color: #5D20D6;
        opacity: 1;
    }
`

export const SendBtn = styled.button`
    cursor: pointer;
    width: 60px;
    height: 60px;
    border-radius: 9px;
    background-color: #5D20D6;
    background-image: url(${require('./send.png')});
    background-position: center;
    background-repeat: no-repeat;
    transition-duration: 300ms;
    &:hover {
        scale: 0.9;
    }
`