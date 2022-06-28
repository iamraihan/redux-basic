const redux = require("redux");

//variable Declare
const inCreaseNum = "INC_NUM"; //value type should be capital letters
const deCreaseNum = "DEC_NUM";
const addNum = "ADD_NUM";

//init state
const initState = {
  num: 0,
};

//reducer
const updateReducer = (state = initState, action) => {
  if (action.type === addNum)
    return {
      ...state,
      num: state.num + action.value,
    };
  if (action.type === inCreaseNum)
    return {
      ...state,
      num: state.num + 1,
    };
  if (action.type === deCreaseNum)
    return {
      ...state,
      num: state.num - 1,
    };
  return state;
};

//store
const store = redux.createStore(updateReducer);

console.log(store.getState()); //getState function working manually

store.subscribe(() => {
  // subscribe function working automatically
  console.log(store.getState());
});

//action dispatch
store.dispatch({
  type: addNum, //we can set type value here also but good practice is declare is a variable which create top of the page.
  value: 55,
});

store.dispatch({
  type: inCreaseNum,
});

store.dispatch({
  type: deCreaseNum,
});
console.log(store.getState());
