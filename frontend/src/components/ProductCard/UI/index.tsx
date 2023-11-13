import { Button, CardImg, addProduct, useAppDispatch } from '../'
import { Card, Text, Header, Price, Desctiption } from './styled'
import { type Props, firstLetterCap } from '../'
import { useNavigate } from 'react-router-dom'

export const ProductCard: React.FC<Props> = ({ id = '', title = 'Product Name', price = 'RS 100,000.00', description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text.', image = "https://www.freeiconspng.com/uploads/no-image-icon-15.png" }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const addCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        dispatch(addProduct({
            name: firstLetterCap(title),
            logotype_path: image,
            id,
            currency: price.split(' ')[1],
            price: parseInt(price.split(' ')[0])
        }))
    }
    return (
        <Card onClick={()=>navigate(`/products/${id}`)}>
            <CardImg src={image} />
            <Text>
                <Header>{firstLetterCap(title)}</Header>
                <Price>{price}</Price>
                <Desctiption>{firstLetterCap(description)}</Desctiption>
                <Button width='116px' height='35px' mt={'15px'} onClick={addCart}>Add to cart</Button>
            </Text>
        </Card>
    )
}