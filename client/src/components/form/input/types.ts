import {JSX} from 'react'

export type FormInputProps = JSX.IntrinsicElements['input'] & {}

export type FormInputType = (props: FormInputProps) => JSX.Element
