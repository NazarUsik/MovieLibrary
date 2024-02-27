import * as Styles from './styles'
import {CardImageType} from './types'

export * from './types'

export const CardImage: CardImageType = ({children, ...restProps}) => (
    <Styles.Image {...restProps}>{children}</Styles.Image>
)
