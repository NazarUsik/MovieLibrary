import * as Styles from './styles'
import {CardTextType} from './types'

export * from './types'

export const CardText: CardTextType = ({children, ...restProps}) => (
    <Styles.Text {...restProps}>{children}</Styles.Text>
)
