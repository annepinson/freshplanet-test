import { gql } from 'apollo-server-express';

export const mutation = gql`
  type Mutation {
    """
    An user, already authenticated, can create a forum with a given name, and he will join it immediatly.
    The ID returned is the id of the forum just created.
    """
    createForum(name: String): ID!

    """
    An user, already authenticated, can join a forum with its id forumId.
    The ID returned is the id of the forum joined.
    """
    joinForum(forumId: ID!): ID!

    """
    An user, already authenticated, can send a message on a forum of id ForumId.
    The ID returned is the id of the message sent.
    """
    postMessage(forumId: ID!, sendingTime: Date!, text: String!): ID!
  }
`;
