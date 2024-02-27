import * as Styles from './styles'
import {AccordionFrameType} from './types'

export * from './types'

export const AccordionFrame: AccordionFrameType = ({children, ...restProps}) => (
    <Styles.Frame {...restProps}>{children}</Styles.Frame>
)
