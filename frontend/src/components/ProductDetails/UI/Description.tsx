import React from 'react'
import { DescriptionItem, DescriptionSelectItem, DescriptionStyled, Name, Select, Text } from './styled'

interface IDescription { }

export const Description: React.FC<IDescription> = () => {
    return (
        <DescriptionStyled>
            {[1, 2, 3, 4, 5, 6].map((item) =>
                <DescriptionItem>
                    <Name>Per Price</Name>
                    <Text>Rs. {item},500.00</Text>
                </DescriptionItem>
            )}
            <DescriptionSelectItem>
                <Name>Get Action</Name>
                <Select >
                    <option value="active">active</option>
                    <option value="disactive">disactive</option>
                </Select>
            </DescriptionSelectItem>
        </DescriptionStyled>
    )
}
