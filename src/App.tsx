import React from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks/Tasks";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <NewTask />
        <Tasks />
      </div>
    </div>
  );
}
