import React from 'react';
import logo from './logo.svg';
import List from './screens/list/List';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List></List>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
