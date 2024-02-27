import {JSX} from 'react'

export type FormErrorProps = JSX.IntrinsicElements['div'] & {}

export type FormErrorType = (props: FormErrorProps) => JSX.Element
