import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BoardPage from './Pages/BoardPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={BoardPage} />
      </Switch>
    </BrowserRouter>
  );
}
