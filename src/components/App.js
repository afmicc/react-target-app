import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './menu/Menu';
import HomePage from '../pages/home/HomePage';
import AboutPage from '../pages/about/AboutPage';
import ContactPage from '../pages/contact/ContactPage';
import NotFoundPage from '../pages/notFound/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
