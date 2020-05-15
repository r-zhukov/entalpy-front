import React, {useState} from 'react';
import {Provider} from "react-redux";
import configureStore from "./redux/config";

import {Router, Switch} from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import HomePage from "./pages/HomePage/HomePage";
import {history} from "./utils/history";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import PrefetchRouter from "./components/PrefetchRouter/PrefetchRouter";


function App() {
    const [store] = useState(configureStore());

    return (
        <Provider store={store}>
            <Router history={history}>
                <div>
                    <Switch>
                        <PrivateRouter exact path="/" component={HomePage}/>
                        <PrefetchRouter exact path="/login" component={Login}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
