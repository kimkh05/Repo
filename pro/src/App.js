import "./App.css";
import React from "react";
import { Route } from 'react-router-dom';
import LoginMenu from "./loginMenu";
import InfinityScroll from "./infinityScroll";

function App() {
  return (
    <>
      <Route path="/login" component={LoginMenu} />
      <Route path="/infinity" component={InfinityScroll} />
    </>
  );
}


export default App;
