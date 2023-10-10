import { BackgroundBlur } from "../../../UI/BackgroundBlur"
import { Props } from "../models/types"
import { Complaints } from "./Complaints"
import { Info } from "./Info"
import { ButtonRight, Wrapper } from "./styled"

export const ProductDetailed: React.FC<Props> = () => {
    return (
        <BackgroundBlur $isShown>
            <Wrapper>
                <Info />
                <Complaints />
                <ButtonRight br="10px" width="262px">Save</ButtonRight>
            </Wrapper>
        </BackgroundBlur>
    )
}