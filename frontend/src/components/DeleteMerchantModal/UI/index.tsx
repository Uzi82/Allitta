import { Btn, 
         Buttons, 
         Content, 
         SubTitle, 
         Title 
} from "./styled"
import { open, 
         useAppDispatch 
} from '../'

export const DeleteMerchantModal: React.FC = () => {
    const dispatch = useAppDispatch()
    return(
        <Content>
            <Title>
                Confirm Account Deletion
            </Title>
            <SubTitle>
                Are you sure you want to delete your account permanently ?
            </SubTitle>
            <Buttons>
                <Btn $yes onClick={()=>{
                    // Мутация на удаление
                    dispatch(open())
                }}>
                    Yes, of Course
                </Btn>
                <Btn onClick={() => dispatch(open())}>
                    No, Don’t
                </Btn>
            </Buttons>
        </Content>
    )
}