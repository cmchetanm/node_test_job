This project is based on NodeJs and Angular4. The REST APIs are supported as JWT token based system.
User first need to login and get token, pass that token to authenticate other routes(APIs).

and the GUI is in Angular4. It has login/registration screen, user screen , locks screen and home screen.
When user loggedIn ,it will redirect to locks page, where it display the number of locks belongs to
loggedIn user and also display the number of users by their username.
User can perform CRUD operation on locks and user, user dont have permission to view other locks.

How to start the app?

To start the app follow below step:

Extract the zip and go to the root directory, you will find the sampledb.sql file , first you need to import this
database into mysql and set the database credentials into config file "config/config.json" as below:

{
  "development": {
    "username": "db_user",
    "password": "db_password",
    "database": "db_name",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "secret":"sjhjshfsghgshuewyuzxzxlkalks298483@283782skjauquwqt93892_)(shdjgs)"
  },
  "production": {
    "username": "db_user",
    "password": "db_password",
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "secret":"sjhjshfsghgshuewyuzxzxlkalks298483@283782skjauquwqt93892_)(shdjgs)"
  }
}

Open your terminal and go to the root directory of the project and run the following commands:

1. npm install
2. npm start

Open your brower,and enter the url : http://localhost:5000 and hit enter, it will launch the web app,
here you can register your self and test the app.

REST APIs:

//registration API:
POST => 'http://localhost:5000/api/user'
Headers => 'Content-type': 'application/json'
body => {username:'username_here', password: 'password_here',name:'name_here',birthdate:'dd/mm/yyyy'}

//authentication/login API:
POST => 'http://localhost:5000/api/login'
Headers => 'Content-type': 'application/json'
body => {username:'username_here', password: 'password_here'}

First authenticate by above login API call and you will receive token ,
pass this token to authenticate rest of the APIs.

Users APIs:
// To get single user or all users,to get single user need to pass id
GET => 'http://localhost:5000/api/user:/id?'
Headers => 'Content-type': 'application/json'

//To update the user(automatically detect the loggedInUser in backend)
PUT => 'http://localhost:5000/api/user'
Headers => 'Content-type': 'application/json'
body => {username:'username_here', password: 'password_here'}

//To delete the user by id
DELETE => 'http://localhost:5000/api/user/:id?'
Headers => 'Content-type': 'application/json',Authorization:Bearer token_here

locks APIs:
POST => 'http://localhost:5000/api/lock'
Headers => 'Content-type': 'application/json', Authorization:Bearer token_here
body => {name:'name_here'}  // manufacture number will automatically insert when apis call.

// To get single lock or all locks,to get single lock need to pass id
GET => 'http://localhost:5000/api/lock:/id?'
Headers => 'Content-type': 'application/json',Authorization:Bearer token_here

//To update the lock(automatically detect the loggedInUser in backend)
PUT => 'http://localhost:5000/api/lock/:id?'
Headers => 'Content-type': 'application/json',Authorization:Bearer token_here
body => {name:'name_here'}

//To delete the lock by id
DELETE => 'http://localhost:5000/api/lock/:id?'
Headers => 'Content-type': 'application/json',Authorization:Bearer token_here

------------------------------XXXXXXXXXXXXXXXX-------------------
