import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import ProjectPage from './components/ProjectPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/Projects" component={Projects} />
      <Route path="/ProjectPage" component={ProjectPage} />
      {/* <Route path="/Contact" component={Contact} /> */}
      
    </BrowserRouter>

  );
}

export default App;
