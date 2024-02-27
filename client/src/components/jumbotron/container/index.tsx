import * as Styles from './styles'
import {JumbotronContainerType} from './types'

export * from './types'

export const JumbotronContainer: JumbotronContainerType = ({children, ...restProps}) => (
    <Styles.Container {...restProps}>{children}</Styles.Container>
)
