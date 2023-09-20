import { getCategories, type categoryType } from '../'
import { Content, ElText, Element, Header, CenterSpinner } from './styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Spinner } from '../../BestDeals';

export const Categories: React.FC = () => {
    let width = document.documentElement.clientWidth
    const navigate = useNavigate()
    const { data, isLoading, isError } = useQuery('categories', getCategories)
    let list: categoryType[] = []
    if(data !== undefined) list = [...data, ...data]
    if(isError) console.error('Categories: Quety error')
    return(
        <>
            <Content>
                <Header>Shop Our Top Categories</Header>
                {
                    isLoading
                        ? <CenterSpinner><Spinner /></CenterSpinner>
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
                                    list.length > 0 && list?.map(el=>{
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