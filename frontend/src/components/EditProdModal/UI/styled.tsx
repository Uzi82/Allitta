import styled from "styled-components";
import ReactSelect from "react-select";

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

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 40px;
    justify-content: stretch;
    align-items: stretch;
    @media screen and (max-width: 1023px) {
        gap: 20px;
        justify-content: space-between;
    }
    @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 262px;
    @media screen and (max-width: 1023px) {
        width: 182px;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
        align-items: center;
    }
`

export const ImgInput = styled.input<{ $bg: string | ArrayBuffer | null }>`
    width: 262px;
    height: 262px;
    background: url(${({ $bg }) => $bg || require('./Input.png')});
    border: ${({ $bg }) => $bg && `1px solid black`};
    border-radius: ${({ $bg }) => $bg && `8px`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: 0px;
    content-visibility: hidden;
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 182px;
        height: 182px;
    }
    @media screen and (max-width: 767px) {
        width: 30vh;
        height: 30vh;
        background-size: 100% 100%;
    }
`

export const LeftInputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const SimpleInput = styled.input`
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: 1px solid black;
    background: rgba(255, 255, 255, 0.80);
    backdrop-filter: blur(10px);
    opacity: 0.5;
    padding: 15px;
    transition-duration: 300ms;
    color: black;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &:focus {
        opacity: 1;
    }
`

export const SimpleTextArea = styled.textarea<{ $height?: string }>`
    width: 100%;
    height: ${({ $height }) => $height || '45px'};
    border-radius: 10px;
    border: 1px solid black;
    background: rgba(255, 255, 255, 0.80);
    backdrop-filter: blur(10px);
    opacity: 0.5;
    padding: 15px;
    transition-duration: 300ms;
    color: black;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    resize: none;
    &:focus {
        opacity: 1;
    }
    @media screen and (max-width: 1023px) {
        height: calc(${({ $height }) => $height || '45px'} / 1.5);
    }
`

export const CheckBoxes = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 40px;
`

export const CheckBoxContainer = styled.div`
    display: flex;
    gap: 10px;
`

export const CheckBoxText = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media screen and (max-width: 1023px) {
        font-size: 12px;
    }
`

export const CheckBox = styled.input`
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 1px solid #BEBEBE;
    background: #F5F4F4;
    @media screen and (max-width: 1023px) {
        width: 12px;
        height: 12px;
    }
`

export const RightSide = styled.div`
    width: calc(100% - 262px - 40px);
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 1023px) {
        width: calc(100% - 182px);
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Filter = styled(ReactSelect)`
    width: 45%;
    & > div.Select__control {
        width: 100%;
        height: 45px;
        border-radius: 9px;
        border: 1px solid black;
        color: black;
        font-family: Inter-Regular;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        opacity: 0.5;
        transition-duration: 300ms;
        &--is-focused {
            box-shadow: none;
            opacity: 1;
        }
        @media screen and (max-width: 767px) {
            font-size: 10px;
        }
    }
    .Select__option {
        color: black;
        font-family: Inter-Regular, sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border-radius: 3px;
        width: calc(100% - 10px);
        margin: 5px;
        &--is-focused {
            background-color: rgba(93,32,214,0.7);
            color: white;
            font-family: Inter-Regular, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        &--is-selected {
            background-color: rgba(93,32,214,1);
            color: white;
            font-family: Inter-Regular, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        &--is-disabled {
            background-color: rgba(93,32,214,0.7);
            color: white;
            font-family: Inter-Regular, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        &:active {
            background-color: rgba(93,32,214,0.3);
            color: white;
            font-family: Inter-Regular, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        @media screen and (max-width: 767px) {
            font-size: 10px;
        }
    }
    @media screen and (max-width: 1023px) {
        & > div.Select__control {
            height: 40px;
            &--is-focused {
                box-shadow: none;
                border: 1px solid #5D20D6;
            }
        }
        .Select__option {
            font-family: Inter-Regular, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            border-radius: 3px;
            width: 190px;
        }
    }
`

export const PublishBtns = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`

export const Publish = styled.button`
    border-radius: 10px;
    cursor: pointer;
    height: 45px;
    width: 35%;
    border: 1px solid #5D20D6;
    background: #5D20D6;
    color: #FFF;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    transition-duration: 300ms;
    &:hover {
        background-color: inherit;
        color: #5D20D6
    }
`

export const Cancel = styled.button`
    border-radius: 10px;
    cursor: pointer;
    height: 45px;
    width: 35%;
    border: 1px solid #5D20D6;
    color: #040404;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #5D20D6;
    transition-duration: 300ms;
    &:hover {
        background-color: #5D20D6;
        color: white;
    }
`

export const HiddenInput = styled.input`
    display: none;
`
export const Delete = styled.button`
    color: #DD3A3A;
    width: 20%;
    border-radius: 5px;
    background: none;
    cursor: pointer;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition-duration: 300ms;
    &:hover {
        background-color: #DD3A3A;
        color: white;
    }
`