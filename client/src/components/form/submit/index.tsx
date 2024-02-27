import * as Styles from './styles'
import {FormSubmitType} from './types'

export * from './types'

export const FormSubmit: FormSubmitType = ({children, ...restProps}) => (
    <Styles.Submit {...restProps}>{children}</Styles.Submit>
)
