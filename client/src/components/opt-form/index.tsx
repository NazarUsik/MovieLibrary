import * as Styles from './styles'
import {OptFormBreak} from './break'
import {OptFormButton} from './button'
import {OptFormInput} from './input'
import {OptFormText} from './text'
import {OptFormType} from './types'

export * from './types'

export const OptForm: OptFormType = ({children, ...restProps}) => (
    <Styles.Container {...restProps}>{children}</Styles.Container>
)

OptForm.Break = OptFormBreak
OptForm.Button = OptFormButton
OptForm.Input = OptFormInput
OptForm.Text = OptFormText

export default OptForm
