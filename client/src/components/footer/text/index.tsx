import * as Styles from './styles'
import {FooterTextType} from './types'

export * from './types'

export const FooterText: FooterTextType = ({children, ...restProps}) => (
    <Styles.Text {...restProps}>{children}</Styles.Text>
)
