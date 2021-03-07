import React from "react";
import model from "./model";
import { StoreProvider, createStore } from "easy-peasy";
import Todos from "./Todos";
import "./App.css";

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <Todos />
    </StoreProvider>
  );
}

export default App;
