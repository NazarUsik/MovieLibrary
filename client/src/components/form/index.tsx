import * as Styles from './styles'
import {FormType} from './types'
import {FormBase} from './base'
import {FormError} from './error'
import {FormInput} from './input'
import {FormLink} from './link'
import {FormSubmit} from './submit'
import {FormText} from './text'
import {FormTextSmall} from './textSmall'
import {FormTitle} from './title'

export * from './types'

export const Form: FormType = ({children, ...restProps}) => (
    <Styles.Container {...restProps}>{children}</Styles.Container>
)

Form.Base = FormBase
Form.Error = FormError
Form.Input = FormInput
Form.Link = FormLink
Form.Submit = FormSubmit
Form.Text = FormText
Form.TextSmall = FormTextSmall
Form.Title = FormTitle

export default Form
