import * as Styles from './styles'
import {HeaderType} from './types'
import {HeaderFrame} from './frame'
import {HeaderGroup} from './group'
import {HeaderLogo} from './logo'
import {HeaderSearch} from './search'
import {HeaderProfile} from './profile'
import {HeaderFeature} from './feature'
import {HeaderPicture} from './picture'
import {HeaderDropdown} from './dropdown'
import {HeaderLink} from './link'
import {HeaderPlayButton} from './playButton'
import {HeaderFeatureCallOut} from './featureCallOut'
import {HeaderText} from './text'
import {HeaderButtonLink} from './buttonLink'

export const Header: HeaderType = ({bg = true, children, ...restProps}) => (
    bg
        ? <Styles.Background data-testid='header-bg' {...restProps}>
            {children}
        </Styles.Background>
        : <>{children}</>
)

Header.Frame = HeaderFrame
Header.Group = HeaderGroup
Header.Logo = HeaderLogo
Header.Search = HeaderSearch
Header.Profile = HeaderProfile
Header.Feature = HeaderFeature
Header.Picture = HeaderPicture
Header.Dropdown = HeaderDropdown
Header.TextLink = HeaderLink
Header.PlayButton = HeaderPlayButton
Header.FeatureCallOut = HeaderFeatureCallOut
Header.Text = HeaderText
Header.ButtonLink = HeaderButtonLink

export default Header
