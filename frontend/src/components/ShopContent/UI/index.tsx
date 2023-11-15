import {
    Wrapper,
    ContentBackground,
    BackgroundImg,
    Avatar,
    ShopInfo,
    Name,
    InfoWrapper,
    ShopDescription,
    Title,
    Description
} from './styled';

import { Props } from '../models/props';

export const ShopContent: React.FC<Props> = ({ children, data }) => {
    return (
        <Wrapper>
            <ContentBackground>
                <BackgroundImg src={data?.banner_path} />
                <Avatar src={data?.logotype_path}/>
            </ContentBackground>
            <InfoWrapper>
                <ShopInfo>
                    <Name>{data?.name}</Name>
                </ShopInfo>
                {children}
            </InfoWrapper>
            <ShopDescription>
                <Title>Nature of Business</Title>
                <Description>
                  {data?.description}
                </Description>
            </ShopDescription>
        </Wrapper>
    )
}
