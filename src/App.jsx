import React from 'react';
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as CartIcon } from './assets/cart.svg';

import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <div className="header">
          <div className="header-primary">
            <Logo className="logo" />
            <div className="other">
              <div className="search-box">
                <input className="search-bar" placeholder="Search Products" />
              </div>
              <Link className="btn sign-in" to="/signin">
                Sign In
              </Link>
              <CartIcon className="cart-icon" />
            </div>
          </div>
          <nav className="navigation">
            <div className="all-products">All Products</div>
            <Link className="btn">New Arrivals</Link>
            <Link className="btn">Promotions</Link>
            <Link className="btn">Back to School</Link>
            <Link className="btn">Project Inspiration</Link>
          </nav>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <div className="hero">
            <div className="container">
              <h1>Unleash Your Creativity</h1>
              <h3>You've got the ideas, and we've got the tools. Let's make it happen.</h3>
              <div className="cta">
                <Link className="btn explore" to="/store">
                  EXPLORE SHOP
                </Link>
                <Link className="btn register" to="/register">
                  REGISTER
                </Link>
              </div>
            </div>
          </div>
          <div className="recommendations">
            <div className="collection">
              <span className="title">TOP TRENDING</span>
              <div className="row">
                <div className="card">
                  <img
                    src="https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/224031BFCE5240E494DA5721D13752F7/10044332.jpg?fit=inside|140:140"
                    alt=""
                  />
                  <span className="product-name">Flat Back Wiggle Eyes Value Pack</span>
                </div>
                <div className="card">
                  <img
                    src="https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/F4EED00B0A6C4FAE827A99CAA43FD825/10624517_6.jpg?fit=inside|140:140"
                    alt=""
                  />
                  <span className="product-name">Dalmation Paint-by-Number Kit</span>
                </div>
                <div className="card">
                  <img
                    src="https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/7C4DBC479E7E4A10A1115487560A942B/10566030.jpg?fit=inside|140:140"
                    alt=""
                  />
                  <span className="product-name">Mini Cottage with Fence</span>
                </div>
                <div className="card">
                  <img
                    src="https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/14A4A55172D7488CBF6FA3AE5A3FE9A1/10566038_2.JPG?fit=inside|140:140"
                    alt=""
                  />
                  <span className="product-name">Mini Rainbow with Clouds</span>
                </div>
                <div className="card">
                  <img
                    src="https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/224031BFCE5240E494DA5721D13752F7/10044332.jpg?fit=inside|140:140"
                    alt=""
                  />
                  <span className="product-name">Flat Back Wiggle Eyes Value Pack</span>
                </div>
              </div>
            </div>
            <div className="collection">
              <span className="title">PROJECT INSPIRATION</span>
              <div className="row">
                <div className="card">
                  <img
                    src="https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/6479B95DC93D47778FA7DE82AB0BA118/B_88685_1.gif?fit=inside|140:140"
                    alt=""
                  />
                  <span className="product-name">Leather and Pearl Earrings</span>
                </div>
                <div className="card">
                  <img
                    src="https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/3CC70B06BCEE4B629E647475301FFC38/WR85125.jpg?fit=inside|140:140"
                    alt=""
                  />
                  <span className="product-name">Wire Wrapped Pearl Necklace</span>
                </div>
                <div className="card">
                  <img
                    src="https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/6479B95DC93D47778FA7DE82AB0BA118/B_88685_1.gif?fit=inside|140:140"
                    alt=""
                  />
                  <span className="product-name">Leather and Pearl Earrings</span>
                </div>
                <div className="card">
                  <img
                    src="https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/3CC70B06BCEE4B629E647475301FFC38/WR85125.jpg?fit=inside|140:140"
                    alt=""
                  />
                  <span className="product-name">Wire Wrapped Pearl Necklace</span>
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route exact path="/signin">
          Sign In Page Placeholder
        </Route>
        <Route exact path="/register">
          Register Page Placeholder
        </Route>
        <Route exact path="/store">
          Store Page Placeholder
        </Route>
      </Switch>
    </div>
  );
}

export default App;
