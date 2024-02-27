import styled from 'styled-components'
import {HeaderFeatureType} from '../types'
import {Container} from '../../frame/styles'

export const Feature: HeaderFeatureType = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;

    @media (max-width: 1100px) {
        display: none;
    }
`
