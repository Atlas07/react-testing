import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Message from '../Message';

it('Renders without crashing', () => {
  shallow(<Message type="info" data="Loading" />);
});

it('render correctly message component', () => {
  const MessageComponent = renderer.create(<Message data="Loading..." type="info" />).toJSON();
  expect(MessageComponent).toMatchSnapshot();
});

it('Have required props', () => {
  const props = {
    data: 'Loading...',
    type: 'info',
  };

  const wrapper = mount(<Message {...props} />);

  expect(wrapper.prop('data')).toEqual('Loading...');
  expect(wrapper.prop('type')).toEqual('info');
});