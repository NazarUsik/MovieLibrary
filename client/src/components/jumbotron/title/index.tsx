import * as Styles from './styles'
import {JumbotronTitleType} from './types'

export * from './types'

export const JumbotronTitle: JumbotronTitleType = ({children, ...restProps}) => (
    <Styles.Title {...restProps}>{children}</Styles.Title>
)
