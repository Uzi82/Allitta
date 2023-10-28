import { Btn, Buttons, Content, Title } from "./styled"
import { Exit, open, openModal, useAppDispatch } from '../'

export const DeleteOrEditMerchantModal: React.FC = () => {
    const dispatch = useAppDispatch()
    return(
        <Content>
            <Exit onClick={()=>dispatch(open())} />
            <Title>
                Account Settings
            </Title>
            <Buttons>
                <Btn onClick={()=>dispatch(openModal({
                    type: 'editMerchant'
                }))}>
                    Edit Account Details
                </Btn>
                <Btn onClick={()=>dispatch(openModal({
                    type: 'deleteMerchant'
                }))}>
                    Delete Account
                </Btn>
            </Buttons>
        </Content>
    )
}