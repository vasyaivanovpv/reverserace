import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
// import About from './pages/About';
import FAQ from './pages/FAQ';
import Interview from './pages/Interview';
import History from './pages/History';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import EnglishHome from './pages/EnglishHome';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App-root">
      <div className="App-container">
        <Header />

        <main className="App-content">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/" component={About} /> */}
            <Route path="/faq" component={FAQ} />
            <Route path="/interview" component={Interview} />
            <Route path="/history" component={History} />
            <Route path="/contact" component={Contact} />
            <Route path="/en" component={EnglishHome} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
