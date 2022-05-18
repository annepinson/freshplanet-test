import { gql } from 'apollo-server';

export const forumType = gql`
  "This type corresponds to the forums on the Chat App, which can be joined by users to communicate on it."
  type Forum {
    """
    A forum is characterized by a forumId, which can be used by users to join a specific forum
    """
    forumId: ID!

    """
    A forum has also a name, which could be seen by users
    """
    name: String!

    """
    At least one user is part of the forum, the creator, since people can't leave the forums
    """
    users: [User!]!

    """
    Messages are exchanged on the forum between users, but a forum can be empty of messages.
    """
    messages: [Message!]
  }
`;
