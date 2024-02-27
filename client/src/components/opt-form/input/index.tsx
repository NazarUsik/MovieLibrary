import * as Styles from './styles'
import {OptFormInputType} from './types'

export * from './types'

export const OptFormInput: OptFormInputType = ({children, ...restProps}) => (
    <Styles.Input {...restProps}>{children}</Styles.Input>
)
