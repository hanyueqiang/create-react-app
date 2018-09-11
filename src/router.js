import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
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
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'
import City from './pages/city'
import Order from './pages/order'
import Detail from './pages/order/detail'
import NoMatch from './pages/nomatch'
import Common from './common'

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Switch>
                                <Route path='/admin/ui/buttons' component={Buttons}></Route>
                                <Route path='/admin/ui/modals' component={Modals}></Route>
                                <Route path='/admin/ui/loading' component={Loading}></Route>
                                <Route path='/admin/ui/notice' component={Notice}></Route>
                                <Route path='/admin/ui/message' component={Message}></Route>
                                <Route path='/admin/ui/tabs' component={Itabs}></Route>
                                <Route path='/admin/form/login' component={FormLogin}></Route>
                                <Route path='/admin/form/reg' component={FormRegister}></Route>
                                <Route path='/admin/table/basic' component={BasicTable}></Route>
                                <Route path='/admin/table/high' component={HighTable}></Route>
                                <Route path='/admin/citymanage' component={City}></Route>
                                <Route path='/admin/paymanage' component={Order}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                    <Route path="/common" render={() => 
                        <Common>
                            <Route path='/common/order/detail/:orderId' component={Detail} />
                        </Common>
                    }>
                    </Route>
                    <Route path='/order/detail' component={Login}></Route>
                </App>
            </HashRouter>

        );
    }
}