import React from 'react'
import { BurgerStyled } from './styled'

interface IBurger {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}
const Burger: React.FC<IBurger> = ({ active, setActive }) => {
    return (
        <BurgerStyled $active={active} onClick={() => setActive(p => !p)}>
            <span></span>
        </BurgerStyled>
    )
}

export { Burger }