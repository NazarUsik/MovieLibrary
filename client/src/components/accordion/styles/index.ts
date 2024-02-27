import styled from 'styled-components'
import {AccordionType} from '../types'

export const Container: AccordionType = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
`

export const Inner: AccordionType = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`
