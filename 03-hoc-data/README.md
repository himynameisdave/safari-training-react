## Higher-order components - Data Fetching

Fetching data from a remote server is very common in web applications. It is a great if you can break off this functionality into a component, so that it can be re-used throughout your application. In this example, we're going to explore how we can do just that with the higher-order component pattern.

### Setup

Setup for this example is slightly different than the other examples, because you will also need to run a mock API server to serve our mock user data.

Once you have the client-side application running in a shell (`yarn run start`/`npm run start`), open up another terminal shell and run one of the following commands:

```
node server.js

yarn run server

npm run server
```
