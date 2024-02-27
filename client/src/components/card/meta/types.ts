import {JSX} from 'react'

export type CardMetaProps = JSX.IntrinsicElements['div'] & {}

export type CardMetaType = (props: CardMetaProps) => JSX.Element
