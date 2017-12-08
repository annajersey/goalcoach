import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDsf_4fie2rU9FHr35f6brQx1LqIWTqcdU",
    authDomain: "goalcoach-67a8f.firebaseapp.com",
    databaseURL: "https://goalcoach-67a8f.firebaseio.com",
    projectId: "goalcoach-67a8f",
    storageBucket: "goalcoach-67a8f.appspot.com",
    messagingSenderId: "316338595038"
};


export const firebaseApp =firebase.initializeApp(config);
export const goalRef =firebase.database().ref('goals');
export const completedGoalRef =firebase.database().ref('completeGoals');