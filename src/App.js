import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import ProjectPage from './components/ProjectPage'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Route exact="true" path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route exact="true" path="/Projects" component={Projects} />
      <Route path="/Contact" component={Contact} />
      <Route path="/ProjectPage" component={ProjectPage} />

    </BrowserRouter>
  );
}

export default App;
