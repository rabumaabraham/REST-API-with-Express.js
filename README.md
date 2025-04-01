## Todo API - Express.js

This is a simple RESTful API built with **Node.js** and **Express.js** to manage a to-do list. It allows you to **create**, **read**, **update**, and **delete** to-do items. The application provides a basic backend service for managing to-do tasks using HTTP methods.

## Features
- **GET /api/todos** - Retrieve all to-do items.
- **GET /api/todos/:id** - Retrieve a single to-do item by ID.
- **POST /api/todos** - Create a new to-do item.
- **PUT /api/todos/:id** - Update an existing to-do item by ID.
- **DELETE /api/todos/:id** - Delete a to-do item by ID.

## Installation

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/yourusername/todo-api-express.git
   \`\`\`

2. **Navigate to the project directory:**

   \`\`\`bash
   cd todo-api-express
   \`\`\`

3. **Install dependencies:**

   Make sure you have Node.js installed. Then, run:

   \`\`\`bash
   npm install
   \`\`\`

4. **Start the server:**

   Run the following command to start the server:

   \`\`\`bash
   node server.js
   \`\`\`

   The server will start on **http://localhost:3000** by default.

## Usage

Once the server is running, you can interact with the API using any HTTP client (like a browser, Postman, or cURL).

### Get all todos:
\`\`\`bash
GET http://localhost:3000/api/todos
\`\`\`

### Get a single todo by ID:
\`\`\`bash
GET http://localhost:3000/api/todos/:id
\`\`\`

### Create a new todo:
\`\`\`bash
POST http://localhost:3000/api/todos
Content-Type: application/json
{
  \"task\": \"Learn Express\",
  \"completed\": false
}
\`\`\`

### Update a todo by ID:
\`\`\`bash
PUT http://localhost:3000/api/todos/:id
Content-Type: application/json
{
  \"task\": \"Learn Express.js and build a backend\",
  \"completed\": true
}
\`\`\`

### Delete a todo by ID:
\`\`\`bash
DELETE http://localhost:3000/api/todos/:id
\`\`\`

## Technologies Used
- **Node.js** - JavaScript runtime for building the server.
- **Express.js** - Web framework for building the API routes.
- **JavaScript** - Language used for building the server and API logic.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Feel free to fork this repository, make changes, and create a pull request if you'd like to contribute improvements or fixes.

## Contact
- **Author**: Rabuma Abraham Bekele
- **Email**: your.email@example.com
- **GitHub**: [your-username](https://github.com/yourusername)"
