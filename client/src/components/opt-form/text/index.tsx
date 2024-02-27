import * as Styles from './styles'
import {OptFormTextType} from './types'

export * from './types'

export const OptFormText: OptFormTextType = ({children, ...restProps}) => (
    <Styles.Text {...restProps}>{children}</Styles.Text>
)
