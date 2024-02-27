import styled from 'styled-components'
import {JumbotronPaneType} from '../types'

export const Pane: JumbotronPaneType = styled.div`
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`
