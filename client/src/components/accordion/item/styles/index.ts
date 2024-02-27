import styled from 'styled-components'
import {AccordionItemType} from '../types'

export const Item: AccordionItemType = styled.div`
    color: white;
    margin: auto auto 10px;
    max-width: 728px;
    width: 100%;

    &:first-of-type {
        margin-top: 3em;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`
