import styled from 'styled-components'
import {HeaderPlayButtonType} from '../types'

export const PlayButton: HeaderPlayButtonType = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    border-width: 0;
    padding: 10px 20px;
    border-radius: 5px;
    max-width: 130px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: #ff1e1e;
        color: white;
    }
`
