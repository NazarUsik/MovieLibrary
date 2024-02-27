import {JSX} from 'react'

export type PlayerButtonProps = JSX.IntrinsicElements['button'] & {}

export type PlayerButtonType = (props: PlayerButtonProps) => JSX.Element
