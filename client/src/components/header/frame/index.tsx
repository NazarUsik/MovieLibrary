import * as Styles from './styles'
import {HeaderFrameType} from './types'

export * from './types'

export const HeaderFrame: HeaderFrameType = ({children, ...restProps}) => (
    <Styles.Container {...restProps}>{children}</Styles.Container>
)
