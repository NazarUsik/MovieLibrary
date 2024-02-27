import * as Styles from './styles'
import {OptFormBreakType} from './types'

export * from './types'

export const OptFormBreak: OptFormBreakType = ({children, ...restProps}) => (
    <Styles.Break {...restProps}>{children}</Styles.Break>
)
