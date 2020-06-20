import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

interface Props {
  
}

const Navigation: React.FC<Props> = () => {
  return (
    <nav className="navigation">
      <Link to="/main">Main</Link>
      <Link to="/mypage">MyPage</Link>
    </nav>
  );
};

export default Navigation;

