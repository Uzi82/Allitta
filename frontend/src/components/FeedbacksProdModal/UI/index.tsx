import { useMutation, useQuery } from "react-query"
import { Props,
         getFeedbacks,
         makeStars,
         useAppDispatch,
         open,
         sendFeedbacks
} from "../"
import { Buttons, Cancel, Content, 
         Exit, 
         ExitStars, 
         Head, 
         List, 
         Overall, 
         Publish, 
         Star, 
         Stars, 
         Title
} from "./styled"
import { Element } from "./Element"

export const FeedbacksProdModal: React.FC<Props> = ({ id, name }) => {
    const { data, isError } = useQuery(`feedBacks${id}`, () => getFeedbacks(id), {
        refetchOnWindowFocus: false
    })
    const sendAll = useMutation('feedbacksSend', (id: string) => sendFeedbacks(id))
    const dispatch = useAppDispatch()
    if(isError) console.error('FeedBacks: Query error')
    return(
        <Content>
            <Head>
                <Title>
                    { name }
                </Title>
                <ExitStars>
                    <Overall>
                        Overall rate
                        <Stars>
                            {
                                data !== undefined && makeStars(data.overall).map(el=><Star $big $active={el} />).reverse()
                            }
                        </Stars>
                    </Overall>
                    <Exit onClick={()=> dispatch(open())} />
                </ExitStars>
            </Head>
            <List>
                {
                    data !== undefined && data.list.map(el=><Element name={el.name} text={el.text} stars={el.stars} />)
                }
            </List>
            <Buttons>
                <Publish onClick={()=>{dispatch(open()); sendAll.mutate(id)}}>Publish</Publish>
                <Cancel type="button" onClick={()=>dispatch(open())}>Cancel</Cancel>
            </Buttons>
        </Content>
    )
}