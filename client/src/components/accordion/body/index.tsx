import * as Styles from './styles'
import {AccordionBodyType} from './types'
import {useToggle} from '../context/toggle'

export * from './types'

export const AccordionBody: AccordionBodyType = ({children, ...restProps}) => {
    const {toggleShow} = useToggle()

    return (
        <Styles.Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
            <span>{children}</span>
        </Styles.Body>
    )
}
