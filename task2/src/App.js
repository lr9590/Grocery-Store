import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Router from './Router';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <a className="navbar-brand text-white">Logo</a>
    <ul className="navbar-nav text-center ml-auto">
      <li className="nav-item"><NavLink to='/'>Store</NavLink></li>
      <li className="nav-item ml-sm-5"><NavLink to='/cart'>My Cart</NavLink></li>
    </ul>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container text-center">
        <b className="text-white"> © 2018 Copyright: NFQ-Academy</b>
      </div>
    </footer>
  );
};

class App extends Component {
  render() {
    return <div>    
      <Header />
      <div className="container"> 
        <div className="mt-5 pt-5">
        <Router />
        </div>
    </div>
    <Footer />
  </div>
  }
}

export default App;
