import styled from 'styled-components'
import {FormComponent} from '../types'

export const Container: FormComponent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 660px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    width: 100%;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin: auto auto 100px;
`