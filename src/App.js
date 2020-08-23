import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './App.css';


function App() {
  return (
    // BEM
    <div className="app">
      <Sidebar />
      {/*Sidebar*/}

      {/*MainFeed*/}
      <Feed />


      {/*Widget*/}

    </div>
  );
}

export default App;
