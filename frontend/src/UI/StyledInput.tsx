import styled from "styled-components"

const Div = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    align-items: center;
    justify-content: flex-end;
`

const Input = styled.input<{ $width: string, $heigth: number }>`
    padding: 3px 100px 3px 20px;
    width: ${({$width}) => `${$width}`};
    height: ${({$heigth}) => `${$heigth}px`};
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
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        font-size: 14px;
        padding: 3px 70px 3px 10px;
    }
`

const Send = styled.button<{ $changecolor: string }>`
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
        ${({$changecolor}) => $changecolor && `color: ${$changecolor}`}
    }
    @media screen and (min-width: 767px) and (max-width: 1120px) {
        width: 57px;
        height: 23px;
        font-size: 11px;
    }
`

export const StyledInput = ({btnText = 'Send', width = '256px' , heigth = 45, chngClr, placeholder = '', onChange, value, onClick }: {btnText?: string, width?: string, heigth?: number, chngClr?: boolean, placeholder?: string, onChange?: React.ChangeEventHandler<HTMLInputElement>, value?: string, onClick?: React.MouseEventHandler<HTMLButtonElement> }) => <Div>
    <Input onChange={onChange} value={value} placeholder={placeholder} $width={width} $heigth={heigth} maxLength={30}/>
    <Send onClick={onClick} $changecolor={chngClr ? '#5D20D6' : 'white'}>{btnText}</Send>
</Div>