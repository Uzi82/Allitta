import styled from "styled-components"
import ReactSelect from "react-select"

export const Filters = styled(ReactSelect)`
    & > div.Select__control {
        width: 213px;
        height: 40px;
        border-radius: 9px;
        border: 1px solid #6F6F6F;
        font-family: Inter-Bold, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        &--is-focused {
            box-shadow: none;
            border: 1px solid #5D20D6;
        }
    }
    .Select__option {
        color: black;
        font-family: Inter-Regular, sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border-radius: 3px;
        width: 203px;
        margin: 5px;
        &--is-focused {
            background-color: rgba(93,32,214,0.7);
            color: white;
            font-family: Inter-Regular, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        &--is-selected {
            background-color: rgba(93,32,214,1);
            color: white;
            font-family: Inter-Regular, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        &--is-disabled {
            background-color: rgba(93,32,214,0.7);
            color: white;
            font-family: Inter-Regular, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        &:active {
            background-color: rgba(93,32,214,0.3);
            color: white;
            font-family: Inter-Regular, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
    }
    @media screen and (max-width: 1023px) {
        & > div.Select__control {
            width: 200px;
            height: 40px;
            &--is-focused {
                box-shadow: none;
                border: 1px solid #5D20D6;
            }
        }
        .Select__option {
            font-family: Inter-Regular, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            border-radius: 3px;
            width: 190px;
        }
    }
`