import data from '../data/fixtures.json';

export class Message {
  static messages = data.messages;

  static getAll() {
    return this.messages;
  }

  static add(message) {
    const maxId = Math.max(...this.messages.map((message) => message.messageId))
    message['messageId'] = maxId +1;
    this.messages.push(message)
    return maxId +1;
  }
}