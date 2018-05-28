import React, {Component} from 'react';
import createHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import store from './store';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import HomePage from "./pages/home.page";

const history = createHistory();

class Routes extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path={"/"} component={HomePage}/>
                        <Route path={"/"} render={() => <div>Not Found</div>}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default Routes