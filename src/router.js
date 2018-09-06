import React from 'react'
import { HashRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/Buttons'
import Modals from './pages/ui/modals'
import Loading from './pages/ui/loading'
import Notice from './pages/ui/notice'
import Itabs from './pages/ui/tabs'
import Message from './pages/ui/message'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import NoMatch from './pages/nomatch'

export default class IRouter extends React.Component {
    render() {
        return(
            <HashRouter>
                <App>
                    <Route path='/login' component={ Login }/>
                    <Route path='/admin' render={()=>
                        <Admin>
                            <Switch>
                                <Route path='/admin/ui/buttons' component={ Buttons }></Route>
                                <Route path='/admin/ui/modals' component={ Modals }></Route>
                                <Route path='/admin/ui/loading' component={ Loading }></Route>
                                <Route path='/admin/ui/notice' component={ Notice }></Route>
                                <Route path='/admin/ui/message' component={ Message }></Route>
                                <Route path='/admin/ui/tabs' component={ Itabs }></Route>
                                <Route path='/admin/form/login' component={ FormLogin }></Route>
                                <Route path='/admin/form/reg' component={ FormRegister }></Route>
                                <Route component={ NoMatch }></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                    <Route path='/order/detail' component={ Login }></Route>
                </App>
            </HashRouter>

        );
    }
}