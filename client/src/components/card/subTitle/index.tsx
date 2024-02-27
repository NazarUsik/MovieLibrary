import * as Styles from './styles'
import {CardSubTitleType} from './types'

export * from './types'

export const CardSubTitle: CardSubTitleType = ({children, ...restProps}) => (
    <Styles.SubTitle {...restProps}>{children}</Styles.SubTitle>
)
