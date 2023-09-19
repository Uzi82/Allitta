import { Link } from 'react-router-dom'
import { Props } from '../models/types'
import { Input } from '../../../UI/Input'
import { FormStyled, LinkForm, Subtitle, Title } from './styled'
import { Button } from '../'

const Form = ({ type }: Props) => {
    return (
        <FormStyled $maxwidth='388px'>
            {type === 'signIn' ?
                <>
                    <Title $mb='20px'>Sign In</Title>
                    <Subtitle $mb='20px'>Sign in with your email address and password</Subtitle>
                    <Input placeholder='email address' />
                    <Input placeholder='password' type='password' mb='10px' />
                    <LinkForm $mb='20px' $justify='end' ><Link to='/'>Forget password?</Link></LinkForm>
                    <Button br={'10px'} mb={'20px'} >Sign In</Button>
                    <LinkForm ><Link to='/'>Create Account</Link></LinkForm>
                </>
                :
                <>
                    <Title $mb='20px'>Re-Set Password</Title>
                    <Subtitle $mb='20px'>Create your new Password and confirm it.</Subtitle>
                    <Input placeholder='password' type='password' />
                    <Input placeholder='confirm password' type='password' />
                    <Button br={'10px'} mb={'20px'}>Sign In</Button>
                </>
            }
        </FormStyled>
    )
}

export { Form }