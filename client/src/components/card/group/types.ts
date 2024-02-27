import {JSX} from 'react'

export type CardGroupProps = JSX.IntrinsicElements['div'] & {
    flexDirection?: string
    alignItems?: string
    margin?: string
}

export type CardGroupType = (props: CardGroupProps) => JSX.Element
