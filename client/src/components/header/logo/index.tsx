import {HeaderLogoType} from './types'
import * as ROUTES from '@src/constants/routes'
import {Link as ReactRouterLink} from 'react-router-dom'
import {icon} from '@src/icons'

export * from './types'

export const HeaderLogo: HeaderLogoType = () => (
    <ReactRouterLink to={ROUTES.HOME}>
        {icon('CsLogo', {size: '1024', height: '276', color: 'white'})}
    </ReactRouterLink>
)
