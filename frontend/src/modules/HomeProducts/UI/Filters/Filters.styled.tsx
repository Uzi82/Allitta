import styled from "styled-components"

export const Wrapper = styled.div`
    border-radius: 15px;
    background: #FFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 262px;
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        padding: 14px;
    }
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        margin-bottom: 0;
    }
`
export const Title = styled.h2<{ $mb?: string }>`
    font-family: Inter-bold, sans-serif;
    font-weight: 700;
    margin: 0 0 ${({ $mb }) => $mb ? $mb : '0'} 0;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`
export const ButtonReset = styled.button.attrs({ type: 'button' }) <{ $mb?: string }>`
    font-family: Inter-regular, sans-serif;
    font-size: 14px;
    padding: 4px 11px;
    border-radius: 5px;
    border: 1px solid #5D20D6;
    background: rgba(255, 255, 255, 0.00);
    cursor: pointer;
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
    margin: 0 0 ${({ $mb }) => $mb ? $mb : '0'} 0;
    &:hover {
        background: #5D20D6;
        color: #fff;
    }
    @media (max-width: 768px) {
        font-size: 12px;
        padding: 3px 10px;
    }
`
export const Divider = styled.div<{ $mb?: string }>`
    height: 1px;
    width: 100%;
    background: #DCDCDC;
    margin: 0 0 ${({ $mb }) => $mb ? $mb : '0'} 0;
`
export const OnDesctop = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`
export const OnMobile = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`
export const OpenFilters = styled.img`
    width: 28px;
    height: 28px;
`
export const Popup = styled.div<{ $isOpen: boolean, $dissapear: boolean }>`
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    background-color:  ${({ $isOpen }) => $isOpen ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)'}; 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease-in-out;
    transform: ${({ $dissapear }) => $dissapear ? 'scale(0)' : 'scale(1)'};
`
export const PopupContent = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    height: 100%;
    padding: 20px;
    overflow-y: auto;
    background: #fff;
    transition: transform 0.3s ease-in-out;
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
   
`

