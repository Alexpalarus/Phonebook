import React from 'react';
import ReactDOM from 'react-dom';
import { ContactProvider } from './context/contactContext';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import Header from './Components/Interface/Header';
import Error from './Components/Pages/Error';
import ListContact from './Components/Contact/ListContact';
import AddContact from './Components/Contact/AddContact';
import About from './Components/Pages/About';
import ModifyContact from './Components/Contact/ModifyContact';
    
ReactDOM.render(
  <ContactProvider>
  <Router>
    <div className="app">
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path="/home" component={ListContact} />
          <Route exact path="/add" component={AddContact} />
          <Route exact path="/" component={ListContact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/edit/:id" component={ModifyContact} />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  </Router>
</ContactProvider>
      , 
      document.getElementById('root'));

