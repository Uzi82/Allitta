import { CustomLink } from "../../../UI/CustomLink"
import { Props } from "../models/types"
import { Fail } from "./Fail"
import { Success } from "./Success"

export const SuccessPopup: React.FC<Props> = ({ success, type }) => {
    return (
        <>
            {success ? <Success type={type} ></Success> : <Fail type={type}></Fail>}
        </>
    )
}