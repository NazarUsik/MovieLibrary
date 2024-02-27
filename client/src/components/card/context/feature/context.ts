import {createContext} from 'react'
import {FeatureContextType} from './types'

export const FeatureContext = createContext<FeatureContextType>({
    setShowFeature: () => {
    },
    featureItem: {},
    setFeatureItem: () => {
    }
})
