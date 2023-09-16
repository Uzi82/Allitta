import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../UI/Logo'

const FooterDiv = styled.div`
    background: #393434;
    width: 100vw;
    height: 416px;
    display: flex;
    justify-content: center;
`

const FooterContent = styled.div`
    width: 1108px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 0;
`

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const ContactText = styled.div`
    /* Will continue later */
`

const Footer: React.FC = () => {
    return(
        <FooterDiv>
            <FooterContent>
                <Contact>
                    <Logo color='#5D20D6'>ALLITTA</Logo>
                    <ContactText>

                    </ContactText>
                </Contact>
            </FooterContent>
        </FooterDiv>
    )
}

export default Footer