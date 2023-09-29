import { Container, 
         Exit, 
         Head,
         Title
} from "./styled"
import {
         useAppDispatch,
         open
} from '../'


export const AddProdModal: React.FC = () => {
    const dispatch = useAppDispatch()
    return(
        <Container>
            <Head>
                <Title>
                    Add Product
                </Title>
                <Exit onClick={()=>dispatch(open())} />
            </Head>
        </Container>
    )
}