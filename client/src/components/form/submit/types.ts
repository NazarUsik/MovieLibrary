import {JSX} from 'react'

export type FormSubmitProps = JSX.IntrinsicElements['button'] & {}

export type FormSubmitType = (props: FormSubmitProps) => JSX.Element
