import { BackgroundBlur } from "../../../UI/BackgroundBlur"
import { Props } from "../models/types"
import { Complaints } from "./Complaints"
import RatingStars from "./RatingStars"
import { ButtonRight, Wrapper, Avatar, InfoWrapper, Name, ProductAvatar, ProductInfo, Text, Title, DescriptionItem, DescriptionSelectItem, Select, ProductDescription } from './styled'

export const ProductDetailed: React.FC<Props> = () => {
    return (
        <BackgroundBlur $isShown>
            <Wrapper>
                <InfoWrapper>

                    <ProductAvatar>
                        <Avatar src='' alt='there is no picture yet' />
                        <Text>Product Ratings</Text>
                        <RatingStars $activeStars={2} />
                    </ProductAvatar>

                    <ProductInfo>
                        <Name $mb="5px">Product Name - #123456789</Name>
                        <Title $mb="20px">Product Name</Title>
                        <Name $mb="5px">Product Description</Name>
                        <Text $mb="20px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Text>
                        <ProductDescription>
                            <DescriptionItem>
                                <Name>Per Price</Name>
                                <Text>Rs. 500.00</Text>
                            </DescriptionItem>
                            <DescriptionItem>
                                <Name>Added Stock</Name>
                                <Text>200</Text>
                            </DescriptionItem>
                            <DescriptionItem>
                                <Name>Telephone / Mobile</Name>
                                <Text>076 1 234 567</Text>
                            </DescriptionItem>
                            <DescriptionItem>
                                <Name>Saled Stock</Name>
                                <Text>120</Text>
                            </DescriptionItem>
                            <DescriptionItem>
                                <Name>Added Date</Name>
                                <Text>12/12/2023</Text>
                            </DescriptionItem>
                            <DescriptionItem>
                                <Name>Available Stock</Name>
                                <Text>80</Text>
                            </DescriptionItem>
                            <DescriptionSelectItem>
                                <Name>Get Action</Name>
                                <Select >
                                    <option value="active">active</option>
                                    <option value="disactive">disactive</option>
                                </Select>
                            </DescriptionSelectItem>
                        </ProductDescription>
                    </ProductInfo>
                </InfoWrapper>

                <Complaints data={[{ id: 1, sentDate: '12/12/2020', subject: 'not received' }]} />
                <ButtonRight br="10px" width="262px">Save</ButtonRight>
            </Wrapper>
        </BackgroundBlur>
    )
}