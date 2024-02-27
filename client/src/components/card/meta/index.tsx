import * as Styles from './styles'
import {CardMetaType} from './types'

export * from './types'

export const CardMeta: CardMetaType = ({children, ...restProps}) => (
    <Styles.Meta {...restProps}>{children}</Styles.Meta>
)
