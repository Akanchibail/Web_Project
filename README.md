# Pen It Down

"Pen It Down" is a note-taking application designed to help users easily capture and organize their thoughts, ideas, and information. It serves as a digital platform for users to create, edit, and store notes, making it convenient to access and manage their personal and work-related content. The app enables users to categorize notes, search for specific information, and synchronize their notes across multiple devices for seamless accessibility. "Pen It Down" streamlines the process of taking and managing notes, making it a valuable tool for productivity and organization.

## Table of Contents

- [Features](#features)
- [Entity-Relationship Diagram (ERD)](#entity-relationship-diagram-erd)
- [Database Schema](#database-schema)

## Features

The key features of my project are:-
- User registration and login
- Create and manage notes


## Entity-Relationship Diagram (ERD)


## Database Schema

User Schema:

userid (Primary Key): A unique integer identifying each user. firstname: A field to store the user's first name. lastname: A field to store the user's last name. username: A field to store the user's chosen username. password: A field to store the user's password.

Note Schema:

noteid (Primary Key): An integer that serves as a unique identifier for each note. content: A text field used to capture the content or description of each note. userid (Foreign Key): An integer that references the userid in the "User" table, establishing a relationship between users and their respective notes.

SQL code for creating the tables and any important constraints:

CREATE TABLE User (
    userid INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);


CREATE TABLE Note (
    noteid INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    userid INT,
    FOREIGN KEY (userid) REFERENCES User(userid)
);

This SQL code creates the "User" and "Note" tables with the following features:

The "User" table has an auto-incrementing primary key userid and "NOT NULL" constraints for the first name, last name, username, and password.
The "Note" table also has an auto-incrementing primary key noteid and a "NOT NULL" constraint for the content. It establishes a relationship with the "User" table via the userid foreign key.



