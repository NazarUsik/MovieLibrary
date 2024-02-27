import styled from 'styled-components'
import {JumbotronSubTitleType} from '../types'

export const SubTitle: JumbotronSubTitleType = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`
