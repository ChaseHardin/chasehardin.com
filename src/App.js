import React, { Component } from 'react';
import './App.css';
import Menu from './menu/menu-component';
import Home from './pages/home/home-component';
import Blog from './pages/blog/blog-component';
import Tutorials from './pages/tutorials/tutorials-component';
import Contact from './pages/contact/contact-component';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Menu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/tutorials' component={Tutorials} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
