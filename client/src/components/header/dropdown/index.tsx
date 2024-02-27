import * as Styles from './styles'
import {HeaderDropdownType} from './types'

export * from './types'

export const HeaderDropdown: HeaderDropdownType = ({children, ...restProps}) => (
    <Styles.Dropdown {...restProps}>{children}</Styles.Dropdown>
)
