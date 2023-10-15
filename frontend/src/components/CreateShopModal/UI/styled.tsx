import styled from "styled-components";

export const Container = styled.form`
    min-width: 650px;
    padding: 40px 50px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media screen and (max-width: 767px) {
        width: 100%;
        min-width: 100%;
        padding: 20px;
    }
`

export const Title = styled.div`
    color: #000;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 100%;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const Part = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const PartTitle = styled.h1`
    color: #000;
    font-family: Inter-Regylar, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 0 6px;
`

export const Input = styled.input<{ $half?: boolean }>`
    width: ${({ $half })=> $half ? "48%" : "100%"};
    padding: 14px;
    color: black;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border-radius: 10px;
    border: 1px solid black;
    background: rgba(255, 255, 255, 0.80);
    backdrop-filter: blur(10px);
    opacity: 0.6;
    transition-duration: 300ms;
    &:focus {
        opacity: 1;
        border-color: #5D20D6;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`

export const HiddenInput = styled.input`
    display: none;
`

export const TwoInputs = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        gap: 10px;
    }
`

export const SubmitBtn = styled.button`
    width: 100%;
    height: 45px;
    color: #FFF;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 10px;
    border: 2px solid #5D20D6;
    background: #5D20D6;
    transition-duration: 300ms;
    cursor: pointer;
    &:hover {
        color: #5D20D6;
        background: none;
    }
`

export const SkipBtn = styled.button`
    width: 100%;
    height: 45px;
    color: #5D20D6;
    text-align: center;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 10px;
    background: none;
    transition-duration: 300ms;
    cursor: pointer;
    &:hover {
        color: white;
        background: #5D20D6;
    }
`

export const Btns = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const LogoContainer = styled.div`
    position: relative;
    min-width: 315px;
    min-height: 315px;
    height: 315px;
    width: 315px;
    align-self: center;
`

export const Logo = styled.input<{ $hidden?: boolean }>`
    content-visibility: hidden;
    background-image: ${({ $hidden }) => $hidden ? `none` : `url(${require('./addLogo.png')})`} ;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    ${({ $hidden }) => $hidden && `position: absolute; z-index: 999;`}
`

export const LogoImg = styled.div<{ $logo?: string }>`
    position: absolute;
    z-index: 30;
    min-width: 100%;
    min-height: 100%;
    border-radius: 50%;
    top: 0;
    left: 0;
    background-image: url(${({ $logo }) => $logo !== undefined && $logo});
    background-repeat: no-repeat;
    background-position: center;
    background-clip: content-box;
    background-size: 100% auto;
`

export const BannerContainer = styled.div`
    position: relative;
    min-width: 644px;
    min-height: 243px;
    width: 644px;
    height: 243px;
    align-self: center;
    @media screen and (max-width: 767px) {
        min-width: 80vw;
        min-height: calc(85vw / 2.650205761316872);
        width: 80vw;
        height: calc(85vw / 2.650205761316872)
    }
`

export const Banner = styled.input<{ $hidden?: boolean }>`
    content-visibility: hidden;
    background-image: ${({ $hidden }) => $hidden ? `none` : `url(${require('./addBanner.png')})`} ;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    ${({ $hidden }) => $hidden && `position: absolute; z-index: 999;`}
`

export const BannerImg = styled.input<{ $banner?: string }>`
    position: absolute;
    z-index: 30;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
    background-image: url(${({ $banner }) => $banner !== undefined && $banner});
    background-repeat: no-repeat;
    background-position: center;
    background-clip: content-box;
    background-size: 100% auto;
`