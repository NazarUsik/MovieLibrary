import * as Styles from './styles'
import {FormBaseType} from './types'

export * from './types'

export const FormBase: FormBaseType = ({children, ...restProps}) => (
    <Styles.Base {...restProps}>{children}</Styles.Base>
)
