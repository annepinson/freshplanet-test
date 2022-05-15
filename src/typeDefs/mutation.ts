import { gql } from 'apollo-server-express';

export const mutation = gql`
  type Mutation {
    """
    An user, already authenticated, can create a forum with a given name, and he will join it immediatly.
    """
    createForum(userId: ID!, name: String): Forum!

    """
    An user, already authenticated, can join a forum with its id forumId.
    """
    joinForum(forumId: ID!): Forum!

    """
    An user, already authenticated, can send a message on a forum of id ForumId.
    """
    postMessage(forumId: ID!, sendingTime: Date!, text: String!): Message!
  }
`;
