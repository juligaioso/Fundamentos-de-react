import React from 'react';
import ReactDOM from 'react-dom';

import "./style.css"
import ToDoList from './ToDoList.js'

ReactDOM.render(
  <React.StrictMode>
    <ToDoList />
  </React.StrictMode>,
  document.getElementById('root')
);

