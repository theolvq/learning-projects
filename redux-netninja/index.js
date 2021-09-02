import { createStore } from "redux";

const initState = {
  todos: [],
  posts: [],
};

const myReducer = (state = initState, action) => {
  console.log(action, state);
};

const store = createStore(myReducer);

const todoAction = {
  type: "ADD_TODO",
  todo: "buy milk",
};

store.dispatch(todoAction);
