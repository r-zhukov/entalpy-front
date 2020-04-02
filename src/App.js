import React, {useState} from 'react';
import {Provider} from "react-redux";
import configureStore from "./redux/config";
import HomePage from "./pages/HomePage/HomePage";

function App() {
    const [store] = useState(configureStore());

    return (
        <Provider store={store}>
            <div className="App">
                <HomePage/>
            </div>
        </Provider>
    );
}

export default App;
