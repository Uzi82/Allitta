import styled from "styled-components";

const Content = styled.div`
    border-radius: 3px;
    background: #F8F3F3;
    width: 109px;
    height: 32px;
    padding: 4px;
    display: flex;
    justify-content: space-between;
`

const Btn = styled.button`
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    border-radius: 3px;
    width: 24px;
    height: 24px;
    border: 1px solid #5D20D6;
    background: #EFEFEF;
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transition-duration: 300ms;
    &:hover {
        background-color: #5D20D6;
        color: white;
    }
`

const Num = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

type Props = {
    value: number,
    increment: ()=>void,
    decrement: ()=>void
}

export const CartIncrement: React.FC<Props> = ({value, increment, decrement}) => {
    return(
        <Content>
            <Btn onClick={decrement}>-</Btn>
            <Num>{ value }</Num>
            <Btn onClick={increment}>+</Btn>
        </Content>
    )
}