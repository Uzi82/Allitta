import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 25px;
`;

export const ContentBackground = styled.div`
    position: relative;
`;
export const BackgroundImg = styled.img`
    border-radius: 15px;
    @media screen and (max-width: 1240px) {
        width: calc(100% - 10px);
        height: 250px;
        object-fit: cover;
        object-position: center;
        margin: 0 5px;
    }
`
export const Avatar = styled.img`
    position: absolute;
    left: 92px;
    width: 265px;
    height:265px;
    bottom: -132px;
    border-radius: 50%;
    border: 5px solid white;    
    background-color: white;
    @media screen and (max-width: 1240px) {
        left: 15px;
        width: 20vw;
        height: 20vw;
        bottom: 0;
        top: 150px;
    }
    @media screen and (max-width: 450px) {
        left: 15vw;
        width: 70vw;
        height: 70vw;
        bottom: 0;
        top: 50px;
    }
`;
export const InfoWrapper = styled.div`
    margin-top: 20px;
    margin-left: 400px;
    @media screen and (max-width: 1240px) {
        margin-left: 30vw;
    }
    @media screen and (max-width: 450px) {
        margin: 100px auto 0 auto;
    }
`
export const ShopInfo= styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 450px) {
        justify-content: center;
    }
`
export const Name = styled.h4`
    font-size: 32px;
    font-family: Inter-Bold, sans-serif;
    @media screen and (max-width: 540px) {
        font-size: 20px;
    }
`;
export const Rating = styled.span`
    background-color: #B3F594;
    border-radius:5px;
    padding: 3px 14px;
    margin-left: 20px;
    text-transform: uppercase;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
`;
export const ShopDescription = styled.div`
    margin-top: 46px;
    @media screen and (max-width: 1240px) {
        margin: 46px 10px 0 10px;
    }
`
export const Title = styled.h3`
    font-size: 20px;
    font-family: Inter-Regular, sans-serif;
    @media screen and (max-width: 450px) {
        font-size: 16px;
    }
`;

export const Description = styled.p`
    max-width: 1100px;
    font-size: 16px;
    color: #3E3E3E;
    font-family: Inter-Regular, sans-serif;
    margin: 10px 0 40px 0;
    @media screen and (max-width: 450px) {
        font-size: 14px;
    }
`