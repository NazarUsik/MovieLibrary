import styled from 'styled-components'
import {Link as ReactRouterLink} from 'react-router-dom'
import {HeaderButtonLinkType} from '../types'

export const ButtonLink: HeaderButtonLinkType = styled(ReactRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background: #f40612;
    }
`
