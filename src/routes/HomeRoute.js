import React from 'react';
import Home from '../components/home/Home';
import { Route, Routes, useRouteMatch } from 'react-router-dom';

function HomeRoute(props) {
    const {path, url} = useRouteMatch();
    return (
        <Routes>
            <Route path={`${path}`}>
                <Home />
            </Route>
        </Routes>
    );
}

export default HomeRoute;