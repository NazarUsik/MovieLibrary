import * as Styles from './styles'
import {OptFormButtonType} from './types'
import {icon} from '@src/icons'

export * from './types'

export const OptFormButton: OptFormButtonType = ({children, ...restProps}) => (
    <Styles.Button {...restProps}>
        {children}
        {icon('MdChevronRight', {size: '48pt', color: 'black'})}
    </Styles.Button>
)
