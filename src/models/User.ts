const data = require('../data/fixtures.json');

export class User {
  static all() {
    return data.users;
  }
}
