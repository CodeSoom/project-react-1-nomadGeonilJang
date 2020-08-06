import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageContainer from './modules/styles/PageContainer';
import TopBar from './components/TopBar';
import ChatListPage from './pages/ChatListPage';
import RoomPage from './pages/RoomPage';

export default function App() {
  return (
    <PageContainer>
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route path='/list' component={ChatListPage} />
          <Route path='/room/:id' component={RoomPage} />
        </Switch>
      </BrowserRouter>
    </PageContainer>
  );
}
