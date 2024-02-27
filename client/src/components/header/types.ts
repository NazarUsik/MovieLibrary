import {JSX} from 'react'
import {HeaderFrameType} from './frame/types'
import {HeaderGroupType} from './group/types'
import {HeaderLogoType} from './logo/types'
import {HeaderSearchType} from './search/types'
import {HeaderProfileType} from './profile/types'
import {HeaderFeatureType} from './feature/types'
import {HeaderPictureType} from './picture/types'
import {HeaderDropdownType} from './dropdown/types'
import {HeaderLinkType} from './link/types'
import {HeaderPlayButtonType} from './playButton/types'
import {HeaderFeatureCallOutType} from './featureCallOut/types'
import {HeaderTextType} from './text/types'
import {HeaderButtonLinkType} from './buttonLink/types'

export type HeaderProps = JSX.IntrinsicElements['div'] & {
    src?: string
    dontShowOnSmallViewPort?: boolean
    bg?: boolean
}

export type HeaderComponent = (props: HeaderProps) => JSX.Element
export type HeaderType = HeaderComponent & {
    Frame: HeaderFrameType
    Group: HeaderGroupType
    Logo: HeaderLogoType
    Search: HeaderSearchType
    Profile: HeaderProfileType
    Feature: HeaderFeatureType
    Picture: HeaderPictureType
    Dropdown: HeaderDropdownType
    TextLink: HeaderLinkType
    PlayButton: HeaderPlayButtonType
    FeatureCallOut: HeaderFeatureCallOutType
    Text: HeaderTextType
    ButtonLink: HeaderButtonLinkType
}
