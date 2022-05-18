import { Forum } from "../models/Forum";
import { User } from "../models/User";

export const messaageResolver = {
    Message :{
        forum(parent) {
            return Forum.getAll().find((forum) => forum.messages.includes(parent.messageId));
            },
        user(parent) {
            return User.getAll().find((user) => parent.user == user.userId);
        }
    }
}