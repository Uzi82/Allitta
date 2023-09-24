import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface BackLinkProps {
    $top?: string;
    $left?: string;
}

const BackLinkStyled = styled.img<BackLinkProps>`
    position: absolute;
    top: ${props => props.$top || 0};
    left: ${props => props.$left || 0};
    z-index: 5;
    cursor: pointer;
    padding:4px;
`

export const BackLink: React.FC<BackLinkProps> = (props) => {
    const navigate = useNavigate()
    return (
        <BackLinkStyled src={'/svg/back.svg'} alt="back" onClick={() => navigate(-1)}  {...props} />
    )
}