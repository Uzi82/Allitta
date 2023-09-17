import { Content, Contact, ContactText, ContactHeader, ContactDescription, PagesCategories, PagesCategoriesHeader, PagesCategoriesElement, EmailDiv, EmailInput, EmailSend, EmailDescription } from "./styled"
import { BlockCenter, Logo, links } from '../'

export const Footer: React.FC = () => {
    return(
        <BlockCenter background="#393434">
            <Content>
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
                    {
                        links?.length > 0
                            ? links[0].map(el=><PagesCategoriesElement key={el.id} to={el.path}>{el.title}</PagesCategoriesElement>)
                            : <></>
                    }
                </PagesCategories>
                <PagesCategories>
                    <PagesCategoriesHeader>Categories</PagesCategoriesHeader>
                    {
                        links?.length > 0
                            ? links[1].map(el=><PagesCategoriesElement key={el.id} to={el.path}>{el.title}</PagesCategoriesElement>)
                            : <></>
                    }
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
            </Content>
        </BlockCenter>
    )
}