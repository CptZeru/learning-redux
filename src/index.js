import store from './store';
import {bugAdded, bugResolved} from './actions'
//https://www.youtube.com/watch?v=poQXNp9ItL4

const unsubcribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug#1"));
store.dispatch(bugResolved(1));


console.log(store.getState());
