import {JSX} from 'react'

export interface HeaderContainerProps {
    children?: JSX.Element | JSX.Element[]
}

export type HeaderContainerType = (props: HeaderContainerProps) => JSX.Element
