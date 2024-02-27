import * as Styles from './styles'
import {FooterType} from './types'
import {FooterBreak} from './break'
import {FooterColumn} from './column'
import {FooterLink} from './link'
import {FooterRow} from './row'
import {FooterText} from './text'
import {FooterTitle} from './title'

export * from './types'

export const Footer: FooterType = ({children, ...restProps}) => (
    <Styles.Container {...restProps}>{children}</Styles.Container>
)

Footer.Break = FooterBreak
Footer.Column = FooterColumn
Footer.Link = FooterLink
Footer.Row = FooterRow
Footer.Text = FooterText
Footer.Title = FooterTitle

export default Footer
