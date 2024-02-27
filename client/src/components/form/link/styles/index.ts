import styled from 'styled-components'
import {Link as ReactRouterLink} from 'react-router-dom'
import {FormLinkType} from '../types'

export const Link: FormLinkType = styled(ReactRouterLink)`
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`
