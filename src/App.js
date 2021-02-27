import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import { projectsList } from './components/Projects'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectPage from './components/ProjectPage'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact={true} path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      {
        projectsList.map((eachProj) =>
          (
            <Route
              path={eachProj.path}
              render={() => <ProjectPage data={eachProj} />}
              key={eachProj.path}
            />
          )
        )
      }
      <Footer />
    </BrowserRouter>
  );
}

export default App;
