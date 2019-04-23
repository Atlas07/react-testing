import axios from 'axios';

const fetchUser = () => (
  axios.get('https://api.github.com/users/Atlas07', {
    headers: {
      Authorization: 'token d54b670a77b5cad7e981ff75bfd78168bfa86893',
    },
  })
);

export { fetchUser };