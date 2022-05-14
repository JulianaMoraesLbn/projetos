import './App.css';
import React from "react";
import GlobalState from './globalState/GlobalState';
import Router from './routers/Router'

function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App;
