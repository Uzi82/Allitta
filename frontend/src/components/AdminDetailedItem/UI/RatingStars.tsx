import React from 'react'
import { StarSvg } from './StarSvg'
import { RatingStarsStyled } from './styled'
type Props = { $activeStars: number }
const RatingStars: React.FC<Props> = ({ $activeStars }) => {
    return (
        <RatingStarsStyled>
            {[1, 2, 3, 4, 5].map((item) => <StarSvg $active={item <= $activeStars} />)}
        </RatingStarsStyled>
    )
}

export default RatingStars