import * as Styles from './styles'
import {HeaderButtonLinkType} from './types'

export * from './types'

export const HeaderButtonLink: HeaderButtonLinkType = ({children, to, ...restProps}) => (
    <Styles.ButtonLink {...restProps} to={to}>{children}</Styles.ButtonLink>
)
