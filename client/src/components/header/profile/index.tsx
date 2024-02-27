import * as Styles from './styles'
import {HeaderProfileType} from './types'

export * from './types'

export const HeaderProfile: HeaderProfileType = ({children, ...restProps}) => (
    <Styles.Profile {...restProps}>{children}</Styles.Profile>
)
