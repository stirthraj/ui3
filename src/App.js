import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Preferences from './components/Preferences';
import DataList from './components/DataList';

function App() {
  const tokenid='1234';
  const token=sessionStorage.getItem("token");
  if(token!==tokenid){
    return <Login/>
  }
else{
  return (
    <>
      <h1>Application</h1>
      <DataList />
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
            <DataList />
          </Route>
          <Route path="preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );}
}

export default App;
