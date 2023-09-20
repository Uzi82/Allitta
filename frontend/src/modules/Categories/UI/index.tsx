import { getCategories } from '../'
import { Content, ElText, Element, Header, CenterSpinner } from './styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { useQuery } from 'react-query';
import { LazyLoad } from '../';

export const Categories: React.FC = () => {
    let width = document.documentElement.clientWidth
    const { data, isLoading, isError } = useQuery('categories', getCategories)
    if(isError) console.error('Categories: Quety error')
    return(
        <>
            <Content>
                <Header>Shop Our Top Categories</Header>
                {
                    isLoading
                        ? <CenterSpinner><LazyLoad width='1108px' height='232px' /></CenterSpinner>
                        :   <Swiper
                                slidesPerView={width >= 766
                                    ? 6
                                    : 2}
                                spaceBetween={
                                    width >= 1120
                                        ? 20
                                        : 2
                                }
                                grabCursor={true}
                                className="mySwiper"
                                loop
                            >
                                {
                                    data !== undefined && data.length > 0 && data?.map(el=>{
                                        return(<SwiperSlide key={el.id}>
                                            <Element to={`/categories/${el.id}`} image={el.img_path}>
                                                <ElText>
                                                    {el.name}
                                                </ElText>
                                            </Element>
                                        </SwiperSlide>)
                                    })
                                }
                            </Swiper>
                }
            </Content>
        </>
    )
}