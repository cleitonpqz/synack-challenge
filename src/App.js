import React from 'react';
import './App.css';
import SearchControls from './components/SearchControls';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App">
      <SearchControls />
      <SearchResults />
    </div>
  );
}

export default App;
