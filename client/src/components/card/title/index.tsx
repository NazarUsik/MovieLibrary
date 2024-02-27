import * as Styles from './styles'
import {CardTitleType} from './types'

export * from './types'

export const CardTitle: CardTitleType = ({children, ...restProps}) => (
    <Styles.Title {...restProps}>{children}</Styles.Title>
)
