import styled from 'styled-components'
import {FeatureTitleType} from '../types'

export const Title: FeatureTitleType = styled.h1`
    color: white;
    max-width: 640px;
    font-size: 50px;
    font-weight: 500;
    margin: auto;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`
