import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './app/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import MainNav from "./features/mainNav/MainNav";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Blog from "./pages/blog";
import Resume from './pages/resume';
ReactDOM.render(
    <Provider store={store}>
        <MainNav/>
        <BrowserRouter>
            <Route exact path='/' component={Home}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/resume' component={Resume}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
