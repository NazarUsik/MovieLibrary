import * as Styles from './styles'
import {HeaderPlayButtonType} from './types'

export * from './types'

export const HeaderPlayButton: HeaderPlayButtonType = ({children, ...restProps}) => (
    <Styles.PlayButton {...restProps}>{children}</Styles.PlayButton>
)
