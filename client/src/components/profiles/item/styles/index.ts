import styled from 'styled-components'
import {ProfilesItemType} from '../types'
import {Picture} from '../../picture/styles'
import {Name} from '../../name/styles'

export const Item: ProfilesItemType = styled.li`
    max-height: 200px;
    max-width: 200px;
    list-style-type: none;
    text-align: center;
    margin-right: 30px;

    &:hover > ${Picture} {
        border: 3px solid white;
    }

    &:hover ${Name} {
        font-weight: bold;
        color: white;
    }

    &:last-of-type {
        margin-right: 0;
    }
`

