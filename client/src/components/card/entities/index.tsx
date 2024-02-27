import * as Styles from './styles'
import {CardEntitiesType} from './types'

export * from './types'

export const CardEntities: CardEntitiesType = ({children, ...restProps}) => (
    <Styles.Entities {...restProps}>{children}</Styles.Entities>
)
