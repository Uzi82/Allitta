import styled from "styled-components"

const Div = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    align-items: center;
    justify-content: flex-end;
`

const Input = styled.input<{ width: number, heigth: number }>`
    padding: 3px 100px 3px 20px;
    width: ${({width}) => `${width}px`};
    height: ${({heigth}) => `${heigth}px`};
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(20px);
    color: #FFF;
    font-family: Inter-Regular, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::placeholder {
        color: #FFF;
    }
`

const Send = styled.button<{ changecolor: string }>`
    width: 87px;
    height: 35px;
    border-radius: 100px;
    background: #5D20D6;   
    position: absolute;
    transform: translateX(-5px);
    color: #FFF;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    border: 2px solid #5D20D6;
    transition-duration: 300ms;
    &:hover {
        background: none;
        border: 2px solid #5D20D6;
        ${({changecolor}) => changecolor && `color: ${changecolor}`}
    }
`

export const StyledInput = ({btnText = 'Send', width = 256 , heigth = 45, chngClr, placeholder = ''}: {btnText?: string, width?: number, heigth?: number, chngClr?: boolean, placeholder?: string}) => <Div>
    <Input placeholder={placeholder} width={width} heigth={heigth} maxLength={30}/>
    <Send changecolor={chngClr ? '#5D20D6' : 'white'}>{btnText}</Send>
</Div>