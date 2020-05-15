import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRouter({component: Component, ...rest}) {
    const userInfo = localStorage.getItem('userInfo');
    return (

        <Route {...rest} render={(props) => {

            if (userInfo) {
                return <Component {...props} />
            }
            return <Redirect to="/login"/>
        }}/>
    )
}


export default PrivateRouter;