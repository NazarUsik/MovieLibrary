import {JSX} from 'react'

export type HeaderLinkProps = JSX.IntrinsicElements['p'] & {
    active?: string
}

export type HeaderLinkType = (props: HeaderLinkProps) => JSX.Element
