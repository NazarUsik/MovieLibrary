import styled from 'styled-components'

import {Meta} from '../../meta/styles'
import {Text} from '../../text/styles'
import {SubTitle} from '../../subTitle/styles'

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    position: relative;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.3);
        z-index: 99;
    }

    @media (min-width: 1200px) {
        &:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
            display: block;
            z-index: 100;
        }
    }

    &:first-of-type {
        margin-left: 56px;

        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }

    &:last-of-type {
        margin-right: 56px;

        @media (max-width: 1000px) {
            margin-right: 30px;
        }
    }
`
