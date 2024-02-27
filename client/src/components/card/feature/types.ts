import {JSX} from 'react'

export type CardFeatureProps = JSX.IntrinsicElements['div'] & {
    category: string
}

export type CardFeatureType = (props: CardFeatureProps) => JSX.Element
