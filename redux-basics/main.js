import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const ADD_POST = "ADD_POST";

const initState = {
  todos: [],
  posts: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log("state update");
  console.log(store.getState());
});

const todoAction0 = {
  type: ADD_TODO,
  todo: "buy milk",
};
const todoAction1 = {
  type: ADD_TODO,
  todo: "sleep some more",
};
const postAction0 = {
  type: ADD_POST,
  post: "egg hunt with yoshi",
};

store.dispatch(todoAction0);
store.dispatch(todoAction1);
store.dispatch(postAction0);
