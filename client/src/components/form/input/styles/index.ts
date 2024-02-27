import styled from 'styled-components'
import {FormInputType} from '../types'

export const Input: FormInputType = styled.input`
    background: #333;
    border-radius: 4px;
    border: 0;
    color: #fff;
    height: 50px;
    line-height: 50px;
    padding: 5px 20px;
    margin-bottom: 20px;

    &:last-of-type {
        margin-bottom: 30px;
    }
`
