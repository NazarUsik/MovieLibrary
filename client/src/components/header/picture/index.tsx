import * as Styles from './styles'
import {HeaderPictureType} from './types'

export * from './types'

export const HeaderPicture: HeaderPictureType = ({children, src, ...restProps}) => (
    <Styles.Picture {...restProps} src={`/images/users/${src}.png`}>{children}</Styles.Picture>
)
