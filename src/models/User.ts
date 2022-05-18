import data from '../data/fixtures.json';

export class User {
  static users = data.users;

  static getAll() {
    return this.users;
  }

  static addForum({forumId, userId}) {
    const index = this.users.findIndex((user) => user.userId == userId)
    let user = this.users[index]
    user.forums.push(forumId)
    this.users[index] = user;
  }
}
