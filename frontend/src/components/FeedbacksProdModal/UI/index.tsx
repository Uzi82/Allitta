import { useMutation, useQuery } from "react-query"
import { Props,
         getFeedbacks,
         makeStars,
         useAppDispatch,
         open,
         sendFeedbacks,
         Exit
} from "../"
import { Buttons, 
         Cancel, 
         Content, 
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
            <Exit onClick={()=> dispatch(open())} />
            <Head>
                <Title>
                    { name }
                </Title>
                <ExitStars>
                    <Overall>
                        Overall rate
                        <Stars>
                            {
                                data !== undefined && makeStars(data.overall).map((el, index)=><Star key={index} $big $active={el} />).reverse()
                            }
                        </Stars>
                    </Overall>
                </ExitStars>
            </Head>
            <List>
                {
                    data !== undefined && data.list.map(el=><Element key={el.id} id={el.id} name={el.name} text={el.text} stars={el.stars} />)
                }
            </List>
            <Buttons>
                <Publish onClick={()=>{dispatch(open()); sendAll.mutate(id)}}>Publish</Publish>
                <Cancel type="button" onClick={()=>dispatch(open())}>Cancel</Cancel>
            </Buttons>
        </Content>
    )
}