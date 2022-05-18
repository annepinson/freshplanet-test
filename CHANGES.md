# Freshplanet Coding Test -- Chat App Part 2

## New GraphQL schema

```mermaid
classDiagram
    Forum "*" <-- "*" User : Is part of
    User "1" --> "*"  Message : Sends
    PrivateForum "*" <-- "1" User : Is admin of
    Forum "1" --> "*" Message : Contains
    PrivateForum "1" --> "*" Request : Is the object of
    PrivateForum --|> Forum
    User "1" --> "*" Request : Emits
    User "1" --> "*" Request :Can accept

    class Forum{
      ID forumId
      String name
      User[] users
      Message[] messages
    }

    class PrivateForum {
        User admin
    }
    class User{
      ID userId
      String username
      String picture
      Forum[] forums
    }

     class Request {
         ID requestId
         Forum forum
         User admin
         User applicant
    }
    class Message{
      Id messageId
      String Text
      Date sendingTime
      Forum forum
      User user
    }

    class Query {
        allPublicForums() Forum[]
        userForums() Forum[]
        forumMessages(forumId: ID) Message[]
        forumUsers(forumId: ID) User[]
        userRequests() Request[]
    }

    class Mutation{
        createForum(private: boolean, name: String) ID
        joinForum(forumId: ID) ID
        postMessage(forumId: ID, text: String, sendingTime: Date) ID
        acceptRequest(requestId: ID) : ID
        declineRequest(requestId: ID) : ID
    }
```

The main changes are:

- the private forums constitue a new class which inherits from the Forum class, but they also have an "admin" attribut, due to a new relationship with the User class.
- a new class, Request, is created to store the requests of users to join a private forum.
- a user can see if he has some requests of admission from other users with the `userRequests()` query.
- When a user wants to join a forum, he uses the joinForum(forumId: ID) query, which will just generates a request if the forum is a private forum.
- An admin can accept a request, and the other user will join the forum, or decline it with the queries `acceptRequest(requestId : ID)` and `declineRequest(requestId : ID)`.
