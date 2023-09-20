import { Props } from '../models/types'
import { ForgetPassword } from './ForgetPassword'
import { ResetPassword } from './ResetPassword'
import { SignIn } from './SignIn'
import { VerifyingPassword } from './VerifyingEmail'

const Form = ({ type }: Props) => {
    return (
        <>
            {
                {
                    signIn: <SignIn />,
                    forget: <ForgetPassword />,
                    verifying: <VerifyingPassword />,
                    reset: <ResetPassword />
                }[type]
            }
        </>
    )
}

export { Form }