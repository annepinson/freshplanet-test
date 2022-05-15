const { gql } = require('apollo-server');

export const userType = gql`
  "This type corresponds to an user of the Chat App, users can be part of forums and interact by sending messages."
  type User {
    """
    An user is characterized by an Id
    """
    userId: ID!
    """
    An user has an username, which will be visible by other users of a forum he had joined.
    """
    userName: String!
    """
    An user has a picture, which will be visible by other users of a forum he had joined.
    """
    picture: String
    """
    An user can be part of one or more forums.
    """
    forums: [Forum!]
  }
`;
