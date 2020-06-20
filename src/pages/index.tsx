import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Main from './Main/Main';
import MyPage from './MyPage/MyPage';

// Routing Component
const index: React.FC = () => {
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

export default index;
