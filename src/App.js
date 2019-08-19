import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content-wrapper">
        <Content />
      </div>
    </div>
  );
}

export default App;
