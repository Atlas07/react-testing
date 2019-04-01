import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('<App /> renders without crashing', () => {
  shallow(<App />);
});

it('<App /> renders greeting message', () => {
  const wrapper = shallow(<App />);
  const greetingMessage = <h1>Welcome to my GitHub progile page</h1>

  expect(wrapper.contains(greetingMessage)).toEqual(true);
});

