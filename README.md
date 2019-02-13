# Eventger
An event manager - Eventger. Sounds awesome, I know. An online platform for managing all kinds of events. Can be compared to a [Meetup.com](https://www.meetup.com/).
The goal behind this project was to demonstrate my skills as a modern web developer. A big focus was on managing the state using a popular library [NGRX](https://ngrx.io/).


### Installation

Angular requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd eventger
$ npm install
$ ng serve
```

### Few comments
As it was my first encounter with this library I was following a great introductory article [NGRX a clean and clear Introduction](https://medium.com/frontend-fun/angular-ngrx-a-clean-and-clear-introduction-4ed61c89c1fc).

I am using Pipes for transforming a data. Comparing to transformation through regular functions on a component, it has a big performance benefits when it comes to change detection strategy. Inspiration by a talk [Increasing Performance - more than a pipe dream ](https://www.youtube.com/watch?v=I6ZvpdRM1eQ)

