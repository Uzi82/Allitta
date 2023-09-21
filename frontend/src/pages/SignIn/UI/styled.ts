import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
`

export const LeftContent = styled.div`
    flex: 1 1 45%;
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 96px;
    padding: 90px 20px;
    border-right: 1px solid rgba(0, 0, 0, 0.80); 
    background: rgba(255, 255, 255, 0.95);
    mix-blend-mode: screen;
    backdrop-filter: blur(2px);
`
export const RightContent = styled.div`
    flex: 1 1 55%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 130px 24px;
    background:linear-gradient(90deg, rgba(93,32,214,1) 1%, rgba(64,34,122,0.95) 100%);
`
export const Authorization = styled.div`
    flex: 1 1 55%;
    display: flex;
    flex-direction: column;
    gap: 32px;
`
export const Text = styled.p`
    color: #FFF;
    font-family: Inter;
    font-size: 24px;
    font-weight: 700;
    max-width:564px;
`
export const BackgroundImage = styled.div`
    background: url('./assets/Gray.png');
    position: absolute;
    bottom: 0;
    right: 0;
`


