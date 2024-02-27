import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Form} from '@src/components'
import {HeaderContainer} from '@src/containers/header'
import {FooterContainer} from '@src/containers/footer'
import * as ROUTES from '@src/constants/routes'
import {SignInType} from './types'

export * from './types'

export const SignIn: SignInType = () => {
    const navigate = useNavigate()

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = password === '' || emailAddress === ''

    const handleSignIn = (event) => {
        event.preventDefault()
        //TODO: login process
        navigate(ROUTES.BROWSE)
    }

    return <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error data-testid='error'>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignIn} method='POST'>
                    <Form.Input
                        placeholder='Email address'
                        value={emailAddress}
                        onChange={({target}) => setEmailAddress(target.value)}
                    />
                    <Form.Input
                        type='password'
                        value={password}
                        autoComplete='off'
                        placeholder='Password'
                        onChange={({target}) => setPassword(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type='submit' data-testid='sign-in'>
                        Sign In
                    </Form.Submit>
                </Form.Base>

                <Form.Text>
                    New to Netflix? <Form.Link to='/signup'>Sign up now.</Form.Link>
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer/>
    </>
}
export default SignIn
