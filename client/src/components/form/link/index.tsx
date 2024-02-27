import * as Styles from './styles'
import {FormLinkType} from './types'

export * from './types'

export const FormLink: FormLinkType = ({children, ...restProps}) => (
    <Styles.Link {...restProps}>{children}</Styles.Link>
)
