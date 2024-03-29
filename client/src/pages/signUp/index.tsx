import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Form} from '@src/components'
import {HeaderContainer} from '@src/containers/header'
import {FooterContainer} from '@src/containers/footer'
import * as ROUTES from '@src/constants/routes'
import {SignUpType} from './types'

export * from './types'

export const SignUp: SignUpType = () => {
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = firstName === '' || password === '' || emailAddress === ''

    const handleSignup = (event) => {
        event.preventDefault()
        //TODO: registration process
        navigate(ROUTES.BROWSE)
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignup} method='POST'>
                        <Form.Input
                            placeholder='First name'
                            value={firstName}
                            onChange={({target}) => setFirstName(target.value)}
                        />
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
                        <Form.Submit disabled={isInvalid} type='submit' data-testid='sign-up'>
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a user? <Form.Link to='/signin'>Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}
export default SignUp
