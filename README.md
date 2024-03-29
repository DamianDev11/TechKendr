# TechKendr

<h1>MERN Project Setup Guide</h1>

This guide will help you set up a MERN (MongoDB, Express.js, React.js, Node.js) project on your local machine.

Prerequisites
Before you begin, make sure you have the following installed:

-Node.js and npm (Node Package Manager)
-MongoDB (either locally or a remote instance)
-Git (optional, but recommended for version control)

<h2>Getting Started</h2>

Clone this repository to your local machine using Git:

-git clone https://github.com/DamianDev11/TechKendr.git

Navigate to the project directory:

-cd TechKendr

Navigate to the client directory:

-cd client

Install client dependencies:

-npm install

Go back to the project root directory:

-cd ..

Navigate to the server directory:

-cd server

Install client dependencies:

-npm install

<h1>Configuration</h1>

Create a .env file in the root directory of your project and add the following environment variables:

PORT=3000
MONGO_URL=your_mongodb_connection_string

<h1>Running the Project</h1>

Start the server (from the server directory):

-cd server
-npm run dev

Start the client (from the client directory):

-cd client
-npm run dev

Access your application at http://localhost:5173 in your web browser.

<h1>Additional Notes</h2>

-Remember to start your MongoDB server before running the project.
-Customize the project according to your requirements by modifying the files in the client/src and server directories.
-Ensure you have proper error handling, security measures, and testing implemented before deploying your project to production.
Happy coding!