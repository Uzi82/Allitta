import { categoryList } from '../'
import { Content, ElText, Element, Header } from './styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';

export const Categories: React.FC = () => {
    return(
        <>
            <Content>
                <Header>Shop Our Top Categories</Header>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
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