import {JSX} from 'react'

export type HeaderSearchProps = JSX.IntrinsicElements['div'] & {
    searchTerm: string
    setSearchTerm: (searchTerm: string) => void
}

export type HeaderSearchType = (props: HeaderSearchProps) => JSX.Element
