import styled from "styled-components";

export const Container = styled.div`
    padding: 35px 44px 20px 0px;
    width: calc(100vw - 250px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 100%;
        padding: 10px;
    }
    @media screen and (max-width: 766px) {
        width: 100%;
        padding: 10px;
    }
`

export const Stats = styled.div`
    display: flex;
    width: 100%;
    column-gap: 24px;
    row-gap: 20px;
    @media screen and (max-width: 766px) {
        flex-direction: column;
    }
`

export const Line = styled.div`
    height: 1px;
    width: 100%;
    background: #E3E3E3;
`

export const Btn = styled.button`
    width: 325px;
    height: 163px;
    border-radius: 9px;
    padding: 20px;
    background: rgba(93, 32, 214, 0.5);
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    cursor: pointer;
    transition-duration: 300ms;
    color: white;
    &:hover {
        box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.5);
    }
    @media screen and (max-width: 1400px) and (min-width: 1024px) {
        width: 200px;
        height: 121px;
    }
    @media screen and (max-width: 1023px) and (min-width: 767px) {
        width: 200px;
        height: 121px;
    }
    @media screen and (max-width: 766px) {
        width: 48%;
        height: 120px;
    }
`
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
export const Accounts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    @media screen and (max-width: 1023px)  {
    }
`
export const AccountsHeader = styled.div`
    display: flex;
    gap:16px;
    align-items: center;
    width: 100%;
    padding: 16px 20px;
    @media screen and (max-width: 1023px)  {
        padding: 16px 10px;
    }
`
export const AccountsItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap:16px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    background: #FFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.02);
    padding: 16px 20px;
    transition: box-shadow .1s ease-in-out;
    @media screen and (max-width: 1023px)  {
        padding: 16px 10px;
    }
    &:hover {
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
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

