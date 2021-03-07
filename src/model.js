import { action } from "easy-peasy";

const model = {
  todos: [
    {
      id: "a",
      task: "Learn React",
      complete: true,
    },
    {
      id: "b",
      task: "Learn Firebase",
      complete: false,
    },
    {
      id: "c",
      task: "Learn MongoDB",
      complete: false,
    },
  ],

  // Actions
  add: action((state, payload) => {
    state.todos.push(payload);
  }),
  remove: action((state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  }),
  update: action((state, payload) => {
    state.todos.map((todo) => {
      if (todo.id === payload.updateId) {
        todo.task = payload.updateTask;
      }
      return todo;
    });
  }),
  toggle: action((state, id) => {
    state.todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
  }),
};

export default model;
