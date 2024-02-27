import {PlayerContext} from './context'
import {PlayerProviderType} from './types'

export const PlayerProvider: PlayerProviderType = ({children, ...props}) => (
    <PlayerContext.Provider value={props}>
        {children}
    </PlayerContext.Provider>
)
