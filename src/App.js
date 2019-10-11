import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOutPage from './pages/sign-in-sign-out/sign-in-sign-out.component';




function App() {
  return (
    <div>
    <Header/>
    <Switch>
    
        <Route  exact path='/' component={HomePage} />
        <Route  exact path='/shop' component={ShopPage} />
        <Route  exact path='/signin' component={SignInAndSignOutPage} />
     </Switch>
     
    </div>
  );
}

export default App;
