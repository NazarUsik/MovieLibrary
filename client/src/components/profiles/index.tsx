import * as Styles from './styles/profiles'
import {ProfilesType} from './types'
import {ProfilesList} from './list'
import {ProfilesName} from './name'
import {ProfilesPicture} from './picture'
import {ProfilesTitle} from './title'
import {ProfilesItem} from './item'

export * from './types'

export const Profiles: ProfilesType = ({children, ...restProps}) => (
    <Styles.Container {...restProps}>{children}</Styles.Container>
)

Profiles.List = ProfilesList
Profiles.Name = ProfilesName
Profiles.Picture = ProfilesPicture
Profiles.Title = ProfilesTitle
Profiles.User = ProfilesItem

export default Profiles
