import { categoryList } from '../'
import { Content, ElText, Element, Header } from './styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

export const Categories: React.FC = () => {
    return(
        <>
            <Content>
                <Header>Shop Our Top Categories</Header>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={20}
                    grabCursor={true}
                    className="mySwiper"
                    loop
                >
                    {
                        categoryList.map(el=>{
                            return(<SwiperSlide key={el.id}>
                                <Element image={el.background}>
                                    <ElText>
                                        {el.title}
                                    </ElText>
                                </Element>
                            </SwiperSlide>)
                        })
                    }
                </Swiper>
            </Content>
        </>
    )
}