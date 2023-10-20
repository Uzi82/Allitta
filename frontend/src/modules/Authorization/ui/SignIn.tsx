import React from 'react'
import { FormStyled, 
         FormLink, 
         Subtitle, 
         Title, 
         CreateLinkWrapper, 
         CreateLink 
} from './styled'
import { Link, 
         useNavigate, 
         useOutletContext 
} from 'react-router-dom'
import { SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'
import { auth,
         Input,
         Button,
         CustomLink,
         onError, 
         useSignInForm,
         ISignIn, 
         SignInContext
} from '../'
import { toast } from 'react-toastify'

const SignIn: React.FC = () => {
    const { isShoper, setIsShoper, setEmail, setPassword } = useOutletContext<SignInContext>()
    const navigate = useNavigate()
    const authQuery = useMutation((data: { email: string, password: string, isShoper: boolean }) => auth(data))
    const { handleSubmit, registerInput } = useSignInForm()
    const onSubmit: SubmitHandler<ISignIn> = async (data) => {
        setEmail(data.email)
        setPassword(data.password)
        await authQuery.mutateAsync({ ...data, isShoper })
            .then(
                ()=>navigate(`/${isShoper?'shop':'user'}`),
                ()=>toast('Invalid email or password!')
            )
    };
    return (
        <FormStyled onSubmit={handleSubmit(onSubmit, onError)} $maxwidth='388px' autoComplete='off'>
            <Title $mb='20px'>Sign In</Title>
            <Subtitle $mb='20px'>Sign in with your email address and password</Subtitle>
            <CreateLinkWrapper $mb='10px' >
                <CreateLink $active={!isShoper} onClick={() => setIsShoper(false)} type='button'>Customer Account</CreateLink>
                <CreateLink $active={isShoper} onClick={() => setIsShoper(true)} type='button'>Shopper Account</CreateLink>
            </CreateLinkWrapper>
            <Input placeholder='email address' $mb='20px' {...registerInput('email')} />
            <Input placeholder='password' type='password' $mb='10px' {...registerInput('password')} />
            <FormLink $mb='20px' $justify='end' ><Link to='/signin/forget'>Forget password?</Link></FormLink>
            <Button br={'10px'} mb={'20px'}>Sign In</Button>
            <CustomLink $transparent to='/signup'>Create Account</CustomLink>
        </FormStyled>
    )
}

export { SignIn }