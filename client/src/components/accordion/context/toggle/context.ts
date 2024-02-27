import {createContext} from 'react'
import {ToggleContextType} from './types'

export const ToggleContext = createContext<ToggleContextType>({
    setToggleShow: () => {
    },
})
