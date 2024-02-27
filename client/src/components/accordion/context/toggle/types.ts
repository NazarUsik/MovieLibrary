import {ReactElement} from 'react'

export interface ToggleContextType {
    toggleShow?: boolean,
    setToggleShow: (toggleShow: boolean) => void
}

export interface ToggleProviderProps extends ToggleContextType {
    children: ReactElement[] | ReactElement
}

export type ToggleProviderType = (props: ToggleProviderProps) => ReactElement
