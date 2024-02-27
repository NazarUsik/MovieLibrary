import * as Styles from './styles'
import {ProfilesListType} from './types'

export * from './types'

export const ProfilesList: ProfilesListType = ({children, ...restProps}) => (
    <Styles.List {...restProps}>{children}</Styles.List>
)
