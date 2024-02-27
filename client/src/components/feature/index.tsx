import * as Styles from './styles'
import {FeatureType} from './types'
import {FeatureSubTitle} from './subTitle'
import {FeatureTitle} from './title'

export * from './types'

export const Feature: FeatureType = ({children, ...restProps}) => (
    <Styles.Container {...restProps}>{children}</Styles.Container>
)

Feature.SubTitle = FeatureSubTitle
Feature.Title = FeatureTitle

export default Feature
