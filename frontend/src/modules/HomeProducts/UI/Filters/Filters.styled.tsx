import styled from "styled-components"

export const Wrapper = styled.div`
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 262px;
    padding: 20px;
    display: flex;
    flex-direction: column;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 20px;
`
export const Title = styled.h2<{ $mb?: string }>`
    font-family: Inter-bold, sans-serif;
    font-weight: 700;
    margin: 0 0 ${({ $mb }) => $mb ? $mb : '0'} 0;
`
export const ButtonReset = styled.button.attrs({ type: 'button' })`
    font-family: Inter-regular, sans-serif;
    font-size: 14px;
    padding: 4px 11px;
    border-radius: 5px;
    border: 1px solid #5D20D6;
    background: rgba(255, 255, 255, 0.00);
    cursor: pointer;
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
    &:hover {
        background: #5D20D6;
        color: #fff;
}
`
export const Divider = styled.div<{ $mb?: string }>`
    height: 1px;
    width: 100%;
    background: #DCDCDC;
    margin: 0 0 ${({ $mb }) => $mb ? $mb : '0'} 0;
`

