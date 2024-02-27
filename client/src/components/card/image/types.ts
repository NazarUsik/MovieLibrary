import {JSX} from 'react'

export type CardImageProps = JSX.IntrinsicElements['img'] & {}

export type CardImageType = (props: CardImageProps) => JSX.Element
