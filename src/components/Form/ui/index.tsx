import { Link } from "react-router-dom"
import { Props } from "../models/types"
import { Input } from "../../../UI/Input"
import { Form, LinkForm, Subtitle, Title } from "./styled"
import Button from "../../../UI/Button"

const SignIn = ({ type = 'signIn' }: Props) => {
    return (
        <Form>
            <Title>{type === 'signIn' ? 'Sign In' : 'Re-Set Password'}</Title>
            <Subtitle>{type === 'signIn' ? 'Sign in with your email address and password' : 'Create your new Password and confirm it.'}</Subtitle>
            <Input placeholder="email address" />
            <Input placeholder="password" />
            {type === 'signIn' ? <LinkForm ml='auto'><Link to='/'>Forget password?</Link></LinkForm> : ''}
            <Button>Sign In</Button>
            {type === 'signIn' ? <LinkForm><Link to='/'>Create Account</Link></LinkForm> : ''}
        </Form>
    )
}

export { SignIn }