import * as Styles from './styles'
import {AccordionType} from './types'
import {AccordionBody} from './body'
import {AccordionFrame} from './frame'
import {AccordionHeader} from './header'
import {AccordionItem} from './item'
import {AccordionTitle} from './title'

export * from './types'

export const Accordion: AccordionType = ({children, ...restProps}) => (
    <Styles.Container {...restProps}>
        <Styles.Inner>{children}</Styles.Inner>
    </Styles.Container>
)

Accordion.Body = AccordionBody
Accordion.Frame = AccordionFrame
Accordion.Header = AccordionHeader
Accordion.Item = AccordionItem
Accordion.Title = AccordionTitle

export default Accordion
