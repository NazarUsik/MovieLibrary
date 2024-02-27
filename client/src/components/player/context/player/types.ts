import {Dispatch, ReactElement, SetStateAction} from 'react'

export interface PlayerContextType {
    showPlayer?: boolean
    setShowPlayer: Dispatch<SetStateAction<boolean>>
}

export interface PlayerProviderProps extends PlayerContextType {
    children: ReactElement[] | ReactElement
}

export type PlayerProviderType = (props: PlayerProviderProps) => ReactElement
