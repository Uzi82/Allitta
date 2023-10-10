import { BackgroundBlur } from "../../../UI/BackgroundBlur"
import { Props } from "../models/types"
import { AccountDescription, Title, AccountInfo, Avatar, ButtonRight, DescriptionItem, InfoWrapper, Name, Text, Wrapper, DescriptionSelectItem, Select, LeftAccDesc, RightAccDesc, Veriified, AccountLeft, Shops, Subtitle, Shop, Fullname } from "./styled"
import RatingStars from "./RatingStars"

export const AccountDetailed: React.FC<Props> = () => {
    return (
        <BackgroundBlur $isShown>
            <Wrapper>
                <InfoWrapper>
                    <AccountLeft>
                        <Avatar src='' alt='there is no picture yet' $mb="30px" />
                        <Shops>
                            <Subtitle $mb="10px">Shops</Subtitle>
                            <Shop>Shop Name</Shop>
                            <Shop>Shop Name</Shop>
                        </Shops>
                    </AccountLeft>
                    <AccountInfo>
                        <Name $mb="5px">Account Owner - #123456789</Name>
                        <Title>Ahinsa De Silva</Title>
                        <Veriified $mb="20px">Verified</Veriified>
                        <AccountDescription >
                            <LeftAccDesc>
                                <DescriptionItem>
                                    <Name>Full Name</Name>
                                    <Fullname>Ahinsa Thennakon De Silva</Fullname>
                                </DescriptionItem>
                                <DescriptionItem>
                                    <Name>E-Mail Address</Name>
                                    <Text>remo@gmail.com</Text>
                                </DescriptionItem>
                                <DescriptionItem>
                                    <Name>Telephone / Mobile</Name>
                                    <Text>076 1 234 567</Text>
                                </DescriptionItem>
                                <DescriptionItem>
                                    <Name>NIC</Name>
                                    <Text>200028702523</Text>
                                </DescriptionItem>
                                <DescriptionItem>
                                    <Name>Birthday</Name>
                                    <Text>200028702523</Text>
                                </DescriptionItem>
                                <DescriptionItem>
                                    <Name>Gender</Name>
                                    <Text>Female</Text>
                                </DescriptionItem>
                                <DescriptionItem>
                                    <Name>Address</Name>
                                    <Text>42B/3, Buddhaloka Mawatha, suwarapola, Piliyandala 10300</Text>
                                </DescriptionItem>
                                <DescriptionItem>
                                    <Name>Registered Date</Name>
                                    <Text>12/12/2023</Text>
                                </DescriptionItem>
                            </LeftAccDesc>
                            <RightAccDesc>
                                <DescriptionItem>
                                    <Name>Totally Earn (without delivery charges)</Name>
                                    <Text>Rs. 1,000,000.00 </Text>
                                </DescriptionItem>
                                <DescriptionItem>
                                    <Name>Totally Orders</Name>
                                    <Text>120</Text>
                                </DescriptionItem>
                                <DescriptionItem>
                                    <Name>Totally Customers</Name>
                                    <Text>80</Text>
                                </DescriptionItem>
                                <DescriptionSelectItem >
                                    <Name>Get Action</Name>
                                    <Select>
                                        <option value="active">active</option>
                                        <option value="disactive">disactive</option>
                                    </Select >
                                </DescriptionSelectItem >
                            </RightAccDesc>
                        </AccountDescription>
                        <ButtonRight br="10px" width="262px">Save</ButtonRight>
                    </AccountInfo>
                </InfoWrapper>
            </Wrapper>
        </BackgroundBlur>
    )
}