import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Polls from "./pages/Polls";
import Surveys from "./pages/Surveys";
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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
