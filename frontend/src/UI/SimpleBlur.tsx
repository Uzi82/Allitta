import styled from "styled-components";

const Bg = styled.div<{ $active: boolean, $fixed?: boolean }>`
    display: ${({ $active }) => $active ? 'flex' : 'none'};
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9999999999999999;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100%;
    backdrop-filter: blur(10px);
    animation-name: appear;
    animation-duration: 300ms;
    padding: 10px;
    ${
        ({ $fixed }) => $fixed === true && 'position: fixed;'
    }
    @keyframes appear {
        0%{
            opacity: 0
        }
        100%{
            opacity: 1
        }
    }
`

const Content = styled.div<{ $customWidth?: boolean }>`
    width: ${({ $customWidth })=> $customWidth ? `fit-content` : `1110px` };
    min-height: 100px;
    border-radius: 15px;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.60);
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.20);
    backdrop-filter: blur(50px);
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1120px) {
        ${({ $customWidth })=> !$customWidth && `width: 100%;` };
    }
`

type Props = {
    children: React.ReactNode,
    active: boolean,
    customWidth?: boolean,
    bgoff?: boolean,
    fixed?: boolean
}

export const SimpleBlur: React.FC<Props> = ({ children, active, customWidth, bgoff, fixed }) => {
    if(!bgoff) return <Bg $fixed $active={active} ><Content $customWidth={customWidth}>{children}</Content></Bg>
    else return <Bg $active={active}>{children}</Bg>
}