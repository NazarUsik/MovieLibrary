import {useContext} from 'react'
import {FeatureContext} from './context'

export const useFeature = () => useContext(FeatureContext)
