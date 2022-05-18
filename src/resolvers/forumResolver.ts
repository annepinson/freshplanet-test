import { Message } from "../models/Message";
import { User } from "../models/User";

export const forumResolver = {
    Forum :{
        users(parent) {
            return User.getAll().filter((user) => user.forums.includes(parent.forumId));
            },
        messages(parent) {
            return Message.getAll().filter((message) => message.forum == parent.forumId)
        }
    }
}