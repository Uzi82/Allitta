import Button from "../UI/Button"
import styled from "styled-components"
import CardImg from "../UI/CardImg"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
`

const Header = styled.h1`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    word-break: break-all;
    width: 262px;
    padding: 0 2px;
`

const Price = styled.p`
    color: #000;
    font-family: Inter-Bold, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 262px;
    padding: 0 2px;
    margin: 5px 0;
    word-break: break-all;
`

const Desctiption = styled.p`
    color: #000;
    font-family: Inter-Regular, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    word-break: break-all;
    width: 262px;
    padding: 0 2px;
    margin: 5px 0;
`

type Props = {
    title?: string,
    price?: string,
    description?: string,
    image?: string
}

const ProductCard: React.FC<Props> = ({ title='Product Name', price='RS.100,000.00', description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text.', image="https://www.freeiconspng.com/uploads/no-image-icon-15.png" }) => {
    return(
        <Card>
            <CardImg src={image} />
            <Text>
                <Header>{title}</Header>
                <Price>{price}</Price>
                <Desctiption>{description}</Desctiption>
                <Button mt={15}>Add to cart</Button>
            </Text>
            
        </Card>
    )
}

export default ProductCard