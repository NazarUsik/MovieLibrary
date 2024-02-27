import styled from 'styled-components'
import {FeatureSubTitleType} from '../types'

export const SubTitle: FeatureSubTitleType = styled.h2`
    color: white;
    font-size: 26px;
    font-weight: normal;
    margin: 16px auto;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`