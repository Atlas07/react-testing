import React from 'react';
import { shallow, mount } from 'enzyme';

import { fetchUser } from '../api';

import App from '../App';
import Message from '../Message';

jest.mock('axios');

describe('App render', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });
  
  it('Renders <Message> component when fetching data', () => {
    const wrapper = mount(<App />);
    const loadingState = wrapper.state();

    expect(loadingState).toBeTruthy();
    expect(wrapper.contains(<Message type="info" data="loading" />));
  });
});


describe('App state', () => {
  it('Has initial loading state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('loading')).toBeTruthy();
  });

  it('Has initial data state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('data')).toEqual(null);
  });
});

it('Should fetch user', async () => {
  expect.assertions(1);
  await expect(fetchUser()).resolves.toBeDefined();
});
