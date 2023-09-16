import { FooterContent, FooterDiv, Contact, ContactText } from "./styled"
import { Logo } from '../'

export const Footer: React.FC = () => {
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