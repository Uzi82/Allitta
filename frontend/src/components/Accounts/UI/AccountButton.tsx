import React from 'react'
import { AccountButtonStyled } from './styled'
import { IAccountButton } from '../models/types'


const AccountButton: React.FC<IAccountButton> = ({ type }) => {
    return (
        <AccountButtonStyled type={type}>
            {type}
        </AccountButtonStyled>
    )
}

export { AccountButton }