import * as Styles from './styles'
import {FormTextSmallType} from './types'

export * from './types'

export const FormTextSmall: FormTextSmallType = ({children, ...restProps}) => (
    <Styles.TextSmall {...restProps}>{children}</Styles.TextSmall>
)
