# odin-blog

## Server Setup, mongo connection, basic routes and controllers

- Create new git repository w readme and gitignore
- clone to local pc
- npm init -y
- package.json type:module
- install nodemon
- nodemon script
- install express
- initialize express
- app.listen()
- install dotenv and create .env
- create empty variables for MONGO_URL, JWT_SECRET, JWT_LIFETIME
- install mongoose
- add mongodb url to env
- connect to database in app.js
- create start function in app.js => connect to mongo and listen to port
- start()
- create routes, controllers, models directories
- create basic routes for users and send basic info
- create basic controller functions for users and add to routes
- add user router to app.js

## Postman setup and testing

- URL global var
- project collection
- auth folder
- setup routes

## Models

- create models folder
- create user model
- create posts and comments models

## Register user

- install express-validator
- validate req.body in register function (authcontroller.js)
- check if email is already in use
- create new user
- handle error
- save user
- install bcrypt
- hash password in user model pre save
- add user model method to bcrypt compare password

## add jwt token

- add create jwt token to user model methods
- invoke token method in register controller after creating user
- res.json(user and token)

# login user

- validate body
- find user in database by email
- check if user exists else return error
- check if password is correct
- create token
- user.password = undefined for security
- res.status(OK).json({user, token})

## Postman - Set Token Programmatically

- register and login routes
- Tests

```js
const jsonData = pm.response.json();
pm.globals.set("token", jsonData.token);

Type: Bearer;

Token: {
  {
    token;
  }
}
```

## Authenticate user middleware

- create middleware folder
- create auth.js file
- async auth function
- check if present in header
- get token
- verify token
- add to req object
- handle error
- add auth middleware to required routes (better in app.js)

## posts routes

- create postsRoutes in routes folder
- basic CRUD routes
- export
- import posts routes to app.js
- add auth middleware to app.use(posts)
- test by postman

## posts controllers

- create basic crud posts controller functions
- add them to routes

## create new post function

- import body, validationresult from express-validator
- validate body of request
- return if error
- create new post in database if no error

## comments controllers and routes

- create basic crud comments controller functions
- create basic comments routes
- add controller functions to the routes

## create new comment function

- import body, validationresult from express-validator
- validate body of request
- return if error
- else create new post

## controllers

- create controller functions for all CRUD routes
