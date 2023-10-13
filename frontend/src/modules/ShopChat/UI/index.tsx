import { BackBtn, Chat, 
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
    const [chatStatus, setStatus] = useState<string>('')
    const chats = useQuery(['ShopChatList', { search }], ()=>getChats(search), { refetchOnWindowFocus: false })
    const messages = useQuery(['ShopChatHistory', { id }], () => getChat(id), { refetchOnWindowFocus: false })
    function resize(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        let el = e.currentTarget
        el.style.height = "auto"
        el.style.height = `${el.scrollHeight}px`
    }
    function openChat() {
        setStatus('open')
        setTimeout(()=>setStatus('opened'), 300)
    }
    function closeChat() {
        setStatus('close')
        setTimeout(()=>setStatus(''), 300)
    }
    return(
        <Container>
            <ChatMenu>
                <Search $100allways placeholder="Search Customer" onKeyDown={(e)=>e.code==='Enter'&&setSearch(e.currentTarget.value)} onBlur={(e)=>setSearch(e.target.value)} />
                <ChatList>
                    {
                        chats.isFetching
                            ? <LazyLoad $height="100%" $width="100%" />
                            : chats.data !== undefined && chats.data.map(el=><ChatListEl key={el.id} onClick={()=>{openChat();setId(el.id)}}>
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
            <Chat className={chatStatus}>
                <BackBtn onClick={closeChat} $show={document.documentElement.clientWidth < 767} />
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