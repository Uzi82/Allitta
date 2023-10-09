import React from 'react'
import { AccountButtonStyled } from './styled'

interface IAccountButton { type: 'verified' | 'new' | 'rejected' }

const AccountButton: React.FC<IAccountButton> = ({ type }) => {
    return (
        <AccountButtonStyled type={type}>
            {type}
        </AccountButtonStyled>
    )
}

export { AccountButton }