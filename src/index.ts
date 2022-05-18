import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import { makeExecutableSchema } from 'graphql-tools';

export const schema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

// The authentication of an user is supposed to be done, here the login user is the user 1.
const server = new ApolloServer({
  schema,
  context: ({req}) => ({ loginUserId: req.headers.authorization}),
});

const port = 3000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
