import {ReactElement} from 'react'
import {MovieDetail} from '@src/types/movie.types'

export interface FeatureItem extends Partial<MovieDetail> {
}

export interface FeatureContextType {
    showFeature?: boolean
    setShowFeature: (showFeature: boolean) => void
    featureItem: FeatureItem
    setFeatureItem: (itemFeature: FeatureItem) => void
}

export interface FeatureProviderProps extends FeatureContextType {
    children: ReactElement[] | ReactElement
}

export type FeatureProviderType = (props: FeatureProviderProps) => ReactElement
