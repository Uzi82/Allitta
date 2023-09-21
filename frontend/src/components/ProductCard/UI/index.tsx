import { Button, CardImg } from '../'
import { Card, Text, Header, Price, Desctiption } from './styled'
import { type Props, firstLetterCap } from '../'
import { useNavigate } from 'react-router-dom'

export const ProductCard: React.FC<Props> = ({ id = '', title = 'Product Name', price = 'RS.100,000.00', description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text.', image = "https://www.freeiconspng.com/uploads/no-image-icon-15.png" }) => {
    const navigate = useNavigate()
    return (
        <Card>
            <CardImg src={image} />
            <Text>
                <Header>{firstLetterCap(title)}</Header>
                <Price>{price}</Price>
                <Desctiption>{firstLetterCap(description)}</Desctiption>
                <Button width='116px' height='35px' mt={'15px'} onClick={() => navigate(`/products/${id}`)}>Add to cart</Button>
            </Text>
        </Card>
    )
}