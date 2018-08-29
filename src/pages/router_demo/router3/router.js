import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './Main'
import About from './../router1/about'
import Info from './info'
import Topic from './../router1/topic'
import Home from './Home'
import NoMatch from './NoMatch'
export default class IRouter extends React.Component{

    render() {
        return(
            <Router>
                <Home>
                    <Switch>
                        <Route exact={true} path='/' render={()=>
                            <Main>
                                <Route path='./main/:value' component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/topic' component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>    
            </Router>

        );
    }
}