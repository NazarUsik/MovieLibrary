import {JSX} from 'react'
import {OptFormBreakType} from './break/types'
import {OptFormButtonType} from './button/types'
import {OptFormInputType} from './input/types'
import {OptFormTextType} from './text/types'

export type OptFormProps = JSX.IntrinsicElements['div'] & {}

export type OptFormComponent = (props: OptFormProps) => JSX.Element
export type OptFormType = OptFormComponent & {
    Break: OptFormBreakType
    Button: OptFormButtonType
    Input: OptFormInputType
    Text: OptFormTextType
}
