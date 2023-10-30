import { useQuery } from "react-query"
import { Content, 
         El, 
         ElText, 
         ElTitle, 
         Image, 
         ImageAndStatus, 
         Info, 
         Settings, 
         ShopImg, 
         ShopListHead, 
         ShopName, 
         Shops, 
         ShopsList, 
         ShopsListEl, 
         Status, 
         StatusImg, 
         Verified 
} from "./styled"
import { getInfo, 
         useJWT, 
         infoList, 
         SimpleBlur, 
         useAppSelector, 
         DeleteOrEditMerchantModal, 
         useAppDispatch, 
         openModal, 
         DeleteMerchantModal, 
         EditMerchantModal 
} from "../"

export const ShopProfile: React.FC = () => {
    const jwt = useJWT()
    const { opened, type } = useAppSelector(state=>state.products)
    const dispatch = useAppDispatch()
    const getInfoQuery = useQuery(['getInfoMerchant', { jwt }], () => getInfo(jwt), {
        refetchOnWindowFocus: false
    })
    return(
        <Content>
            <ImageAndStatus>
                <Image />
                <Verified>
                    <StatusImg $verified />
                    <Status $verified>
                        Verified Account
                    </Status>
                </Verified>
            </ImageAndStatus>
            <Info>
                {
                    getInfoQuery.data !== undefined && 
                    infoList.map((el, index)=>
                    <El key={index}>
                        <ElTitle>
                            {
                                el.title
                            }
                        </ElTitle>
                        <ElText $big={ el.key === 'name' ? true : undefined } $wrap={ el.key === 'street' ? true : undefined }>
                            {
                                getInfoQuery.data[el.key]
                            }
                        </ElText>
                    </El>)
                }
                <Settings onClick={()=>dispatch(openModal({
                    type:"deleteOrEditMerchant"
                }))}>
                    Settings
                </Settings>
            </Info>
            <Shops>
                <ShopListHead>
                    Your Shops
                </ShopListHead>
                <ShopsList>
                    <ShopsListEl>
                        <ShopImg />
                        <ShopName>
                            dsfasdfjhbsdjhfajshbfjhbsdah
                        </ShopName>
                    </ShopsListEl>
                </ShopsList>
            </Shops>
            <SimpleBlur active={opened} customWidth>
                {
                    type === 'deleteOrEditMerchant'
                    ? <DeleteOrEditMerchantModal />
                    : type === 'editMerchant'
                    ? <EditMerchantModal />
                    : type === 'deleteMerchant' &&
                    <DeleteMerchantModal />
                }
            </SimpleBlur>
        </Content>
    )
}