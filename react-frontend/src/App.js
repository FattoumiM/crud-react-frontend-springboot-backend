import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeComponent from './components/ListEmployeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeComponent from './components/CreateEmployeComponent';
import UpdateEmployeComponent from './components/UpdateEmployeComponent';
import ViewEmployeComponent from './components/ViewEmployeComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeComponent}></Route>
                          <Route path = "/employes" component = {ListEmployeComponent}></Route>
                          <Route path = "/add-employe/:id" component = {CreateEmployeComponent}></Route>
                          <Route path = "/view-employe/:id" component = {ViewEmployeComponent}></Route>
                          {/* <Route path = "/update-employe/:id" component = {UpdateEmployeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
