import styled from 'styled-components'
import {Title} from '../title/styles'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    > ${Title} {
        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`
