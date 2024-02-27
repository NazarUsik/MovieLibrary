import * as Styles from './styles'
import {ProfilesNameType} from './types'

export * from './types'

export const ProfilesName: ProfilesNameType = ({children, ...restProps}) => (
    <Styles.Name {...restProps}>{children}</Styles.Name>
)
