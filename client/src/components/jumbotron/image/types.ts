import {JSX} from 'react'

export type JumbotronImageProps = JSX.IntrinsicElements['img'] & {}

export type JumbotronImageType = (props: JumbotronImageProps) => JSX.Element
