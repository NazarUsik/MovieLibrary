import * as Styles from './styles'
import {FooterLinkType} from './types'

export * from './types'

export const FooterLink: FooterLinkType = ({children, ...restProps}) => (
    <Styles.Link {...restProps}>{children}</Styles.Link>
)
