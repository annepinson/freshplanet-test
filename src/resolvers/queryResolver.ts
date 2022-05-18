import { Forum } from "../models/Forum";
import { Message } from "../models/Message";
import { User } from "../models/User";

export const queryResolver = {
    Query: {
        userForums(parent, args, context, info) {
          return Forum.getAll().filter((forum) => forum.users.includes(parseInt(context.loginUserId)));
        },
        allForums(parent, args, context, info) {
            return Forum.getAll()
        },
        messages(parent, args, context, info) {
            return Message.getAll().filter((message) => message.forum == parseInt(args.forumId));
        },
        forumUsers(parent, args, context, info) {
            return User.getAll().filter((user) => user.forums.includes(parseInt(args.forumId)))
        }
      },
}