import {Feature, OptForm} from '@src/components'
import {HeaderContainer} from '@src/containers/header'
import {JumbotronContainer} from '@src/containers/jumbotron'
import {FaqsContainer} from '@src/containers/faqs'
import {FooterContainer} from '@src/containers/footer'
import {HomeType} from './types'

export * from './types'

export const Home: HomeType = () => (
    <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                <OptForm>
                    <OptForm.Input placeholder='Email address'/>
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break/>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your
                        membership.</OptForm.Text>
                </OptForm>
            </Feature>
        </HeaderContainer>

        <JumbotronContainer/>
        <FaqsContainer/>
        <FooterContainer/>
    </>
)
export default Home
