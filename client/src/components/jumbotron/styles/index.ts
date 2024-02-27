import styled from 'styled-components'
import {JumbotronComponent} from '../types'

export const Inner: JumbotronComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${({direction}) => direction};
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`
