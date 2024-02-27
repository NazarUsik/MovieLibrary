import {JSX} from 'react'

export type FormBaseProps = JSX.IntrinsicElements['form'] & {}

export type FormBaseType = (props: FormBaseProps) => JSX.Element
