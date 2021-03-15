import React, { useState } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import './sass/style.css'
import Dashboard from './components/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';
// import Data from './components/Data';
// import DataList from './components/DataList';

function App() {
    
    return (
      <>
        {/* <DataList/> */}
        <Dashboard/>
        
      </>
    );
}

export default App;
