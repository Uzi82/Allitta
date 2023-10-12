import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: center;
    width: 100%;
    padding: 30px 0 0 25px;
    height: calc(100vh - 130px);
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
`

export const Chat = styled.div`
    width: 75%;
    height: 100%;
    padding: 20px 0 0 50px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
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
    width: 50px;
    height: 50px;
    background-image: url(${({ $img })=>$img!==undefined?`${$img}`:`none`});
    background-color: #8B8B8B;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
`

export const ElText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-width: 200px;
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