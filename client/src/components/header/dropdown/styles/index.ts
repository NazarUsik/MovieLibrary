import styled from 'styled-components'
import {Group} from '../../group/styles'
import {Link} from '../../link/styles'
import {Picture} from '../../picture/styles'

export const Dropdown = styled.div`
    display: none;
    position: absolute;
    background-color: black;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;

    ${Group}:last-of-type ${Link} {
        cursor: pointer;
    }

    ${Group} {
        margin-bottom: 10px;

        &:last-of-type {
            margin-bottom: 0;
        }

        ${Link} {
            cursor: pointer;
        }

        ${Picture} {
            cursor: default;
        }
    }

    button {
        margin-right: 10px;
    }

    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
`
