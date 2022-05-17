import { Forum } from "../models/Forum";

export const userResolver = {
    User :{
        forums(parent) {
            return Forum.all().filter((forum) => forum.users.includes(parent.userId));
            },
    }
}