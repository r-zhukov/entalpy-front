import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrefetchRouter({component: Component, ...rest}) {
    const userInfo = localStorage.getItem('userInfo');
    return (
        <Route {...rest} render={(props) => {
            if (userInfo) {
                return <Redirect to={'/home'}/>
            }
            return <Component {...props} />
        }}/>
    )
}

export default PrefetchRouter;