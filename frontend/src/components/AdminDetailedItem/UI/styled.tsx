import styled from "styled-components";
import { MarginBottom, TextStyles } from "../models/types";
import { Button } from "../../../UI/Button"

export const Wrapper = styled.div`
    max-width: 1100px;
    width: 100%;
    height: 100%;
    padding: 50px 50px 40px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.60);
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(50px);
    @media screen and (max-width: 767px) {
        padding:30px 30px 20px;
    }
`
export const InfoWrapper = styled.div`
    margin: 0 0 30px 0;
    display: flex;
    gap: 40px;
    @media screen and (max-width: 767px) {
        flex-direction: column;
        gap: 16px;
        align-items: center;
    }
`
export const ProductAvatar = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 250px;
    align-items: start;
    margin: 0 0 0 0;
    @media screen and (max-width: 767px) {
        max-width: 300px;
    }
`
export const AccountLeft = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 250px;
    align-items: start;
    width: 100%;
    @media screen and (max-width: 767px) {
        flex-direction: row;
        max-width: none;
        justify-content: space-evenly;
        gap: 16px;
        flex-wrap: wrap;
    }
`
export const Shops = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 14px;
    flex-direction: column;
    border-radius: 10px;
    background: #FBF9F9;
    max-width: 250px;
    gap: 10px;
    height: 100%;
    min-height: 500px;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.10) inset;
    @media screen and (max-width: 767px) {
        min-height: 300px;
    }
`
export const Shop = styled.div`
    font-family: Inter-regular;
    font-size: 14px;
    border-radius: 10px;
    background: #FFF;
    padding: 20px 16px;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.10);
    transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
    cursor: pointer;
    border: #fff 1px solid;
    &:hover {
        border: #5D20D6 1px solid;
        color: #5D20D6;
    }
    @media screen and (max-width: 767px) {
        max-width: 300px;
    }
`
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 0;
    @media screen and (max-width: 767px) {
        align-items: center;
    }
`
export const AccountInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 0;
    @media screen and (max-width: 767px) {
        align-items: center;
    }
`
export const RatingStarsStyled = styled.div`
    display: flex;
    gap: 12px;
`
export const Avatar = styled.img<MarginBottom>`
    max-width: 250px;
    height: 250px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #D9D9D9;
    margin: 0 0 ${({ $mb }) => $mb || 0} 0;
    width: 100%;
`
export const ButtonRight = styled(Button)`
    margin-left: auto;
    margin-top: auto;
    @media screen and (max-width: 767px) {
        width: 100%;
        max-width: 250px;
        height: 38px;
    }
`
export const Title = styled.h2<MarginBottom>`
    margin: 0 0 ${({ $mb }) => $mb || 0} 0;
    color: #000;
    font-family: Inter-bold;
    font-size: 32px;
    @media screen and (max-width: 767px) {
        font-size: 24px;
    }
`
export const Subtitle = styled.h2<MarginBottom>`
    Text-align: center;
    margin: 0 0  ${({ $mb }) => $mb || 0} 0;
    color: #000;
    font-family: Inter-bold;
    font-size: 20px;
    @media screen and (max-width: 992px) {
        font-size: 18px;
    }
    @media screen and (max-width: 767px) {
        font-size: 16px;
    }
`
export const Name = styled.h5<MarginBottom>`
    margin: 0 0  ${({ $mb }) => $mb || 0} 0;
    color: #6B6A6E;
    font-family: Inter-regular;
    @media screen and (max-width: 767px) {
        font-size: 10px;
    }
`
export const Fullname = styled.h5<MarginBottom>`
    margin: 0 0  ${({ $mb }) => $mb || 0} 0;
    color: #000;
    font-family: Inter-bold;
    font-size: 20px;
    @media screen and (max-width: 992px) {
        font-size: 16px;
    }
    @media screen and (max-width: 767px) {
        font-size: 14px;
    }
`
export const Text = styled.p<TextStyles>`
    font-family: Inter-bold;
    font-size: 14px;
    color: #000;
    ${props => props.$gray ? 'opacity: 0.6;' : ''}
    margin: 0 0  ${({ $mb }) => $mb || 0} 0;
    @media screen and (max-width: 767px) {
        text-align: center;
        font-size: 14px;
    }
    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`
export const Veriified = styled.p<TextStyles>`
    color: #28D764;
    font-family: Inter-regular;
    font-size: 14px;
    margin: 0 0  ${({ $mb }) => $mb || 0} 0;
    @media screen and (max-width: 767px) {
        font-size: 12px;
    }
`
//<--- Complaints --->//
export const ComplaintsWrapper = styled.div`
    border-radius: 10px;
    background: #FBF9F9;
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.10) inset;
    margin: 0 0 30px 0;
    padding: 20px;
    height: 320px;
    overflow-y: scroll;
`
export const ComplaintsRow = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(1, 1fr);
    color: #000;
    font-family: Inter-regular;
    font-size: 14px;
    opacity: 0.6;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.02);
    align-items: center;
    padding:15px;
    gap: 5px;
    @media screen and (max-width: 767px) {
        padding:10px;
        font-size: 12px;
    }
    `
export const ComplaintsItem = styled(ComplaintsRow)`
    border-radius: 10px;
    border: 1px solid #FF9C00;
    background: #FFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.02);
    margin: 0 0 10px 0;
    &:hover {
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
    }
`
//<--- Description --->//
export const ProductDescription = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 20px;
    list-style: none;
    width: 100%;
    align-items: center;
    @media screen and (max-width: 767px) {
        justify-items: center;
    }
`
export const AccountDescription = styled.ul`
    display: flex;
    column-gap: 16px;
    row-gap: 20px;
    list-style: none;
    width: 100%;
    margin: 0 0 20px 0;
    @media screen and (max-width: 767px) {
        justify-items: center;
    }
`
export const DescriptionItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: start;
`
export const DescriptionSelectItem = styled(DescriptionItem)`
    grid-area: 4 / 2 / 5 / 3; 
`
export const Select = styled.select`
    height: 30px;
    margin: 0 0 0 0;
    padding: 0 0 0 7px;
    font-size: 14px;
    width: 160px;
    border-radius: 9px;
    border: 1px solid #6F6F6F;
    background: #FFF;
    color: #636363;
    font-family: Inter-regular;
    &:focus {
        box-shadow: 0px 0px 8px -5px rgba(0,0,0,0.75);
        border: 1px solid rgba(0, 0, 0, 0.8);
    }
    @media screen and (max-width: 767px) {
        width: 100px;
    }
`
export const Id = styled.div`
    grid-area: 1 / 1 / 2 / 3; 
    @media screen and (max-width: 767px) {
        grid-area: 1 / 1 / 2 / 5; 
    }
    @media screen and (max-width: 480px) {
        grid-area: 1 / 1 / 2 / 7; 
    }
`
export const Subject = styled.div`
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    grid-area: 1 / 3 / 2 / 8; 
    @media screen and (max-width: 767px) {
        grid-area: 1 / 5 / 2 / 9;
    }
    @media screen and (max-width: 480px) {
        grid-area: 1 / 7 / 2 / 12;
    }
`
export const SentDate = styled.div`
    grid-area: 1 / 8 / 2 / 12;
    @media screen and (max-width: 767px) {
        grid-area: 1 / 9 / 2 / 12;
    }
    @media screen and (max-width: 480px) {
        display: none;
    }
`
export const LeftAccDesc = styled.div`
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 767px) {
        justify-items: center;
    }
`
export const RightAccDesc = styled.div`
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`