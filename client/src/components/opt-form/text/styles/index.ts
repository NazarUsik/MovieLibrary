import styled from 'styled-components'
import {OptFormTextType} from '../types'

export const Text: OptFormTextType = styled.p`
    font-size: 19px;
    color: white;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`
