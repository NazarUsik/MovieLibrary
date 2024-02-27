import React from 'react'
import {createRoot} from 'react-dom/client'
import 'normalize.css'
import {Body, GlobalStyles} from './global-styles'
import {App} from './app'

const rootDiv = document.getElementById('root')

const root = createRoot(rootDiv)
root.render(<React.StrictMode>
    <Body>
        <GlobalStyles/>
        <App/>
    </Body>
</React.StrictMode>)


