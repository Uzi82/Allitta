import { FooterContent, FooterDiv, Contact, ContactText, ContactHeader, ContactDescription, PagesCategories, PagesCategoriesHeader, PagesCategoriesElement, EmailDiv, EmailInput, EmailSend, EmailDescription } from "./styled"
import { Logo } from '../'

export const Footer: React.FC = () => {
    return(
        <FooterDiv>
            <FooterContent>
                <Contact>
                    <Logo color='white'>ALLITTA</Logo>
                    <ContactText>
                        <ContactHeader>Contact Us</ContactHeader>
                        <ContactDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</ContactDescription>
                        <ContactDescription>info@sanakin.lk</ContactDescription>
                        <ContactDescription>+011 2 345 678</ContactDescription>
                    </ContactText>
                </Contact>
                <PagesCategories>
                    <PagesCategoriesHeader>Pages</PagesCategoriesHeader>
                    <PagesCategoriesElement to={'/'}>Home</PagesCategoriesElement>
                    <PagesCategoriesElement to={'/'}>Shop Online</PagesCategoriesElement>
                    <PagesCategoriesElement to={'/'}>Shop Online</PagesCategoriesElement>
                    <PagesCategoriesElement to={'/'}>Contact us</PagesCategoriesElement>
                    <PagesCategoriesElement to={'/'}>About us</PagesCategoriesElement>
                    <PagesCategoriesElement to={'/'}>What’s New</PagesCategoriesElement>
                    <PagesCategoriesElement to={'/'}>Most Popular</PagesCategoriesElement>
                    <PagesCategoriesElement to={'/'}>Best Selling</PagesCategoriesElement>
                </PagesCategories>
                <PagesCategories>
                    <PagesCategoriesHeader>Categories</PagesCategoriesHeader>
                    <PagesCategoriesElement to={'/'}>Category 1</PagesCategoriesElement>
                    <PagesCategoriesElement to={'/'}>Category 2</PagesCategoriesElement>
                    <PagesCategoriesElement to={'/'}>Category 3</PagesCategoriesElement>
                    <PagesCategoriesElement to={'/'}>Category 4</PagesCategoriesElement>
                    <PagesCategoriesElement to={'/'}>Category 5</PagesCategoriesElement>
                </PagesCategories>
                <PagesCategories>
                    <PagesCategoriesHeader>News Latter Subscription</PagesCategoriesHeader>
                    <EmailDescription>Get the Latest Products & Best
Deals <br/> in Your Inbox as First Person</EmailDescription>
                    <EmailDiv>
                        <EmailInput maxLength={30}/>
                        <EmailSend>Submit</EmailSend>
                    </EmailDiv>
                </PagesCategories>
            </FooterContent>
        </FooterDiv>
    )
}