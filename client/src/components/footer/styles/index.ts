import styled from 'styled-components'
import {FooterComponent} from '../types'

export const Container: FooterComponent = styled.div`
    display: flex;
    padding: 70px 0;
    margin: auto;
    max-width: 1000px;
    flex-direction: column;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`
