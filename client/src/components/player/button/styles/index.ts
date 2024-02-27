import styled from 'styled-components'
import {PlayerButtonType} from '../types'

export const Button: PlayerButtonType = styled.button`
    background-color: #e50914;
    border-color: #ff0a16;
    width: 115px;
    height: 45px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0;

    &:hover {
        transform: scale(1.05);
        background-color: #ff0a16;
    }
`
