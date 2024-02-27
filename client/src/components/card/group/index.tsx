import * as Styles from './styles'
import {CardGroupType} from './types'

export * from './types'

export const CardGroup: CardGroupType = ({children, ...restProps}) => (
    <Styles.Group {...restProps}>{children}</Styles.Group>
)
