import styled from "styled-components";

export const Text = styled.div`
    color: #000;
    font-family: Inter-regular;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.6;   
    @media screen and (max-width: 1023px)  {
        font-size: 12px;
    }
`
export const AccountsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    @media screen and (max-width: 1023px)  {
    }
`
export const Row = styled.div`
    display: flex;
    gap:16px;
    align-items: center;
    width: 100%;
    padding: 16px 20px;
    @media screen and (max-width: 1023px)  {
        padding: 16px 10px;
    }
`
export const AccountsItem = styled(Row)`
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    background: #FFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.02);
    transition: box-shadow .1s ease-in-out,box-shadow .1s ease-in-out;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
        border: 1px solid #5D20D6;);
        img {
            transform: rotate(90deg);
        }
    }
`
export const IdHeader = styled.h2`
    color: #000;
    font-family: Inter-bold;
    font-size: 24px;
    flex: 0 1 20%;
    @media screen and (max-width: 1240px) and (min-width: 1023px)  {
        flex: 0 1 23%;
        font-size: 20px;
    }
    @media screen and (max-width: 1023px) {
        font-size: 18px;
    }
    @media screen and (max-width:767px)  {
        flex: 1 1 30%;
        font-size: 16px;
    }
    @media screen and (max-width:480px)  {
        flex: 1 0 42%;
    }
`
export const Id = styled(Text)`
    flex: 0 1 20%;
    @media screen and (max-width: 1240px) and (min-width: 1023px)  {
        flex: 0 1 23%;
    }
    @media screen and (max-width:767px)  {
        flex: 1 1 30%;
    }
    @media screen and (max-width:480px)  {
        flex: 1 0 42%;
    }
`
export const CustomerName = styled(Text)`
    flex: 0 1 30%;
    @media screen and (max-width: 1240px)  {
        flex: 0 1 23%;
    @media screen and (max-width: 480px) {
        flex: 1 1 auto;
    }
}
`
export const Date = styled(Text)`
    flex: 0 1 18%;
    @media screen and (max-width:767px)  {
        display: none;
    }
`
export const VerificationType = styled(Text)`
    flex: 0 1 15%;
    @media screen and (max-width: 1240px) and (min-width: 1023px) {
    }
    @media screen and (max-width:767px)  {
        flex: 1 1 30%;
    }
    @media screen and (max-width:480px)  {
        display: none;
    }
`
export const TypeOfUser = styled(Text)`
    flex: 0 1 auto;
    @media screen and (max-width:767px)  {
        display: none;
    }
`
export const AccountButtonStyled = styled.button<{ type: 'verified' | 'new' | 'rejected' }>`
    width: 80px;
    height: 25px;
    border-radius: 5px;
    text-transform: capitalize;
    border: 1px solid ${({ type }) => type === 'verified' ? '#3DD598' : type === 'new' ? '#006CCF' : '#DD3A3A'};
    background: #FFF;
    color: ${({ type }) => type === 'verified' ? '#3DD598' : type === 'new' ? '#006CCF' : '#DD3A3A'};
    font-family: Inter-regular;
    font-size: 14px;
    @media screen and (max-width: 1023px)  {
}
`

