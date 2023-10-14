import styled from "styled-components";


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
