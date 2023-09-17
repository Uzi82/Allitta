import styled from 'styled-components'

export const FooterDiv = styled.div`
    background: #393434;
    width: 100vw;
    height: 416px;
    display: flex;
    justify-content: center;
`

export const FooterContent = styled.div`
    width: 1108px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 0;
`

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ContactText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ContactHeader = styled.div`
    margin: 10px 0;
    color: #5D20D6;
    font-family: Inter-Bold, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const ContactDescription = styled.div`
    color: #FFF;
    width: 262px;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const PagesCategories = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const PagesCategoriesHeader = styled.div`
    color: #5D20D6;
    font-family: Inter-Bold, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 10px 0;
`

export const PagesCategoriesElement = styled.div`
    color: #FFF;
    font-family: Inter-Regular, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
export const EmailDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
`

export const EmailInput = styled.input`
    padding: 3px 40px 3px 10px;
`