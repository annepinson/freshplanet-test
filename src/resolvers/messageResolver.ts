import { Forum } from "../models/Forum";
import { User } from "../models/User";

export const messaageResolver = {
    Message :{
        forum(parent) {
            return Forum.all().find((forum) => forum.messages.includes(parent.messageId));
            },
        user(parent) {
            return User.all().find((user) => parent.user == user.userId);
        }
    }
}