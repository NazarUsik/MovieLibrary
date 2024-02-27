import styled from 'styled-components'
import {JumbotronContainerType} from '../types'
import {Item} from '../../styles'

export const Container: JumbotronContainerType = styled.div`
    @media (max-width: 1000px) {
        ${Item}:last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`
