import React from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import SearchEngineSelector from './components/SearchEngineSelector';
import SubmitButton from './components/SubmitButton';

function App() {
  return (
    <div className="App">
      <SearchBox />
      <SearchEngineSelector />
      <SubmitButton />
    </div>
  );
}

export default App;
