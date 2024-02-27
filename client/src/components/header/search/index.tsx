import {useState} from 'react'
import * as Styles from './styles'
import {HeaderSearchType} from './types'
import {icon} from '@src/icons'

export * from './types'

export const HeaderSearch: HeaderSearchType = ({searchTerm, setSearchTerm, ...restProps}) => {
    const [searchActive, setSearchActive] = useState(false)

    return (
        <Styles.Search {...restProps}>
            <Styles.SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)}
                               data-testid='search-click'>
                {icon('MdSearch', {size: '48pt', color: 'white'})}
            </Styles.SearchIcon>
            <Styles.SearchInput
                value={searchTerm}
                onChange={({target}) => setSearchTerm(target.value)}
                placeholder='Search films and series'
                active={searchActive}
                data-testid='search-input'
            />
        </Styles.Search>
    )
}
