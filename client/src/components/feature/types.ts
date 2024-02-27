import {JSX} from 'react'
import {FeatureSubTitleType} from './subTitle/types'
import {FeatureTitleType} from './title/types'

export type FeatureProps = JSX.IntrinsicElements['div'] & {}

export type FeatureComponent = (props: FeatureProps) => JSX.Element
export type FeatureType = FeatureComponent & {
    SubTitle: FeatureSubTitleType
    Title: FeatureTitleType
}
