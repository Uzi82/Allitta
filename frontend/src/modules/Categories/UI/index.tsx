import { categoryList } from '../'
import { Content, ElText, Element, Header } from './styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

export const Categories: React.FC = () => {
    let width = document.documentElement.clientWidth
    console.log(width)
    console.log(width >= 1120
        ? 20
        : 5)
    return(
        <>
            <Content>
                <Header>Shop Our Top Categories</Header>
                <Swiper
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