import styled from "styled-components"



// <--- RadioGroup --->  //
export const RadioGroupStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const RadioGroupHeader = styled.div`
    display: flex;  
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`
export const RadioGroupList = styled.div<{ $isOpen: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all 0.2s ease-in-out;
    position: relative;
    margin-bottom: ${({ $isOpen }) => $isOpen ? '0' : '20px'} ;
    transform: translateX(${({ $isOpen }) => $isOpen ? '-100%' : 0});
    max-height: ${({ $isOpen }) => $isOpen ? '0px' : '200px'};
    opacity: ${({ $isOpen }) => $isOpen ? 0 : 1};
    @media (max-width: 768px) {
      transform: translateX(${({ $isOpen }) => $isOpen ? '100%' : 0});
  }
`
export const RadioGroupExpand = styled.div<{ $isOpen: boolean }>`
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    transform: rotate(${({ $isOpen }) => $isOpen ? 0 : '-90deg'});
`
export const RadioGroupElement = styled.input`
`
// </--- RadioGroup ---/>  //

// <--- Price --->  //
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
`
// </--- Price ---/>  //
