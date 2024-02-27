import {BrowseContainer} from '@src/containers/browse'
import {useContent} from '@src/hooks'
import {selectionFilter} from '@src/utils'
import {BrowseType} from './types'
import {useState} from 'react'

export * from './types'

export const Browse: BrowseType = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const {series} = useContent('series', searchTerm)
    const {films} = useContent('films', searchTerm)
    const slides = selectionFilter({series, films})

    return <BrowseContainer slides={slides}
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}/>
}

export default Browse
