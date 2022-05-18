import { gql } from 'apollo-server';

export const messageType = gql`
  "This type corresponds to the messages on the Chat App, one message is emitted by an user in a forum."
  type Message {
    """
    A message is characterized by an ID
    """
    messageId: ID!

    """
    A message contains a text, which is a string
    """
    text: String!

    """
    The sending time(day and hour) of a message can be visible by the users of the forum in which is the message
    """
    sendingTime: Date!

    """
    A message is always emitted in a forum
    """
    forum: Forum!

    """
    A message is always sent by an user of the forum
    """
    user: User!
  }
`;
