import { Chat, 
         ChatHistory, 
         ChatList, 
         ChatListEl, 
         ChatMenu, 
         ChatMsg, 
         ChatName, 
         Container, 
         ElImg,
         ElLastMsg,
         ElName,
         ElText,
         InputMsg,
         SendBtn,
         SendMsg
} from "./styled"
import { LazyLoad, 
         Search, 
         getChat, 
         getChats
} from '../'
import { useState
} from "react"
import { useQuery } from "react-query"

export const ShopChat: React.FC = () => {
    const [search, setSearch] = useState<string>('')
    const [id, setId] = useState<string>('')
    const chats = useQuery(['ShopChatList', { search }], ()=>getChats(search), { refetchOnWindowFocus: false })
    const messages = useQuery(['ShopChatHistory', { id }], () => getChat(id), { refetchOnWindowFocus: false })
    function resize(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        let el = e.currentTarget
        el.style.height = "auto"
        el.style.height = `${el.scrollHeight}px`
    }
    return(
        <Container>
            <ChatMenu>
                <Search placeholder="Search Customer" onBlur={(e)=>setSearch(e.target.value)} />
                <ChatList>
                    {
                        chats.isFetching
                            ? <LazyLoad $height="100%" $width="100%" />
                            : chats.data !== undefined && chats.data.map(el=><ChatListEl key={el.id} onClick={()=>setId(el.id)}>
                                <ElImg $img={el.img} />
                                <ElText>
                                    <ElName>
                                        { el.name }
                                    </ElName>
                                    <ElLastMsg>
                                        { el.lastMsg }
                                    </ElLastMsg>
                                </ElText>
                            </ChatListEl>)
                    }
                </ChatList>
            </ChatMenu>
            <Chat>
                <ChatName>
                    Customer name
                </ChatName>
                <ChatHistory>
                    {
                        messages.isFetching
                            ? <LazyLoad $height="auto" $width="100%" />
                            : messages.data !== undefined && messages.data.map(el=><ChatMsg $authorIsYou={el.authorIsYou} key={el.id}>
                                { el.content }
                            </ChatMsg>)
                    }
                </ChatHistory>
                <SendMsg>
                    <InputMsg 
                        maxLength={500}
                        onInput={resize} 
                        placeholder="Type..." />
                    <SendBtn />
                </SendMsg>
            </Chat>
        </Container>
    )
}