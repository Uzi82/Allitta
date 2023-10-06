import React from 'react'
import { Img, InfoWrapper, Name, ProductAvatar, ProductInfo, Text, Title } from './styled'
import RatingStars from './RatingStars'
import { Description } from './Description'

export const Info: React.FC = () => {
    return (
        <InfoWrapper>
            <ProductAvatar>
                <Img />
                <Text>Product Ratings</Text>
                <RatingStars $activeStars={2}></RatingStars>
            </ProductAvatar>
            <ProductInfo>
                <Name $mb="5px">Product Name - #123456789</Name>
                <Title $mb="20px">Product Name</Title>
                <Name $mb="5px">Product Description</Name>
                <Text $mb="20px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Text>
                <Description />
            </ProductInfo>
        </InfoWrapper>
    )
}
