import {JSX} from 'react'
import {FeatureItem} from '../context/feature'

export type CardItemProps = JSX.IntrinsicElements['div'] & {
    item: FeatureItem
}

export type CardItemType = (props: CardItemProps) => JSX.Element
