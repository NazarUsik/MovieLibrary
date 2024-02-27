import {JSX} from 'react'

export type CardTextProps = JSX.IntrinsicElements['p'] & {}

export type CardTextType = (props: CardTextProps) => JSX.Element
