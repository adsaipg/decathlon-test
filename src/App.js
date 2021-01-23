import React from 'react';
import './App.css';
import CardView from './components/CardView/CardView';
import Home from './components/Home/home';

// function App() {
//   return (
//     <div className="App">
//      <ShoppingHome/>
//     </div>
//   );
// }

// export default App;
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/cart">
            <CardView />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
