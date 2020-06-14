import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

function main() {
  return (
    <>
      <h1 className="title">
        Hello react boilerplate!
      </h1>
      <Link to="/mypage">MyPage</Link>
    </>
  );
}

export default main;
