import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './css/styles.css';

import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Terms from './Components/Terms'
import Footer from './Components/Footer'
import All from './Components/All'
import Categories from './Components/Categories'
import Product from './Components/Product'
import Press from './Components/Press';
import ShoppingCart from './Components/ShoppingCart'
import Sidebar from './Components/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/terms' component={Terms} />
          <Route exact path='/press' component={Press} />
          <Route exact path='/all' component={All} />
          <Route exact path='/shoppingCart' component={ShoppingCart} />
          <Route path='/section/:class' component={Categories} />
          <Route path='/product/:prod' component={Product} />
        </Switch>
        <Footer />
        <Sidebar/>
      </div>
    );
  }
}

export default App;
