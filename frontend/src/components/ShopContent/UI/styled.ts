import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 25px;
`;

export const ContentBackground = styled.div`
    position: relative;
`;
export const BackgroundImg = styled.img`
border-radius: 15px;

`
export const Avatar = styled.img`
    position: absolute;
    left: 92px;
    width: 265px;
    height:265px;
    bottom: -132px;
    border-radius: 50%;
    border: 5px solid white;    
`;
export const InfoWrapper = styled.div`
    margin-top: 20px;
    margin-left: 400px;
`
export const ShopInfo= styled.div`
   display: flex;
   align-items: center;
`;
export const Name = styled.h4`
    font-size: 32px;
    font-family: Inter-Bold, sans-serif;
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
`
export const Title = styled.h3`
    font-size: 20px;
    font-family: Inter-Regular, sans-serif;
`;

export const Description = styled.p`
    max-width: 1100px;
    font-size: 16px;
    color: #3E3E3E;
    font-family: Inter-Regular, sans-serif;
    margin: 10px 0 40px 0;
`