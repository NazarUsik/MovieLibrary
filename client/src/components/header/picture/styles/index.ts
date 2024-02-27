import styled from 'styled-components'
import {HeaderPictureProps} from '../types'

export const Picture = styled.button<HeaderPictureProps>`
    background: url(${({src}) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
`
