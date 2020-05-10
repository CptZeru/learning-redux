import store from './store';
import {bugAdded, bugResolved} from './actions'
// import * as actions from './actionTypes';

const unsubcribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug#1"));
store.dispatch(bugResolved(1));


console.log(store.getState());
