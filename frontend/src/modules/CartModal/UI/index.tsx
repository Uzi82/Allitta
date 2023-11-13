import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch, open, CartModalMain, CartModalAddress } from "../"
import { Content, ExitBtn } from "./styled"

export const CartModal: React.FC = () => {
    const [start, setStart] = useState<boolean>(true)
    const [status, setStatus] = useState<string>('closed')
    const opened = useAppSelector(state => state.products.opened && state.products.type === 'cartModal')
    const type = useAppSelector(state => state.products.id)
    const dispatch = useAppDispatch()
    useEffect(()=> {
        if(opened && start) setStart(false)
        if(opened && status === 'closed') {
            setStatus('opening')
            setTimeout(()=>setStatus('opened'), 500)
            dispatch(open())
        }
        if(opened && status === 'opened') {
            setStatus('closing')
            setTimeout(()=>setStatus('closed'), 500)
            dispatch(open())
        }
    }, [opened])
    return(
        <Content $start={start} className={status}>
            <ExitBtn onClick={()=>dispatch(open())} />
            {
                type === 'main' ?
                <CartModalMain />
                : <CartModalAddress />
            }
        </Content>
    )
}   