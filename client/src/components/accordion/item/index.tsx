import {useState} from 'react'
import * as Styles from './styles'
import {ToggleProvider} from '../context/toggle'
import {AccordionItemType} from './types'

export * from './types'

export const AccordionItem: AccordionItemType = ({children, ...restProps}) => {
    const [toggleShow, setToggleShow] = useState(false)

    return (
        <ToggleProvider toggleShow={toggleShow} setToggleShow={setToggleShow}>
            <Styles.Item {...restProps}>{children}</Styles.Item>
        </ToggleProvider>
    )
}
