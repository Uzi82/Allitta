import { Link } from "react-router-dom";
import styled from "styled-components";

export const CustomLink = styled(Link) <CustomLinkStyles>`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '45px'};
    margin: 0 0 ${props => props.$mb || '0'} 0;

    display: flex;
    justify-content: ${props => props.$justify || 'center'};
    align-items: center;

    ${({ $transparent }) => !$transparent && `background-color: #5D20D6;`}
    border: 2px solid ${props => props.$transparent ? 'transparent' : '#5D20D6'} ;
    color: ${props => props.$transparent ? '#5D20D6' : '#FFF'};
    border-radius: ${props => props.$br || '10px'};
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    transition: background .2s ease-in-out, border .2s ease-in-out,color .2s ease-in-out;
    &:hover {
        background: transparent;
        border: 2px solid #5D20D6;
        color: #5D20D6
    }
`
type CustomLinkStyles = {
    $transparent?: boolean
    width?: string;
    height?: string;
    $mb?: string;
    $br?: string;
    $justify?: string
}
