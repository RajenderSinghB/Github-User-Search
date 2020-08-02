import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

//react-router
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"

//Toast
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'


//Components
import Home from './pages/Home';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';
import Footer from './layouts/Footer';


//Context
//import { UserContext } from './context/UserContext'
//import Header from './layouts/Header';




const App = () => {
  //const [user, setUser] = useState(null)

  return (
    <Router>
      <ToastContainer />
      {/* <UserContext.Provider value={{ user, setUser }}>
         <Header /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        { /* 
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
             */}
        <Route exact path="*" component={PageNotFound} />
      </Switch>
      <Footer />
      {/*  </UserContext.Provider> */}
    </Router>




  );
}

export default App;
