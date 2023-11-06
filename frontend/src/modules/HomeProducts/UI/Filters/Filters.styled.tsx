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
export const Title = styled.h2<{ mb?: string }>`
    font-family: Inter-bold, sans-serif;
    font-weight: 700;
    margin: 0 0 ${({ mb }) => mb ? mb : '0'} 0;
`
export const ButtonReset = styled.button`
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
export const Divider = styled.div<{ mb?: string }>`
    height: 1px;
    width: 100%;
    background: #DCDCDC;
    margin: 0 0 ${({ mb }) => mb ? mb : '0'} 0;
`
export const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    margin-bottom: 20px;
`
export const PriceInput = styled.input.attrs({ type: "range" })`
    border-radius: 13px;
    -webkit-appearance: none;  
    width: 100%;  
    height: 6px;   
    border: none; 
    border-radius: 4px; 
    outline: none;  
    border-radius: 13px;
    background: transparent;
    position: relative;
    &::-webkit-slider-thumb {
        -webkit-appearance: none; 
        width: 10px; 
        height: 10px; 
        background: #5D20D6; 
        border-radius: 100%; 
        cursor: pointer; 
        fill: #5D20D6;
        stroke-width: 2px;
        stroke: #FFF;
    }
    &::-webkit-slider-runnable-track {
        width: 100%;
        cursor: pointer;
        background: #5D20D630;
        border-radius: 13px;
      }
      
      &::-moz-range-track {
        width: 100%;
        cursor: pointer;
        background: #5D20D630;
        border-radius: 13px;
      }
      
      &::-ms-track {
        width: 100%;
        cursor: pointer;
        background: #5D20D630;
        border-radius: 13px;
      }
      &::-ms-fill-lower {
        background: #5D20D630;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
      }
      &:focus::-ms-fill-lower {
        background: #5D20D630;
      }
      &::-ms-fill-upper {
        background: #5D20D60;
        border-radius: 2.6px;
      }
      &:focus::-ms-fill-upper {
        background: #5D20D60;
      }
`
export const MaxPriceTitle = styled.p`
font-family: Inter-regular, sans-serif;
font-size: 12px;
`
export const PriceSelect = styled.select`
    font-size: 14px;
    font-family: Inter-regular;
    padding: 4px 24px 4px 10px;
    position: relative;
    border-radius: 5px;
    border: 1px solid #5D20D6;
    background: transparent;
    font-size: 14px;
    appearance: none;
    &::after {
        content: ">"; 
        position: absolute;
        top: 0;
        right: 0; 
        width: 20px;
        height: 20px;
  }
    &::placeholder {
        text-transform: capitalize;
        color: #BEBEBE;
    }
    &:focus {
        box-shadow: 0px 0px 8px -5px rgba(0,0,0,1);
    }
    @media screen and (max-width: 980px) {
    }
    @media screen and (max-width: 767px) {
    }
    
`
export const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const RadioGroupHeader = styled.div`
    display: flex;  
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 10px;
`
export const RadioGroupTitle = styled.h3`
`
export const RadioGroupExpand = styled.div`
`
export const RadioGroupElement = styled.input`
`
