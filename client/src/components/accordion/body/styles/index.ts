import styled from 'styled-components'
import {AccordionBodyType} from '../types'

export const Body: AccordionBodyType = styled.div`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;
    background: #303030;
    white-space: pre-wrap;
    user-select: none;
    overflow: hidden;

    &.closed {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }

    &.open {
        max-height: 1200px;
        transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    }

    span {
        display: block;
        padding: 0.8em 2.2em 0.8em 1.2em;
    }

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 22px;
    }
`
