import data from '../data/fixtures.json';

export class Forum {
  static forums = data.forums;

  static getAll() {
    return this.forums;
  }

  static add(forum) {
    const maxId = Math.max(...this.forums.map((forum) => forum.forumId))
    forum['forumId'] = maxId +1;
    this.forums.push(forum)
    return maxId +1;
  }

  static addUser(forumId, userId) {
    const index = this.forums.findIndex((forum) => forum.forumId == forumId)
    let forum = this.forums[index]
    forum.users.push(userId)
    this.forums[index] = forum;
  }

  static addMessage({forumId, messageId}) {
    const index = this.forums.findIndex((forum) => forum.forumId == forumId)
    let forum = this.forums[index]
    forum.messages.push(messageId)
    this.forums[index] = forum;
  }
}
