import { Content, Contact, ContactText, ContactHeader, ContactDescription, PagesCategories, PagesCategoriesHeader, PagesCategoriesElement, EmailDescription, EmailHeader } from "./styled"
import { BlockCenter, Logo, StyledInput, links, sendEmail } from '../'
import { useState } from "react"
import { useMutation } from "react-query"

export const Footer: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const sendEmailQuery = useMutation((email: string)=> sendEmail(email))
    return(
        <BlockCenter $background="#393434">
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
                    <EmailHeader>News Latter Subscription</EmailHeader>
                    <EmailDescription>Get the Latest Products & Best
Deals <br/> in Your Inbox as First Person</EmailDescription>
                    <StyledInput value={email} onClick={()=>sendEmailQuery.mutate(email)} onChange={e=>setEmail(e.target.value)} width={'100%'} placeholder="Your Email Address" btnText="Submit"/>
                </PagesCategories>
            </Content>
        </BlockCenter>
    )
}