import styled from 'styled-components'
import {OptFormButtonType} from '../types'

export const Button: OptFormButtonType = styled.button`
    display: flex;
    align-items: center;
    height: 70px;
    background: #e50914;
    color: white;
    text-transform: uppercase;
    padding: 0 32px;
    font-size: 26px;
    border: 0;
    cursor: pointer;

    img {
        margin-left: 10px;
        filter: brightness(0) invert(1);
        width: 24px;

        @media (max-width: 1000px) {
            width: 16px;
        }
    }

    &:hover {
        background: #f40612;
    }

    @media (max-width: 1000px) {
        height: 50px;
        font-size: 16px;
        margin-top: 20px;
        font-weight: bold;
    }
`
