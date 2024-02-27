import styled from 'styled-components'
import {JumbotronTitleType} from '../types'

export const Title: JumbotronTitleType = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`
