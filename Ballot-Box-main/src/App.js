import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Polls from "./pages/Polls";
import Surveys from "./pages/Surveys";
import Discussions from "./pages/Discussions";
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>We now have Auth!</h1>
//       </header>
//       <AmplifySignOut />
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/polls" exact component={() => <Polls />} />
          <Route path="/surveys" exact component={()=> <Surveys />}/>
          <Route path="/discussions" exact component={() => <Discussions />}/>
        </Switch>
        <Footer />
      </Router>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

