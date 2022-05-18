import { gql } from 'apollo-server-express';

export const query = gql`
  type Query {
    """
    An user, which is already authenticated, can see the list of his forums, which can be empty.
    """
    userForums: [Forum]

    """
    An user can see the list of all forums, which can be empty.
    """
    allForums: [Forum]

    """
    An user can see the list of the messages sent in a forum of id forumId, messages are ordered by most recent. The user must have joined the forum.
    """
    messages(forumId: ID!): [Message]

    """
    An user can see the names and pictures of the other members of a forum of id forumId. The user must have joined the forum.
    """
    forumUsers(forumId: ID!): [User!]!
  }
`;
