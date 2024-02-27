import * as Styles from './styles'
import {FooterBreakType} from './types'

export * from './types'

export const FooterBreak: FooterBreakType = ({children, ...restProps}) => (
    <Styles.Break {...restProps}>{children}</Styles.Break>
)
