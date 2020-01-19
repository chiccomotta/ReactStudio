import React from "react";
import { createStore } from "redux";
import { addTodo } from "../store/action";
import { todoApp } from "../store/reducer";

const store = createStore(todoApp);

const style = { height: "250px", color: "white" };
const todos = ["fai", "vai", "compra"];

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

export const TodoComponent = () => {
  return (
    <div style={style}>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
      <button onClick={() => store.dispatch(addTodo("Learn about actions"))}>
        Add
      </button>
    </div>
  );
};
