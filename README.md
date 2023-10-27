# Pen It Down

"Pen It Down" is a note-taking application designed to help users easily capture and organize their thoughts, ideas, and information. It serves as a digital platform for users to create, edit, and store notes, making it convenient to access and manage their personal and work-related content. The app enables users to categorize notes, search for specific information, and synchronize their notes across multiple devices for seamless accessibility. "Pen It Down" streamlines the process of taking and managing notes, making it a valuable tool for productivity and organization.

## Table of Contents

- [Features](#features)
- [Entity-Relationship Diagram (ERD)](#entity-relationship-diagram-erd)
- [Relations]
- SQL Code

## Features

The key features of my project are:-
- User registration and login
- Create and manage notes


## Entity-Relationship Diagram (ERD)
![ERD](https://github.com/Akanchibail/Web_Project/blob/main/ERD.PNG)

## Relation Diagram


## SQL Code
CREATE TABLE User (
    userid INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(240) NOT NULL,
    lastname VARCHAR(240) NOT NULL,
    username VARCHAR(240) NOT NULL,
    password VARCHAR(240) NOT NULL
);


CREATE TABLE Note (
    noteid INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    userid INT,
    FOREIGN KEY (userid) REFERENCES User(userid)
);





