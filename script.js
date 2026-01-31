let reduxState = {
  post: 0,
  name: "Venkatesh Rao",
  age: 29,
};

function reducer(state, action) {
  if (action.type === "post/increment") {
    return { ...state, post: state.post + 1 };
  } else if (action.type === "post/decrement") {
    return { ...state, post: state.post - 1 };
  }
}
// What Redux will Do //

reduxState = reducer(reduxState, { type: "post/increment" });

reduxState = reducer(reduxState, { type: "post/increment" });
reduxState = reducer(reduxState, { type: "post/decrement" });
