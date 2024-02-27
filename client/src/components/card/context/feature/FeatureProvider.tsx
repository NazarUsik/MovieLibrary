import {FeatureContext} from './context'
import {FeatureProviderType} from './types'

export const FeatureProvider: FeatureProviderType = ({children, ...props}) => (
    <FeatureContext.Provider value={props}>
        {children}
    </FeatureContext.Provider>
)
