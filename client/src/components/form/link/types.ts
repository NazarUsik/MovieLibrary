import {JSX} from 'react'
import {LinkProps as ReactRouterLinkProps} from 'react-router-dom'

export interface FormLinkProps extends ReactRouterLinkProps {

}

export type FormLinkType = (props: FormLinkProps) => JSX.Element
