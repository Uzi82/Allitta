import { Link } from "react-router-dom"
import { Props } from "../models/types"
import { InputStyled } from "./styled"

const Input = ({ placeholder = 'email', width, maxwidth, mt }: Props) => {
    return (
        <InputStyled {...{ placeholder, width, $maxwidth: maxwidth, $mt: mt }} />
    )
}
export default Input