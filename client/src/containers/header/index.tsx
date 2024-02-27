import React from 'react'
import {Header} from '@src/components'
import * as ROUTES from '@src/constants/routes'
import {HeaderContainerType} from './types'

export * from './types'

export const HeaderContainer: HeaderContainerType = ({children}) => (
    <Header>
        <Header.Frame>
            <Header.Logo/>
            <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Frame>
        {children}
    </Header>
)
