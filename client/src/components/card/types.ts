import {JSX} from 'react'
import {CardEntitiesType} from './entities/types'
import {CardFeatureType} from './feature/types'
import {CardGroupType} from './group/types'
import {CardImageType} from './image/types'
import {CardItemType} from './item/types'
import {CardMetaType} from './meta/types'
import {CardSubTitleType} from './subTitle/types'
import {CardTextType} from './text/types'
import {CardTitleType} from './title/types'

export type CardProps = JSX.IntrinsicElements['div'] & {}

export type CardComponent = (props: CardProps) => JSX.Element
export type CardType = CardComponent & {
    Entities: CardEntitiesType
    Feature: CardFeatureType
    Group: CardGroupType
    Image: CardImageType
    Item: CardItemType
    Meta: CardMetaType
    SubTitle: CardSubTitleType
    Text: CardTextType
    Title: CardTitleType
}
