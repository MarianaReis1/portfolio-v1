import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import ProjectPage from './ProjectPage'
import Contact from './Contact'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/Projects" component={Projects} />
      <Route path="/ProjectPage" component={ProjectPage} />
      <Route path="/Contact" component={Contact} />

    </BrowserRouter>
  );
}

export default App;
