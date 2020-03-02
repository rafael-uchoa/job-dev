import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles.scss';

import Home from '../../pages/Home';
import Jobs from '../../pages/Jobs';
import CreateJob from '../../pages/CreateJob';

import { GlobalProvider } from '../../context/state';

export default function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/create" component={CreateJob} />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}
