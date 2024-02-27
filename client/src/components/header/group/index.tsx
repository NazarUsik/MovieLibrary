import * as Styles from './styles'
import {HeaderGroupType} from './types'

export * from './types'

export const HeaderGroup: HeaderGroupType = ({children, ...restProps}) => (
    <Styles.Group {...restProps}>{children}</Styles.Group>
)
