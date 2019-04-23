export default {
  get: () => Promise.resolve({
    status: 200,
    data: {
      login: 'doe_',
      name: 'John Doe',
      bio: 'Some bio',
      public_repos: 2,
    },
  }),
};