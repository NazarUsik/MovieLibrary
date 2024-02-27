import * as Styles from './styles'
import {FormInputType} from './types'

export * from './types'

export const FormInput: FormInputType = ({children, ...restProps}) => (
    <Styles.Input {...restProps}>{children}</Styles.Input>
)
