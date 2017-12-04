import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import {firebaseApp} from "./firebase";

firebaseApp.auth().onAuthStateChanged(
    user=>{
        if(user){
            console.log('user has signed in or up', user);
        }else{
            console.log('user has signed uot or still needs to sign in');
        }
    }
)
ReactDOM.render(
    <BrowserRouter>
        <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)