import {JSX} from 'react'
import {FormBaseType} from './base/types'
import {FormErrorType} from './error/types'
import {FormInputType} from './input/types'
import {FormLinkType} from './link/types'
import {FormSubmitType} from './submit/types'
import {FormTextType} from './text/types'
import {FormTextSmallType} from './textSmall/types'
import {FormTitleType} from './title/types'

export type FormProps = JSX.IntrinsicElements['div'] & {}

export type FormComponent = (props: FormProps) => JSX.Element
export type FormType = FormComponent & {
    Base: FormBaseType
    Error: FormErrorType
    Input: FormInputType
    Link: FormLinkType
    Submit: FormSubmitType
    Text: FormTextType
    TextSmall: FormTextSmallType
    Title: FormTitleType
}
