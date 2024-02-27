import {JSX} from 'react'
import {FooterBreakType} from './break/types'
import {FooterColumnType} from './column/types'
import {FooterLinkType} from './link/types'
import {FooterRowType} from './row/types'
import {FooterTextType} from './text/types'
import {FooterTitleType} from './title/types'

export type FooterProps = JSX.IntrinsicElements['div'] & {}

export type FooterComponent = (props: FooterProps) => JSX.Element
export type FooterType = FooterComponent & {
    Break: FooterBreakType
    Column: FooterColumnType
    Link: FooterLinkType
    Row: FooterRowType
    Text: FooterTextType
    Title: FooterTitleType
}
