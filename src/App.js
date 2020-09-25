import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


import './App.css';
import Navbar from './components/Navbar/Navbar';
import List from "./components/List/List";
library.add(faTrash);
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>Board
        <List></List>
      </div>
      
      <div>Footer</div>
    </div>
  )
}

export default App;
