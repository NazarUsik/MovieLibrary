import * as Styles from './styles'
import {FooterColumnType} from './types'

export * from './types'

export const FooterColumn: FooterColumnType = ({children, ...restProps}) => (
    <Styles.Column {...restProps}>{children}</Styles.Column>
)
