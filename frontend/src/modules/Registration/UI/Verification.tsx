import { useEffect } from 'react'
import { Img, 
         Subtitle, 
         Title, 
         FormWrapper 
} from './styled'
import { SubmitHandler } from 'react-hook-form'
import { useNavigate, 
         useOutletContext 
} from 'react-router-dom'
import { useMutation } from 'react-query'
import { checkVerify,
         Input,
         CustomLink,
         Button,
         onError, 
         useVerificationForm,
         type AccountContext, 
         type IVerification
} from '../'

export const Verification: React.FC = () => {
    const { handleSubmit, registerInput } = useVerificationForm()
    const { isShoper, email, password , setIsVerifyPassed } = useOutletContext<AccountContext>()
    const checkVerifyQuery = useMutation((data : { email: string, isShoper: boolean, code: number }) => checkVerify(data))
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<IVerification> = async (data) => {
        await checkVerifyQuery.mutateAsync({
            email,
            isShoper,
            code: data.verification
        }).then(
            () => setIsVerifyPassed(1),
            () => setIsVerifyPassed(2)
        )
    };
    useEffect(()=>{
        if(email === '' || password === '') navigate('/signup')
    }, [email, password, navigate])
    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit, onError)} $gap='20px' $maxWidth='456px'>
            <Title $mb='10px'>Create Account</Title>
            <Img src='/svg/email.svg' $mb='20px' />
            <Subtitle $mb='10px'>Enter the 6 Digits code you received to {email}</Subtitle>
            <Input placeholder='6 Digits Code' type='number' {...registerInput('verification')} />
            <Button type='submit' br='10px'>Submit</Button>
            <CustomLink $transparent to='/signup'><Img src="/svg/backward.svg" />{' '}Back</CustomLink>
        </FormWrapper>
    )
}