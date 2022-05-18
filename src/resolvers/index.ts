import { forumResolver } from './forumResolver';
import { messaageResolver } from './messageResolver';
import { mutationResolver } from './mutationResolvers';
import { queryResolver } from './queryResolver';
import { userResolver } from './userResolver';

export const resolvers = [queryResolver, forumResolver, userResolver, messaageResolver, mutationResolver]
