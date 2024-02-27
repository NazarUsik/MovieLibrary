import {JSX} from 'react'

export type AccordionItemProps = JSX.IntrinsicElements['div'] & {}

export type AccordionItemType = (props: AccordionItemProps) => JSX.Element
