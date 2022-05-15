import { mutation } from './mutation';
import { query } from './query';
import { dateScalar } from './types/dateScalar';
import { forumType } from './types/forumType';
import { messageType } from './types/messageType';
import { userType } from './types/userType';

export const typeDefs = [
  dateScalar,
  query,
  mutation,
  messageType,
  forumType,
  userType,
];
