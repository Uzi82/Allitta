import { Button, CardImg } from '../'
import { Card, Text, Header, Price, Desctiption } from './styled'
import type { Props } from '../'

export const ProductCard: React.FC<Props> = ({ title='Product Name', price='RS.100,000.00', description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text.', image="https://www.freeiconspng.com/uploads/no-image-icon-15.png" }) => {
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