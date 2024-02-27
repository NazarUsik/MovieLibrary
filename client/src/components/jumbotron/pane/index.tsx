import * as Styles from './styles'
import {JumbotronPaneType} from './types'

export * from './types'

export const JumbotronPane: JumbotronPaneType = ({children, ...restProps}) => (
    <Styles.Pane {...restProps}>{children}</Styles.Pane>
)
