import {useContext} from 'react'
import {ToggleContext} from './context'

export const useToggle = () => useContext(ToggleContext)
