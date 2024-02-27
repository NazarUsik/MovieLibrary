import * as Styles from './styles'
import {HeaderTextType} from './types'

export * from './types'

export const HeaderText: HeaderTextType = ({children, ...restProps}) => (
    <Styles.Text {...restProps}>{children}</Styles.Text>
)
