import styled from "styled-components";
import { MarginBottom, TextStyles } from "../models/types";
import { Button } from "../../../UI/Button"

export const Wrapper = styled.div`
    max-width: 1100px;
    width: 100%;
    height: 100%;
    padding:50px 50px 40px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.60);
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(50px);
`
export const InfoWrapper = styled.div`
    margin: 0 0 30px 0;
    display: flex;
    gap: 40px;
`
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
    `
export const ComplaintsItem = styled(ComplaintsRow)`
    border-radius: 10px;
    border: 1px solid #FF9C00;
    background: #FFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.02);
    margin: 0 0 10px 0;
`
export const Id = styled.div`
    grid-area: 1 / 1 / 2 / 3; 
`
export const Subject = styled.div`
white-space: nowrap; 
overflow: hidden; 
text-overflow: ellipsis;
    grid-area: 1 / 3 / 2 / 8; 
`
export const SentDate = styled.div`
    grid-area: 1 / 8 / 2 / 12;
`
export const ProductAvatar = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 250px;
    align-items: start;
    margin: 0 0 0 0;
`
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 0 0;
`
export const DescriptionStyled = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 20px;
    list-style: none;
`

export const DescriptionItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const DescriptionSelectItem = styled.li`
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
    @media screen and (max-width: 980px) {
    }
    @media screen and (max-width: 767px) {
    }
`
export const RatingStarsStyled = styled.div`
    display: flex;
    gap: 12px;
`
export const Img = styled.img`
    width: 250px;
    height: 250px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #D9D9D9;
    margin: 0 0 20px 0;
`
export const ButtonRight = styled(Button)`
    margin-left: auto;
`
export const Title = styled.h2<MarginBottom>`
    margin: 0 0 ${({ $mb }) => $mb || 0} 0;
    color: #000;
    font-family: Inter-bold;
    font-size: 32px;
`
export const Subtitle = styled.h2<MarginBottom>`
    Text-align: center;
    margin: 0 0  ${({ $mb }) => $mb || 0} 0;
    color: #000;
    font-family: Inter-bold;
    font-size: 20px;
`
export const Name = styled.h5<MarginBottom>`
    margin: 0 0  ${({ $mb }) => $mb || 0} 0;
    color: #6B6A6E;
    font-family: Inter-regular;
`
export const Text = styled.p<TextStyles>`
    font-family: Inter-bold;
    font-size: 14px;
    color: #000;
    ${props => props.$gray ? 'opacity: 0.6;' : ''}
    margin: 0 0  ${({ $mb }) => $mb || 0} 0;
`