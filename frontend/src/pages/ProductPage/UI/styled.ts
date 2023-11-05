import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 1100px;
    gap: 40px;
    margin: 10px 0;
    @media screen and (max-width: 1100px) {
        width: calc(100% - 10px);
        margin: 10px 5px;
    }
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    height: fit-content;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Images = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: fit-content;
`

export const Image = styled.img`
    width: 455px;
    height: 455px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    background: #D9D9D9;
    @media screen and (max-width: 1100px) {
        width: 30vw;
        height: 30vw;
    }
    @media screen and (max-width: 768px) {
        width: 95vw;
        height: 95vw;
    }
`

export const ImageList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const SmallImage = styled.img`
    width: 74px;
    height: 74px;
    object-fit: cover;
    object-position: center;
    border-radius: 3px;
    background: #D9D9D9;
    @media screen and (max-width: 1100px) {
        width: 5vw;
        height: 5vw;
    }
    @media screen and (max-width: 768px) {
        width: 18vw;
        height: 18vw;
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px 0 0 0;
    height: 100%;
    width: calc(100% - 455px - 20px);
    @media screen and (max-width: 1100px) {
        width: calc(70vw - 40px);
    }
    @media screen and (max-width: 768px) {
        width: 95vw;
    }
`

export const Names = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ShopName = styled.h3`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const ProductName = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const PriceContent = styled.div`
    display: inline-block;
`

export const Price = styled.span`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Piece = styled.span`
    color: #010101;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const Rating = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const RatingTitle = styled.h3`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Stars = styled.div`
    display: flex;
    gap: 10px;
`

export const Star = styled.span<{ $active?: boolean }>`
    width: 25px;
    height: 25px;   
    background-image: url(${require('./star.png')});
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: inherit;
    opacity: ${({ $active }) => $active ? '1' : '0.7'};
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const DescriptionTitle = styled.h2`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const DescriptionText = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const AddToCart = styled.button`
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 17px 82px;
    width: fit-content;
    margin-bottom: 0;
    border-radius: 10px;
    background: #5D20D6;
    position: relative;
    overflow-x: hidden;
`

export const Flare = styled.span<{ $status: boolean }>`
    position: absolute;
    top: 0;
    height: 100%;
    width: 45px;
    transform: skewX(-45deg); // Наклон
    left: -150%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
    ${({ $status }) => $status && `animation: flareAnimation 1s infinite linear;`} // Время и тип анимации можно менять
    @keyframes flareAnimation {
        0% {
            left: -150%;
        }
        50% {
            left: 150%;
        }
        100% {
            left: 150%;
        }
    }
`

export const CartImage = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${require('./cart.png')});
`

export const CartText = styled.h1`
    color: #FFF;
    font-family: Inter-Bold, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const CategoryProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
`

export const Category = styled.h1`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

export const Products = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
        flex-wrap: wrap;
        gap: 10px;
        justify-content: space-around;
        align-items: center;
    }
`

export const Top = styled.div`
    display: grid;
    grid-template-columns: 40% 50%;
    align-items: center;
    justify-content: space-between;
    width: 1100px;
    @media screen and (max-width: 1100px) {
        width: calc(100% - 10px);
        margin: 0 5px;
    }
    @media screen and (max-width: 570px) {
        flex-direction: column;
        margin: 10px 0 0 0;
        grid-template-columns: 100%;
        grid-template-rows: auto auto;
    }
`

export const CategoriesConteiner = styled(Link)`
    display: flex;
    align-items: center;
    gap: 20px;
    text-decoration: none;
`

export const CategoriesTitle = styled.h1`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const CategoriesImg = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
    object-position: center;

`