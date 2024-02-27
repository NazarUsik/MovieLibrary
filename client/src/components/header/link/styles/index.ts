import styled from 'styled-components'
import {HeaderLinkProps} from '../types'

export const Link = styled.p<HeaderLinkProps>`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({active}) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }
`
