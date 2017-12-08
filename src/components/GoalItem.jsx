import React, {Component} from 'react';
import {completedGoalRef} from "../firebase";
import {connect} from 'react-redux';

class GoalItem extends Component{
    completeGoal(){
        const {email} = this.props.user;
        const {title} = this.props.goal;
        console.log('email',email,'title',title);
        completedGoalRef.push({email,title});
    }
    render(){
        const {email,title}=this.props.goal;
        return (
            <div style={{margin:'5px'}}>
                <strong>{title}</strong>
                <span style={{margin:'5px'}}> submitted by <em>{email}</em></span>
                <button
                    onClick={()=>this.completeGoal()}
                className="btn btn-sm btn-primary"
                >
                    Complete
                </button>
            </div>

        )
    }
}
function mapStateToProps(state){
    const {user}=state;
    return {user};
}

export default connect(mapStateToProps,null)(GoalItem);