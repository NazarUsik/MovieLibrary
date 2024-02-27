import * as Styles from './styles'
import {FeatureSubTitleType} from './types'

export * from './types'

export const FeatureSubTitle: FeatureSubTitleType = ({children, ...restProps}) => (
    <Styles.SubTitle {...restProps}>{children}</Styles.SubTitle>
)
