import * as Styles from './styles'
import {ProfilesTitleType} from './types'

export * from './types'

export const ProfilesTitle: ProfilesTitleType = ({children, ...restProps}) => (
    <Styles.Title {...restProps}>{children}</Styles.Title>
)
