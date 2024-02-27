import * as Styles from './styles'
import {HeaderFeatureType} from './types'

export * from './types'

export const HeaderFeature: HeaderFeatureType = ({children, ...restProps}) => (
    <Styles.Feature {...restProps}>{children}</Styles.Feature>
)
