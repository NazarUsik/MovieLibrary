import * as Styles from './styles'
import {JumbotronSubTitleType} from './types'

export * from './types'

export const JumbotronSubTitle: JumbotronSubTitleType = ({children, ...restProps}) => (
    <Styles.SubTitle {...restProps}>{children}</Styles.SubTitle>
)
