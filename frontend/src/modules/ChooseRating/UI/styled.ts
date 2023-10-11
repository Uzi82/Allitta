import styled from 'styled-components';

export const Wrapper = styled.div`

`;

export const Rating = styled.div`
    display: inline-block;
` 
  
  export const Star = styled.span`
  font-size: 24px;
  color: #FFC05C; /* Цвет неактивных звезд */
  cursor: pointer;
  
  &.active {
    color: #FF9C00; /* Цвет активной звезды */
  }
  `
  