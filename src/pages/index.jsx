import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main/Main.jsx';
import MyPage from './MyPage/MyPage.jsx';

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
