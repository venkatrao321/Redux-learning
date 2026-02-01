import {createStore} from 'redux';


const initailState = {
  post: 0,
  name: "Venkatesh Rao",
  age: 29,
};

function reducer(state=initailState, action) {
  if (action.type === "post/increment") {
    return { ...state, post: state.post + 1 };
  } else if (action.type === "post/decrement") {
    return { ...state, post: state.post - 1 };
  }
  return state;
}

const store=createStore(reducer);
store.subscribe(()=>{
 console.log(store.getState());
})
console.log(store.getState());
store.dispatch({type:"post/increment"} )

console.log(store.getState());
store.dispatch({type:"post/decrement"} )

// What Redux will Do //

// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/increment" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "post/decrement" });
// console.log(reduxState);