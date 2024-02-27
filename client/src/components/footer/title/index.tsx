import * as Styles from './styles'
import {FooterTitleType} from './types'

export * from './types'

export const FooterTitle: FooterTitleType = ({children, ...restProps}) => (
    <Styles.Title {...restProps}>{children}</Styles.Title>
)
