import * as Styles from './styles'
import {FooterRowType} from './types'

export * from './types'

export const FooterRow: FooterRowType = ({children, ...restProps}) => (
    <Styles.Row {...restProps}>{children}</Styles.Row>
)
