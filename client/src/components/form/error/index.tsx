import * as Styles from './styles'
import {FormErrorType} from './types'

export * from './types'

export const FormError: FormErrorType = ({children, ...restProps}) => (
    <Styles.Error {...restProps}>{children}</Styles.Error>
)
