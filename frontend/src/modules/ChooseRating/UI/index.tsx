import {
    Rating,
    Star
} from './styled';

import { useState } from 'react';

export const ChooseRating: React.FC = () => {
    const [rating, setRating] = useState<number>(3);

    const handleRatingClick = (value: number) : void => {
      setRating(value);
    };
  
    return (
      <Rating>
        {[1, 2, 3, 4, 5].map((value: number) => (
          <Star
            key={value}
            className={`${value <= rating ? 'active' : ''}`}
            onClick={() => handleRatingClick(value)}
          >
            ★
          </Star>
        ))}
      </Rating>
    );

}