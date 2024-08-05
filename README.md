# Mini Message Board
A web application where users can write and view messages. This simple message board allows users to enter their messages, which are then visible to all other users.


Link to project: https://minimessageboard-top.adaptable.app

# How It's Made:
Tech used: Node.js, Express, PostgreSQL, express-validator

This mini message board is built using Node.js for the server-side logic and Express as the web framework. PostgreSQL is used as the database to store user messages. The express-validator middleware is used to validate user inputs to ensure data integrity and security.

# Features:
Submit a new message

View a list of all messages

Input validation using express-validator

# Implementation Details:
Backend: The server is implemented with Node.js and Express. Routes are defined to handle the submission of new messages and the retrieval of all messages from the database.

Database: PostgreSQL is used to store messages. Each message consists of an ID, content, and timestamp.

Validation: express-validator ensures that message content is not empty and meets other predefined criteria before being stored in the database.

# Lessons Learned:
Creating this mini message board provided valuable insights into full-stack development, including setting up and interacting with a PostgreSQL database, building RESTful APIs with Express, and ensuring data validation with express-validator. This project also emphasized the importance of user input validation to maintain data integrity and application security.

