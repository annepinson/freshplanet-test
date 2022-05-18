import { Forum } from "../models/Forum";
import { Message } from "../models/Message";
import { User } from "../models/User";

export const mutationResolver = {
    Mutation: {
        createForum(parent, args, context, info) {
            const newId = Forum.add({forumId: null, name: args.name, users: [parseInt(context.loginUserId)], messages: []})
            User.addForum({forumId: newId, userId:parseInt(context.loginUserId)})
          return newId;
        },
        joinForum(parent, args, context, infos){
            Forum.addUser(parseInt(args.forumId), parseInt(context.loginUserId));
            User.addForum({forumId: parseInt(args.forumId), userId: parseInt(context.loginUserId)})
            return parseInt(args.forumId);
        },
        postMessage(parent, args, context, infos){
            const newId = Message.add({messageId: null,forum: parseInt(args.forumId), sendingTime: args.sendingTime, text: args.text, user: parseInt(context.loginUserId)})
            Forum.addMessage({forumId: parseInt(args.forumId), messageId: newId})
            return newId;
        }
    }
}