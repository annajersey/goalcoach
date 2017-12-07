import React, {Component} from 'react';
import  {firebaseApp} from "../firebase";
import {connect} from 'react-redux'
import AddGoal from './AddGoal';
import GoalList from './GoalList';

class App extends Component{
    singOut(){
        firebaseApp.auth().signOut();
    }
    render(){
        return (
            <div style={{margin:'5px'}}>
                <h3>Goals</h3>
                <AddGoal />
                <GoalList />
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
