import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ChatListPage from './Pages/ChatListPage';
import PageContainer from './Styles/PageContainer';

export default function App() {
  return (
    <PageContainer>
      <BrowserRouter>
        <Switch>
          <Route path='/list' component={ChatListPage} />
        </Switch>
      </BrowserRouter>
    </PageContainer>
  );
}
