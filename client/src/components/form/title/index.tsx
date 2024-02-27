import * as Styles from './styles'
import {FormTitleType} from './types'

export * from './types'

export const FormTitle: FormTitleType = ({children, ...restProps}) => (
    <Styles.Title {...restProps}>{children}</Styles.Title>
)
