import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Main from './Main';
import MyPage from './MyPage';

// Routing Component
const Pages: React.FC = () => {
  return (
    <>
      <Navigation/>
      <Switch>
        <Route exact path="/mypage" component={MyPage} />
        <Route path="/" component={Main} />
      </Switch>
    </>
  );
};

export default Pages;
