import styled from 'styled-components'
import {AccordionTitleType} from '../types'

export const Title: AccordionTitleType = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`
