import * as Styles from './styles'
import {ProfilesItemType} from './types'

export * from './types'

export const ProfilesItem: ProfilesItemType = ({children, ...restProps}) => (
    <Styles.Item {...restProps}>{children}</Styles.Item>
)
