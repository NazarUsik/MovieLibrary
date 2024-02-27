import * as Styles from './styles'
import {HeaderFeatureCallOutType} from './types'

export * from './types'

export const HeaderFeatureCallOut: HeaderFeatureCallOutType = ({children, ...restProps}) => (
    <Styles.FeatureCallOut {...restProps}>{children}</Styles.FeatureCallOut>
)
