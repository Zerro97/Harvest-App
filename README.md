# Harvest-App
The primary goal of this project is to practice building web application using MERN stack. However, if it turns out well we could use it for the church.<br>


## Description
This is a web application which helps users to view announcement/sermons and aids church leaders in organizing their documents and displaying them.<br>

There are two user role permissions:<br>
* **Church Members:** 
    * They can only view announcements and sermons
* **Church Leaders:** 
    * They can view/edit/delete announcements and sermons
    * They can request reimbursement
    * They can create forms for sign-ups instead of google forms
    * They can store passwords for different accounts (ex. youtube)
<!-- Potentially add reimbursement reviewer access control -->

Below is the list of functionalities we could add:<br>
* **Login Authentication**
    * Only the church leaders are given permission to edit document/website
* **Church-Wide Announcement**
    * Leaders can input text/images
    * Announcement is diaplayed on home screen
    * Display can be either in the form of slideshow or text messages
* **Reimbursement**
    * Requester can upload receipt image and add descriptions
    * Reviewer can view the request and either accept or reject
    * Keep the history of requests in orderly manner
* **Sermon Video/Audio**
    * Leaders can upload videos/audios
    * Videos/audios are displayed on the website <br>


## Files/Folders Explanation
With MERN stack web application, there are front-end and back-end side to development.<br><br>
**"src"** folder contains all the react related files which deals with front-end.<br>
**"server"** folder contains all the express, mongoDB related files which deals with back-end.<br>


#### Root
<img src="https://github.com/Zerro97/Harvest-App/blob/master/screenshots/folder_root.png" alt="Start Screen" height="300px" width="220px"/>

* **src:** All the front-end related files
* **server:** All the back-end related files<br>
* **node_modules:** All the dependencies/libraries used for development
* **public**
    * **favicon.ico:** The website icon shown on tab
    * **index.html:** The root html file at top of DOM. Used in react
    * **manifest.json:** Json file that describes the application
* **README.md:**
* **gitignore:** Decides which files should not be pushed to remote github repository

#### Notes
The most important folders that we have to deal with are "src" and "server". We don't really have to deal with node_modules and public folders. If anyone wishes to edit the github description, feel free to edit README.md file. Currently gitignore file includes .env file for security reasons and node_modules folder as we do not have to upload all the dependencies to remote repo.<br>


#### Front-End
<img src="https://github.com/Zerro97/Harvest-App/blob/master/screenshots/folder_src.png" alt="Start Screen" height="300px" width="220px"/>

* **components:** Folder that contains react components that make up part of a webpage. Think of it as classes or building blocks of website. Example could include the navigation bar.
* **routes:** Folder that contains react components that make up one webpage. The files in routes folder are being called in App.js file.
* **App.js/App.css:** App.js file defines the client side routes. For example, if the user types "/sermons", app.js file determines which file to display on screen through react router. App.css file is simply a css file for App.js file. Currently, App.css file is not used
* **index.js/index.css:** index.js file uses App.js and connects it to index.html. Basically it is what pushes all the react components to the html file.
* **logo.svg:** This is not used
* **serviceWorker.js:**

#### Notes
'src' folder handles the client side logics. However, it still interacts with server side through a library called axios (Axios does the same job as *fetch* function in javascript but with added functionality. More on this at the bottom of README). API calls (GET, POST, PUT, DELETE) to server-side are made through axios. For example, during log in, the user could fill in his username and password and when the submit button is pressed, the user is making GET request to server side 'login' route. The server side then responds by sending token for the login authentication.<br>


#### Back-end
<img src="https://github.com/Zerro97/Harvest-App/blob/master/screenshots/folder_backend.png" alt="Start Screen" height="300px" width="220px"/>

* **models:** Folder that contains all the mongoose schemas/models. One file corresponds to one schema/model. For example, user.model.js is a file that defines the user information such as username and passwords.
* **middlesware:**
* **routes:** Folder that contains all the js files that handles API calls. One file corresponds to one server-side route. For example, users.js is a file that defines what happens if the client side do API calls to '/user' route.
* **.env:** This is file that defines environment variables. This is useful for security as I can include it in gitignore file and not reveal the passwords used for accessing mongoDB atlas. This is used in server.js file.
* **server.js:** This is main js file that handles different configurations. It connects the file to cloud mongoDB database, calls different server-side routes and runs the application.

#### Notes
'server' folder has it's own node_modules folder and thus require to install dependencies separately from the root directory.<br>


## API Routes
There are two routing for web application; client and server. For explanation on the difference:
* With server-side routing you download an entire new webpage whenever you click on a link,
* With client-side routing the webapp downloads, processes and displays new data for you.
[More explanation](https://stackoverflow.com/questions/23975199/when-to-use-client-side-routing-or-server-side-routing)

For our application, we are performing client-side rendering through react js (ie. server-side rendering is rendering webpages through API calls like res.render()). Server side routes are solely used for our interaction with database and API calls<br>

In other words:<br>
Client side routes are used for displaying contents on the web browser.<br>
Server side routes are used for restful API calls and accessing database.<br>


### Client side (localhost:3000)
| Route                                   | Login Required |
|-----------------------------------------|----------------|
| /                                       |                |
| /sermons/                               |                |
| /sermons/create                         | ✔︎              |
| /sermons/`<sermon_id>`                  |                |
| /sermons/`<sermon_id>`/edit             | ✔︎              |
| /audios/                                |                |                
| /audios/create                          | ✔︎              |
| /audios/`<audio_id>`                    |                |                
| /audios/`<audio_id>`/edit               | ✔︎              |
| /announcement/                          |                |  
| /announcement/create                    | ✔︎              |              
| /announcement/`<audio_id>`              |                |                
| /announcement/`<audio_id>`/edit         | ✔︎              |
| /reimbursement/                         | ✔︎              |
| /reimbursement/create                   | ✔︎              |
| /reimbursement/`<reimbursement_id>`     | ✔︎              |
| /reimbursement/`<reimbursement_id>`/edit| ✔︎              |



### Server side (localhost:5000)
| Route                                   | Auth Required | Admin | Token Required | Get | Post | Put | Delete |
|-----------------------------------------|---------------|-------|----------------|-----|------|-----|--------|
| /login                                  | ✔︎             |       |                |     | ✔︎    |     |        |
| /users/                                 |               |       |                |     | ✔︎    |     |        |
| /users/`<username>`                     |               |       | ✔︎              | ✔︎   | ✔︎    | ✔︎   | ✔︎      |
| /sermons/                               |               |       | ✔︎              | ✔︎   | ✔︎    |     |        |
| /sermons/`<sermon_id>`                  |               |       | ✔︎              | ✔︎   |      | ✔︎   | ✔︎      |
| /audios/                                |               |       | ✔︎              | ✔︎   | ✔︎    |     |        |
| /audios/`<audio_id>`                    |               |       | ✔︎              | ✔︎   |      | ✔︎   | ✔︎      |
| /announcement/                          |               |       | ✔︎              | ✔︎   | ✔︎    |     |        |
| /announcement/`<announcement_id>`       |               |       | ✔︎              | ✔︎   |      | ✔︎   | ✔︎      |
| /reimbursement/                         |               | ✔︎     | ✔︎              | ✔︎   | ✔︎    |     |        |
| /reimbursement/`<reimbursement_id>`     |               | ✔︎     | ✔︎              | ✔︎   |      | ✔︎   | ✔︎      |

#### Notes
In server side route, I'll probably differentiate between reimbursement reviewer and requester. While reviwer can look at the reimbursement requests and accept/reject the requests, requester can only make requests and do not have access to other people's reimbursement requests. I think this could be done by adding admin field in the user schema and use that to determine the user roles.<br>

## Authentication
There are different types of authentication we can use for log in
* Basic HTTP Authentication
    * Requires username/password for every request
* Session Based Authentication
    * Client receives a session ID after authentication, stores it in a cookie, and attaches it to every subsequent request
* Token Based Authentication
    * Client receives a random token at the first login and passes it as request header in every request
* JWT Based Authentication
    * Client sends encrypted user information and receives a token, which is included in every request and decrypted by the server<br>

[More Explanation](https://blog.risingstack.com/web-authentication-methods-explained/)

I haven't decided on which authentication method to use but I will most probably use token based authentication (specifically JWT Based authentication).<br>


## Setup
You need to prepare followings for development:

### Node js
If you do not have node.js installed, install it from [Node.js Website](https://nodejs.org/en/).<br>

### Nodemon
Nodemon is useful for developing node js applications as it automatically restart the application when file changes. I have installed it globally and thus it is **not** part of local node_modules folder. You need to install it globally if you wish to use it.
#### `npm install -g nodemon`
Run the above code in the server folder (./server). If the permission is denied during installation, read the following [link](https://stackoverflow.com/questions/47252451/permission-denied-when-installing-npm-modules-in-osx) by antzhrek

### MongoDB Atlas
For this web application, I'm hosting cloud based database using MongoDB Atlas. You need to create mongoDB account at [mongoDB website](https://www.mongodb.com/)

### Git
#### `git clone https://github.com/Zerro97/Harvest-App.git`
Run the above command in the folder you wish to download project to.

#### `git checkout develop`
Switch to develop branch for development

### NPM install
You need to install all the dependencies that are required to run this web application. All these dependencies will be stored in a folder named 'node_modules'. <br>
There are two separate places where you need to install the dependencies, 'server' folder and the root folder. This is for separating server side and client side logics.

#### `npm install`
In the server directory (/server), run above command again.<br>

#### `npm install`
In the root directory (/), run above command. This will install all the dependencies listed in the package.json file.<br>


## Running
It's time to run the web application!

#### `nodemon server`
First, in the server directory, run above command. This will run server.js file and connnect the front end to our server. It will be at "localhost:5000" (for local development)

#### `npm start`
Next, in the parent directory, run above command. This will start up the server and display the website in the browser. It will be at "localhost:3000" (for local development)

## Deployment
I plan to deploy the web application through heroku (heroku provides cloud based server). Heroku will be directly connected to the master branch in github repo and thus whatever changes made in the master branch will automatically be reflected on the website. For development purposes, use develop branch instead. Only merge the changes to master branch if there are no bugs.

## References
[Access Control](https://blog.nodeswat.com/implement-access-control-in-node-js-8567e7b484d1)<br>
[MERN Basic Set Up](https://www.youtube.com/watch?v=7CqJlxBYj-M)<br>
[Heroku Deploy](https://devcenter.heroku.com/articles/deploying-nodejs)<br>
[.env file](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)<br>
[Mongoose](https://mongoosejs.com/docs/schematypes.html)<br>
[Image Uploading](https://codeburst.io/image-uploading-using-react-and-node-to-get-the-images-up-c46ec11a7129)<br>
[Image Uploading Using aws s3](https://www.youtube.com/watch?v=Oc69SEtbM_U)<br>
[Authentication](https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/)<br>
[MongoDB Basic](https://www.youtube.com/watch?v=9OPP_1eAENg&list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u&index=1)<br>
[README.md file](https://github.com/tchapi/markdown-cheatsheet/blob/master/README.md)<br>
[Fetch vs Axios](https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5)<br>
