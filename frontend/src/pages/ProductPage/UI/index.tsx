import { useState } from "react"
import { AddToCart, 
         CartImage, 
         CartText, 
         CategoriesConteiner, 
         CategoriesImg, 
         CategoriesTitle, 
         Category, 
         CategoryProducts, 
         Content, 
         Description, 
         DescriptionText, 
         DescriptionTitle, 
         Flare, 
         Image, 
         ImageList, 
         Images, 
         Info, 
         Names, 
         Piece, 
         Price, 
         PriceContent, 
         ProductName, 
         Products, 
         Rating, 
         RatingTitle, 
         ShopName, 
         SmallImage, 
         Star, 
         Stars, 
         Text, 
         Top
} from "./styled"
import { ProductCard, 
         StyledInput, 
         TrandingProducts, 
         addProduct, 
         useAppDispatch 
} from '../'

export const ProductPage: React.FC = () => {
    const [flareStatus, setFlare] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    return(
    <>
        <Top>
                <CategoriesConteiner to={'/categories'}>
                    <CategoriesImg src={require('./categories.png')} />
                    <CategoriesTitle>
                        Categories
                    </CategoriesTitle>
                </CategoriesConteiner>
                <StyledInput 
                    btnText="Search"
                    heigth={45}
                    width={ '100%' } 
                    placeholder="Search Here Shop or Product"
                />
            </Top>
        <Content>
            <Info>
                <Images>
                    <Image />
                    <ImageList>
                        <SmallImage />
                        <SmallImage />
                        <SmallImage />
                        <SmallImage />
                        <SmallImage />
                    </ImageList>
                </Images>
                <Text>
                    <Names>
                        <ShopName>
                            ShopName
                        </ShopName>
                        <ProductName>
                            Product name
                        </ProductName>
                    </Names>
                    <PriceContent>
                        <Price> Rs 100,000.00</Price> <Piece> Per Piece </Piece>
                    </PriceContent>
                    <Rating>
                        <RatingTitle>
                            Product Ratings
                        </RatingTitle>
                        <Stars>
                            {
                                [0, 1, 2, 3, 4].map((el, index) => <Star key={index} $active={el<4} />)
                            }
                        </Stars>
                    </Rating>
                    <Description>
                        <DescriptionTitle>
                            Description
                        </DescriptionTitle>
                        <DescriptionText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                        </DescriptionText>
                    </Description>
                    <AddToCart onClick={()=>dispatch(addProduct({
                        id: (Math.random()*1000).toFixed(0).toString(),
                        name: 'Product Name',
                        logotype_path: '',
                        price: 10000,
                        currency: 'RS'
                    }))} onMouseEnter={()=>setFlare(true)} onMouseLeave={()=>setFlare(false)}>
                        <Flare $status={flareStatus} />
                        <CartText>
                            Add to Cart
                        </CartText>
                        <CartImage />
                    </AddToCart>
                </Text>
            </Info>
            <CategoryProducts>
                <Category>
                    Category name
                </Category>
                <Products>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Products>
            </CategoryProducts>
            <TrandingProducts />
        </Content>
    </>
    )
}