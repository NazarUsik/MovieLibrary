import * as Styles from './styles'
import {FormTextType} from './types'

export * from './types'

export const FormText: FormTextType = ({children, ...restProps}) => (
    <Styles.Text {...restProps}>{children}</Styles.Text>
)
