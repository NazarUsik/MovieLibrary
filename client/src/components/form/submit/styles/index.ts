import styled from 'styled-components'
import {FormSubmitType} from '../types'

export const Submit: FormSubmitType = styled.button`
    background: #e50914;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 24px 0 12px;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
`
