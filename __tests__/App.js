import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import App from '../src/App.tsx';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('렌더링이 되어야 한다.', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });
});