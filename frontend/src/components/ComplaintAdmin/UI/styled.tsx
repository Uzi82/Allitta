import styled from "styled-components";


//<--- Complaints --->//
export const Wrapper = styled.div`
    padding: 50px;
    @media screen and (max-width: 1400px) and (min-width: 1023px) {
        padding: 40px 30px;
    }
    @media screen and (max-width: 992px) and (min-width: 768px) {
        padding: 40px 25px;
    }
    @media screen and (max-width: 767px) and (min-width: 480px) {
        padding: 30px 15px;
    }
    @media screen and (max-width: 480px) {
        padding: 20px 5px;
    }
`
export const ComplaintsRow = styled.div`
    display: flex;
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
export const ComplaintItem = styled(ComplaintsRow)`
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    background: #FFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.02);
    margin: 0 0 10px 0;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    transition: box-shadow 0.2s ease,border 0.2s ease;
    cursor: pointer;
    &:hover {
        border: 1px solid #FF9C00;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
    }
`
export const Id = styled.div`
    flex: 0 0 15%;
    @media screen and (max-width: 767px) {
        flex: 0 0 20%;
    }
    @media screen and (max-width: 480px) {
        flex: 0 0 33%;
    }
`
export const Subject = styled.div`
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    flex: 0 0 40%;
    @media screen and (max-width: 767px) {
        flex: 0 0 33%;
    }
    @media screen and (max-width: 480px) {
    }
`
export const SentDate = styled.div`
    flex: 0 0 20%;
    @media screen and (max-width: 767px) {
    }
    @media screen and (max-width: 480px) {
        display: none;
    }
`
export const KindOf = styled.div`
    flex: 1 0 20%;
    @media screen and (max-width: 767px) {
    }
    @media screen and (max-width: 480px) {
        flex: 0 0 25%;
    }
`
export const SeeMoreWrapper = styled.div`
    flex: 0 0 auto;
    @media screen and (max-width: 767px) {
    }
    @media screen and (max-width: 480px) {
    }
`
