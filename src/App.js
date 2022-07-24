
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Orders from'./Orders';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51LOMvTSH0n9SiKoAdP9od6O2WfXLbJc69KMFfR9bFAEltAfenGlbVcuu9NfdQh7ZHc0KGbyXtSW0HqS474cu0POL00gMk39iFn');

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //only run once when app component load

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      } else {
        //user is already logout
        dispatch({
          type: "SET_USER",
          user: null,
        });

      }
    })
  }, []);

  return (
    //bem
    <Router>
      <div className="app">

        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
            
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
            <Footer/>
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/*defualt */}
          <Route path='/'>
            <Header />
            <Home />
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
