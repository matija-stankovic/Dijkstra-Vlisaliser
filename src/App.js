import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'
import MainScreen from "./Background/MainScreen";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/">
                        <MainScreen/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
