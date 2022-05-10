import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import { typeDefs } from "./typeDefs";
import { makeExecutableSchema } from "graphql-tools";


export const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

const server = new ApolloServer({ schema, });

const port = 3000;

server.listen({port}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});