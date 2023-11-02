import styled from 'styled-components';

export const Rating = styled.div`
    display: inline-block;
    @media screen and (max-width: 450px) {
      display: flex;
      justify-content: center;
      gap: 5px;
    }
` 
  
  export const Star = styled.span`
  font-size: 24px;
  color: #FFC05C; /* Цвет неактивных звезд */
  cursor: pointer;
  
  &.active {
    color: #FF9C00; /* Цвет активной звезды */
  }
  `
  