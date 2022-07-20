import React, { FC } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "../page/home/home";
import Basket from "../page/basket/basket";
import Header from "../component/header/header";

const Navigation: FC = () => (
    <Router>
        <Header/>
        <Switch>
            <Route path="/basket">
                <Basket/>
            </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </Router>);

export default Navigation
