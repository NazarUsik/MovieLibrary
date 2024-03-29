import styled from 'styled-components'
import {HeaderComponent} from '../types'

export const Background: HeaderComponent = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({src}) => (src ? src : '/images/misc/home-bg.jpg')}) top left / cover no-repeat;

    @media (max-width: 1100px) {
        ${({dontShowOnSmallViewPort}) => dontShowOnSmallViewPort && `background: none;`}
    }
`
