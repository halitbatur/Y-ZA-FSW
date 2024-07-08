# Mongoose Embeddings Backend

## Overview
This project contains the backend side of the mongoose Embeddings demo we did in class. It contains the following files and folders:

### Folder Structure

```
backend/
├── config/
│   └── db.js
├── controller/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── index.js
├── node_modules/
├── .env
├── .gitignore
├── app.js
├── docker-compose.yml
├── package-lock.json
├── package.json
```
### Explanation of each file and folder
- backend/: Root directory for the backend part of the project.
    - config/: Configuration files for the application
        - db.js: Contains database configuration and connection logic
    - controller/: Controllers that handle the logic for different routes
        - userController.js: Contains functions to handle requests related to users
    - models/: Database models that define the structure of the data
        - userModel.js: Defines the schema for the user data in the database
    - routes/: Route definitions for the application
        - index.js: Main file to set up and define routes for the application
    - .gitignore: Specifies which files and directories should be ignored by gitignore
    - app.js: Main application file where the server and middleware are set up
    - docker-compose.yml: Docker Compose file to set up and manage Docker containers for the application
    - package-lock.json: Automatically generated file that locks the versions of dependencies installed via npm
    - package.json: Contains metadata about the project and lists dependencies and scripts


## How to start the project?

- Run `npm install` to install all dependencies
- Simply start using the same instructions you've done before to run docker using the `docker-compose up -d`. Make sure that docker is actually running on your machine. 
- Run `npm start` to start the project.

