import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store, {history} from './store';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import HomePage from "./pages/home.page";
import AboutPage from "./pages/about.page";
import CodePage from "./pages/code.page";
import ContactPage from "./pages/contact.page";
import DesignPage from "./pages/design.page";

class Routes extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route exact path={"/"} component={HomePage} title={"Home"}/>
                        <Route path={"/about"} component={AboutPage} title={"About"}/>
                        <Route exact path={"/code"} component={CodePage} title={"Code"}/>
                        <Route exact path={"/design"} component={DesignPage} title={"Design"}/>
                        <Route exact path={"/contact"} component={ContactPage} title={"Contact"}/>
                        <Route render={() => <div>Not Found</div>}/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default Routes