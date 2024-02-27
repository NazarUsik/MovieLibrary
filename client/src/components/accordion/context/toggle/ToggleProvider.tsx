import {ToggleContext} from './context'
import {ToggleProviderType} from './types'

export const ToggleProvider: ToggleProviderType = ({children, ...props}) => (
    <ToggleContext.Provider value={props}>
        {children}
    </ToggleContext.Provider>
)
