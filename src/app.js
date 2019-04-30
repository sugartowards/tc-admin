import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {AppProvider} from "CtnUi";
import {Login, Index, servicePath, urlPathPromise, sysEntitysPromise} from "./config/appCfg";

class App extends React.PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            urlPath: null,
            sysEntitys: null,
        };
    }

    componentWillMount() {
        sysEntitysPromise.then((sysEntitys) => {
            this.setState({sysEntitys: sysEntitys.default});
        });
        urlPathPromise.then((urlPath) => {
            this.setState({urlPath: urlPath.default});
        });
    }

    render() {
        let {urlPath, sysEntitys} = this.state;
        return urlPath && sysEntitys ?
            (<AppProvider servicePath={servicePath} app={urlPath.config.common} urlPath={urlPath}
                          sysEntitys={sysEntitys}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/login' render={Login}/>
                        <Route path='/' render={Index}/>
                        <Redirect path="/*" to="/"/>
                    </Switch>
                </BrowserRouter>
            </AppProvider>) : null;
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));