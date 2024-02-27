import {JSX} from 'react'
import {AccordionBodyType} from './body/types'
import {AccordionFrameType} from './frame/types'
import {AccordionHeaderType} from './header/types'
import {AccordionItemType} from './item/types'
import {AccordionTitleType} from './title/types'

export type AccordionProps = JSX.IntrinsicElements['div'] & {}

export type AccordionComponent = (props: AccordionProps) => JSX.Element
export type AccordionType = AccordionComponent & {
    Body: AccordionBodyType
    Frame: AccordionFrameType
    Header: AccordionHeaderType
    Item: AccordionItemType
    Title: AccordionTitleType
}
