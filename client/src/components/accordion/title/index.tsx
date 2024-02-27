import * as Styles from './styles'
import {AccordionTitleType} from './types'

export * from './types'

export const AccordionTitle: AccordionTitleType = ({children, ...restProps}) => (
    <Styles.Title {...restProps}>{children}</Styles.Title>
)
