import { FooterContent, FooterDiv, Contact, ContactText, ContactHeader, ContactDescription, PagesCategories, PagesCategoriesHeader, PagesCategoriesElement, EmailDiv, EmailInput } from "./styled"
import { Logo, Link } from '../'

export const Footer: React.FC = () => {
    return(
        <FooterDiv>
            <FooterContent>
                <Contact>
                    <Logo color='#5D20D6'>ALLITTA</Logo>
                    <ContactText>
                        <ContactHeader>Contact Us</ContactHeader>
                        <ContactDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</ContactDescription>
                        <ContactDescription>info@sanakin.lk</ContactDescription>
                        <ContactDescription>+011 2 345 678</ContactDescription>
                    </ContactText>
                </Contact>
                <PagesCategories>
                    <PagesCategoriesHeader>Pages</PagesCategoriesHeader>
                    <Link to={'/'}><PagesCategoriesElement>Home</PagesCategoriesElement></Link>
                    <Link to={'/'}><PagesCategoriesElement>Shop Online</PagesCategoriesElement></Link>
                    <Link to={'/'}><PagesCategoriesElement>Shop Online</PagesCategoriesElement></Link>
                    <Link to={'/'}><PagesCategoriesElement>Contact us</PagesCategoriesElement></Link>
                    <Link to={'/'}><PagesCategoriesElement>About us</PagesCategoriesElement></Link>
                    <Link to={'/'}><PagesCategoriesElement>What’s New</PagesCategoriesElement></Link>
                    <Link to={'/'}><PagesCategoriesElement>Most Popular</PagesCategoriesElement></Link>
                    <Link to={'/'}><PagesCategoriesElement>Best Selling</PagesCategoriesElement></Link>
                </PagesCategories>
                <PagesCategories>
                    <PagesCategoriesHeader>Categories</PagesCategoriesHeader>
                    <Link to={'/'}><PagesCategoriesElement>Category 1</PagesCategoriesElement></Link>
                    <Link to={'/'}><PagesCategoriesElement>Category 2</PagesCategoriesElement></Link>
                    <Link to={'/'}><PagesCategoriesElement>Category 3</PagesCategoriesElement></Link>
                    <Link to={'/'}><PagesCategoriesElement>Category 4</PagesCategoriesElement></Link>
                    <Link to={'/'}><PagesCategoriesElement>Category 5</PagesCategoriesElement></Link>
                </PagesCategories>
                <PagesCategories>
                    <PagesCategoriesHeader>News Latter Subscription</PagesCategoriesHeader>
                    <PagesCategoriesElement>Get the Latest Products & Best
Deals <br/> in Your Inbox as First Person</PagesCategoriesElement>
                    <EmailDiv>
                        <EmailInput />
                    </EmailDiv>
                </PagesCategories>
            </FooterContent>
        </FooterDiv>
    )
}