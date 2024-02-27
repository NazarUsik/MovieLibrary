import * as Styles from './styles'
import {ProfilesPictureType} from './types'

export * from './types'

export const ProfilesPicture: ProfilesPictureType = ({children, src, ...restProps}) => (
    <Styles.Picture {...restProps}
                    src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
    >{children}</Styles.Picture>
)
