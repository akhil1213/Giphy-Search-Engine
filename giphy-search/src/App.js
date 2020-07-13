import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/SearchEngine/Search'
import Ratings from './components/rating/rating'

function App() {
  return (
    <div className="App">
      <Search/>
      <Ratings/>
    </div>
  );
}

export default App;
