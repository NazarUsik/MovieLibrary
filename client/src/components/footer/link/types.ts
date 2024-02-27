import {JSX} from 'react'

export type FooterLinkProps = JSX.IntrinsicElements['a'] & {}

export type FooterLinkType = (props: FooterLinkProps) => JSX.Element
