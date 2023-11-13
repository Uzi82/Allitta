import { Props } from '../'
import { Content, HalfStar, Star } from './styled'

export const RatingStars: React.FC<Props> = ({ rating }) => {
    let List: boolean[] = []
    for(let i = 0; i < 5; i++) i < Math.floor(rating) ? List.push(true) : List.push(false)
    return(
    <Content>
        {
            List.map((el, index) => <Star $active={el} key={index}>
                {
                    Math.floor(rating) < rating && List[index-1] && <HalfStar />
                }
            </Star>)
        }
    </Content>
    )
}