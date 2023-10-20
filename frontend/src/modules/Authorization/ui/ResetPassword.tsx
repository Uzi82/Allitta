import { FormStyled, 
         Subtitle, 
         Title 
} from './styled'
import { Input, 
         Button,
         onError, 
         useResetPasswordForm,
         type IResetPassword, 
         type SignInContext,
         reset
} from '../'
import { SubmitHandler } from 'react-hook-form'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

const ResetPassword: React.FC = () => {
    const { handleSubmit, registerInput } = useResetPasswordForm()
    const { email, isShoper } = useOutletContext<SignInContext>()
    const resetQuery = useMutation((data: { email: string, password: string, isShoper: boolean })=>reset(data))
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<IResetPassword> = async (data) => {
        if(data.password !== data['confirm password']) {
            toast('Password mismatch!')
            return
        }
        await resetQuery.mutateAsync({
            email, password: data.password, isShoper
        }).then(
            res=>{
                if(res.status === 200) {
                    toast('Password changed!')
                    navigate('/signin')
                }
            }
        )
    };
    return (
        <FormStyled onSubmit={handleSubmit(onSubmit, onError)} $maxwidth='388px'>
            <Title $mb='20px'>Re-Set Password</Title>
            <Subtitle $mb='20px'>Create your new Password and confirm it.</Subtitle>
            <Input placeholder='password' type='password' {...registerInput('password')} $mb='20px' />
            <Input placeholder='confirm password' type='password' {...registerInput('confirm password')} $mb='20px' />
            <Button br={'10px'} mb={'20px'}>Save Password</Button>
        </FormStyled>
    )
}

export { ResetPassword }