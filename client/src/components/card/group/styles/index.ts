import styled from 'styled-components'
import {CardGroupType, CardGroupProps} from '../types'
import {Container} from '../../styles'

export const Group: CardGroupType = styled.div<CardGroupProps>`
    display: flex;
    flex-direction: ${({flexDirection}) => (flexDirection === 'row' ? 'row' : 'column')};
    ${({alignItems}) => alignItems && `align-items: ${alignItems}`};
    ${({margin}) => margin && `margin: ${margin}`};

    > ${Container}:first-of-type {
        @media (min-width: 1100px) {
            margin-top: -100px;
        }
    }
`
