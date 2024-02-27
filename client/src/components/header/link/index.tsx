import * as Styles from './styles'
import {HeaderLinkType} from './types'

export * from './types'

export const HeaderLink: HeaderLinkType = ({children, ...restProps}) => (
    <Styles.Link {...restProps}>{children}</Styles.Link>
)
