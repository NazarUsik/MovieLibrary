import {JSX} from 'react'
import {JumbotronContainerType} from './container'
import {JumbotronImageType} from './image'
import {JumbotronPaneType} from './pane'
import {JumbotronSubTitleType} from './subTitle'
import {JumbotronTitleType} from './title'

export type JumbotronProps = JSX.IntrinsicElements['div'] & {
    direction?: 'row' | 'column'
}

export type JumbotronComponent = (props: JumbotronProps) => JSX.Element
export type JumbotronType = JumbotronComponent & {
    Container: JumbotronContainerType
    Image: JumbotronImageType
    Pane: JumbotronPaneType
    SubTitle: JumbotronSubTitleType
    Title: JumbotronTitleType
}
