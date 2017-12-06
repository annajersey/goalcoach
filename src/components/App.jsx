import React, {Component} from 'react';
import  {firebaseApp} from "../firebase";
import {connect} from 'react-redux'



class App extends Component{
    singOut(){
        firebaseApp.auth().signOut();
    }
    render(){
        return (
            <div>
                <h3>Goals</h3>
                <div>Add Goal</div>
                <button
                    className="btn btn-danger"
                    onClick={()=>this.singOut()}
                >
                    Sign Out
                </button>
            </div>
        );
    }
}
function mapStateToProps(state){
    console.log('state',state);
    return {}
}

export default connect(mapStateToProps, null)(App);
