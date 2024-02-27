import {JSX} from 'react'
import {LinkProps as ReactRouterLinkProps} from 'react-router-dom'

export interface HeaderButtonLinkProps extends ReactRouterLinkProps {
}

export type HeaderButtonLinkType = (props: HeaderButtonLinkProps) => JSX.Element
