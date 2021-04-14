import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import LatestWork from './Pages/LatestWork';
import Cv from './Pages/Cv';
import './App.scss';

function App() {
  const [hamToggle, setHamToggle] = useState(false);

  const hamClick = () => {
    setHamToggle(!hamToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${hamToggle ? 'ham-toggle' : ''}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={hamClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div>
        <div>
          {/* <div className="main-content">
        <div className="content"> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/work" component={LatestWork} />
            <Route path="/cv" component={Cv} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
