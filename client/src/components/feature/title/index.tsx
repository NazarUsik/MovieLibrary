import * as Styles from './styles'
import {FeatureTitleType} from './types'

export * from './types'

export const FeatureTitle: FeatureTitleType = ({children, ...restProps}) => (
    <Styles.Title {...restProps}>{children}</Styles.Title>
)
