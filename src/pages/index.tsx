import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main/Main';
import MyPage from './MyPage/MyPage';

// Routing Component
function index() {
  return (
    <Switch>
      <Route exact path="/mypage" component={MyPage} />
      <Route path="/" component={Main} />
    </Switch>
  );
}

export default index;
