import { Forum } from "../models/Forum";
import { Message } from "../models/Message";
import { User } from "../models/User";

export const queryResolver = {
    Query: {
        userForums(parent, args, context, info) {
          return Forum.all().filter((forum) => forum.users.includes(context.loginUserId));
        },
        allForums(parent, args, context, info) {
            return Forum.all()
        },
        messages(parent, args, context, info) {
            return Message.all().filter((message) => message.forum == parseInt(args.forumId));
        },
        users(parent, args, context, info) {
            return User.all().filter((user) => user.forums.includes(parseInt(args.forumId)))
        }
      },
}