import { Message } from "../models/Message";
import { User } from "../models/User";

export const forumResolver = {
    Forum :{
        users(parent) {
            return User.all().filter((user) => user.forums.includes(parent.forumId));
            },
        messages(parent) {
            return Message.all().filter((message) => message.forum == parent.forumId)
        }
    }
}