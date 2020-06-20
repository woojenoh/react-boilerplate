import React from 'react';
import { numberWithComma } from '../../shared/utils';
import './index.scss';

interface Props {
  
}

const MyPage: React.FC<Props> = () => {
  return (
    <div>
      MyPage {numberWithComma(3000)}
    </div>
  );
};

export default MyPage;
