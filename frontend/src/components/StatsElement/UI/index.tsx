import { Props } from "../"
import { 
    Amount, 
    Container, 
    Img, 
    Text, 
    Title
} from "./styled"

export const StatsElement: React.FC<Props> = ({amount = 240, title = 'Total Products', img = require('./box.png')}) => {
    return(
        <Container>
            <Text>
                <Amount>
                    { amount }
                </Amount>
                <Title>
                    { title }
                </Title>
            </Text>
            <Img src={img} />
        </Container>
    )
}