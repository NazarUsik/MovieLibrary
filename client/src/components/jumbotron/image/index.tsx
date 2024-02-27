import * as Styles from './styles'
import {JumbotronImageType} from './types'

export * from './types'

export const JumbotronImage: JumbotronImageType = ({children, ...restProps}) => (
    <Styles.Image {...restProps}>{children}</Styles.Image>
)
