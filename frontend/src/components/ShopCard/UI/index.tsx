import { Content, Image, Text, Header, Description } from "./styled"


export const ShopCard: React.FC<{image?: string, name?: string, amount?: number, link?: string}> = ({image = '', name = 'Shop name', amount=24, link='/'}) => {
    return(
        <>
            <Content to={link}>
                <Image src={image} />
                <Text>
                    <Header>
                        {name}
                    </Header>
                    <Description>
                        {amount} Products
                    </Description>
                </Text>
            </Content>
        </>
    )
}