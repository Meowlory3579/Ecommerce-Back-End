# E-commerce Back End

## Description
This project is an e-commerce back-end application that uses a working Express.js API and configures it to use Sequelize to interact with a MySQL database.

## User Story
AS A manager at an internet retail company  
I WANT a back end for my e-commerce website that uses the latest technologies  
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria
GIVEN a functional Express.js API  
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file, THEN I am able to connect to a database using Sequelize.  
WHEN I enter schema and seed commands, THEN a development database is created and is seeded with test data.  
WHEN I enter the command to invoke the application, THEN my server is started and the Sequelize models are synced to the MySQL database.  
WHEN I open API GET routes in Insomnia Core for categories, products, or tags, THEN the data for each of these routes is displayed in a formatted JSON.  
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core, THEN I am able to successfully create, update, and delete data in my database.  

## Installation for developers
Install Node.js, if needed.     

Create a .gitignore file and include "node_modules", ".env", ".vscode", "package-lock.json", and ".DS_Store" in it, so that these files aren't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.     

Make sure that your repo includes a package.json with the required dependencies. You can create one by running "npm init" when you first set up the project, before installing any dependencies.     

This application requires the Express package. To install Express, navigate to your terminal and enter "npm install express".  

This application requires the Sequelize package. To install Sequelize, navigate to your terminal and enter "npm install sequelize".  

This application requires the MySQL2 package. To install MySQL2, navigate to your terminal and enter "npm install --save mysql2".

This application requires the dotenv package. To install dotenv, navigate to your terminal and enter "npm i dotenv".

## Usage for developers
Right-click on the "server.js" file and select "Open in Integrated Terminal". To seed the database, enter "npm run seed" and press enter. To initiate application, type "node server.js" and press enter.

## The following video demonstrates the application's functionality
[Pending]

## Credits
Started Code Sourced From: https://github.com/coding-boot-camp/fantastic-umbrella