import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import {firebaseApp} from "./firebase";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import {logUser} from "./actions"

const store = createStore(reducer);
firebaseApp.auth().onAuthStateChanged(
    user=>{
        if(user){
            console.log('user has signed in or up', user);

            const {email} = user;
            store.dispatch(logUser(email));

        }else{
            console.log('user has signed uot or still needs to sign in');
        }
    }
)
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
        </Switch>
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)