import React from 'react';
import ReactDOM from 'react-dom';
import APP from './Homepage/App';
import Content from './Homepage/Content';
import Find from './Discoverypage/Find';
import Selects from './Select/Selectnr';
import Login from './Publicfolder/Login';
import Registered from './Publicfolder/Registered';
import { Router,Route, hashHistory,Redirect,IndexRoute  } from 'react-router';


ReactDOM.render((
    <Router history={hashHistory}>
        <Redirect from="/" to="/home/content"/>
        <Router path="/home" component={APP}>
            <IndexRoute component={Content}/>
            <Route path='content' component={Content}/>
            <Route path='find' component={Find}/>
            <Route path='select' component={Selects}/>
            <Route path='login' component={Login}/>
            <Route path='register' component={Registered}/>
        </Router>  
    </Router>),
    document.getElementById('root')
);
