import { Props } from "../models/types"
import { Fail } from "./Fail"
import { Success } from "./Success"

export const Popup: React.FC<Props> = ({ success, type }) => {
    return (
        <>
            {success ? <Success type={type} ></Success> : <Fail type={type}></Fail>}
        </>
    )
}