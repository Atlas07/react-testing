import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import User from '../User';

it('renders without crashing', () => {
  const data = {
    name: 'Vitalii Shapoval',
    login: 'Atlas07',
    bio: 'Software engineer',
  }
  shallow(<User data={data} />);
});

it('renders correctly user component', () => {
  const props = {
    data: {
      name: 'Vitalii Shapoval',
      login: 'Atlas07',
      bio: 'Software engineer',
    }
  };
  const UserComponent = renderer.create(<User {...props} />).toJSON();

  expect(UserComponent).toMatchSnapshot();
});

it('renders correctly with all props', () => {
  const data = {
    name: 'Vitalii Shapoval',
    login: 'Atlas07',
    bio: 'Engineer',
    public_repos: 0,
  };
  const wrapper = mount(<User data={data} />);

  const { name, login, bio, public_repos } = wrapper.prop('data');

  expect(name).toEqual('Vitalii Shapoval');
  expect(login).toEqual('Atlas07');
  expect(bio).toEqual('Engineer');
  expect(public_repos).toEqual(0);
});

it('renders correctly only with required props', () => {
  const data = {
    name: 'Vitalii Shapoval',
    login: 'Atlas07',
  };

  const wrapper = mount(<User data={data} />);
  const { name, login } = wrapper.prop('data');

  expect(name).toEqual('Vitalii Shapoval');
  expect(login).toEqual('Atlas07');
});
