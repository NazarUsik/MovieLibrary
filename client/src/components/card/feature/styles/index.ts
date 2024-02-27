import styled from 'styled-components'
import {Title} from '../../title/styles'
import {FeatureTextProps, FeatureProps, MaturityProps} from './types'

export const FeatureText = styled.p<FeatureTextProps>`
    font-size: 18px;
    color: white;
    font-weight: ${({fontWeight}) => (fontWeight === 'bold' ? 'bold' : 'normal')};
    margin: 0;

    @media (max-width: 600px) {
        line-height: 22px;
    }
`

export const Feature = styled.div<FeatureProps>`
    display: flex;
    flex-direction: row;
    background-size: cover !important;
    position: relative;
    background-position-x: right;
    background: black url(${({src}) => src}) no-repeat;

    @media (max-width: 1000px) {
        height: auto;
        background-size: auto;

        ${Title} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }

        ${FeatureText} {
            font-size: 14px;
        }
    }
`

export const FeatureTitle = styled(Title)`
    margin-left: 0;
`

export const FeatureClose = styled.button`
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 24px;
    }
`

export const Content = styled.div`
    margin: 56px;
    max-width: 500px;
    line-height: normal;

    @media (max-width: 1000px) {
        margin: 30px;
        max-width: none;
    }
`

export const Maturity = styled.div<MaturityProps>`
    background-color: ${({rating}) => (rating >= 15 ? '#f44336' : '#2f9600')};
    border-radius: 15px;
    width: 28px;
    line-height: 28px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    font-size: 12px;
`
