import {JSX} from 'react'
import {MovieSections} from '@src/types/movie.types'

export interface BrowseContainerProps {
    slides: MovieSections
    searchTerm: string
    setSearchTerm: (value: string) => void
}

export type BrowseContainerType = (props: BrowseContainerProps) => JSX.Element
