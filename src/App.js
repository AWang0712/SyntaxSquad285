import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Checkout from './Checkout';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  'pk_test_51N8UQyFxRGzuu1lkT82qyhbbnvOqI789IlboIiVWPstIa0yaz0vgKiIBxkRSoysJjzfnEAY9doBLvVKRBbcSZ8mV00O4rHOY4u'
  ); // add your stripe public key here

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>

          // the login route
          <Route path='/login' element={
              <Login />
          } />

          // the default route
          <Route path='/' element={
              <>
                <Header />
                <Home />
              </>
          } />

          // the orders route
          <Route path='/orders' element={
              <>  
                <Header />
                <Orders />
              </>
          } />

          // the checkout route
          <Route path='/checkout' element={
              <>
                <Header />
                <Checkout />
              </>
          } />

          // the payment route
          <Route path='/payment' element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
          } />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
