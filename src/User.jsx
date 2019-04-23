import React from 'react';
import { shape, string, number } from 'prop-types';

const User = ({ data }) => (
  <div>
    <p>name - {data.name}</p>
    <p>login - {data.login}</p>
    <p>bio - {data.bio}</p>
    <p>public repos - {data.public_repos}</p>
  </div>
);

User.defaultProps = {
  bio: null,
  public_repos: null,
};

User.propTypes = {
  data: shape({
    name: string.isRequired,
    login: string.isRequired,
    bio: string,
    public_repos: number,
  }).isRequired,
};

export default User;