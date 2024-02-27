import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import {Home, Browse, SignIn, SignUp} from './pages'
import * as ROUTES from './constants/routes'

export const App = () => (
    <Router>
        <Routes>
            <Route path={ROUTES.SIGN_IN} element={<SignIn/>}/>
            <Route path={ROUTES.SIGN_UP} element={<SignUp/>}/>
            <Route path={ROUTES.BROWSE} element={<Browse/>}/>
            <Route path={ROUTES.HOME} element={<Home/>}/>
        </Routes>
    </Router>
)
