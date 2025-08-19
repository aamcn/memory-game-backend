# Memory Game Backend 🎮

A Node.js/Express backend API that provides leaderboard functionality for the Poke-Mem memory game. This server manages high scores across three difficulty levels and provides endpoints for storing and retrieving player performance data.

## 🚀 Features

- **Multi-difficulty Leaderboards**: Separate leaderboards for Easy (4 cards), Medium (6 cards), and Hard (9 cards) game modes
- **RESTful API**: Clean REST endpoints for score management
- **PostgreSQL Database**: Persistent storage for high scores
- **Input Validation**: Comprehensive validation using express-validator
- **Error Handling**: Centralized error handling middleware
- **CORS Support**: Cross-origin resource sharing enabled for frontend integration
- **Security**: Input sanitization to prevent XSS attacks

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher)
- **PostgreSQL** database
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/aamcn/memory-game-backend.git
   cd memory-game-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   POOLUSER=your_postgres_username
   POOLPASSWORD=your_postgres_password
   POOLHOST=localhost
   POOLPORT=5432
   POOLDATABASE=memory_game_db
   ```

4. **Set up the database**

   Create the PostgreSQL database and tables:

   ```sql
   CREATE DATABASE memory_game_db;

   \c memory_game_db;

   CREATE TABLE easy_leader_board (
     id SERIAL PRIMARY KEY,
     player_name VARCHAR(50) NOT NULL,
     finish_time VARCHAR(8) NOT NULL,
   );

   CREATE TABLE medium_leader_board (
     id SERIAL PRIMARY KEY,
     player_name VARCHAR(50) NOT NULL,
     finish_time VARCHAR(8) NOT NULL,
   );

   CREATE TABLE hard_leader_board (
     id SERIAL PRIMARY KEY,
     player_name VARCHAR(50) NOT NULL,
     finish_time VARCHAR(8) NOT NULL,
   );
   ```

5. **Start the server**

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3000`

## 📚 API Documentation

### Base URL

```
http://localhost:3000
```

### Easy Difficulty Endpoints

#### Get All Easy Scores

- **GET** `/easy-leader-board/all-easy-scores`
- **Description**: Retrieve all scores from the easy leaderboard
- **Response**: Array of score objects

#### Get Easy Score by ID

- **GET** `/easy-leader-board/easy-score-by-id?id={id}`
- **Description**: Retrieve a specific score by ID
- **Parameters**:
  - `id` (query): Integer ID of the score
- **Validation**: ID must be a positive integer
- **Response**: Score object

#### Add Easy High Score

- **POST** `/easy-leader-board/add-easy-top-scorer`
- **Description**: Add a new high score to the easy leaderboard
- **Body**:
  ```json
  {
    "playerName": "string (1-50 characters)",
    "finishTime": "string (8 characters, format: MM:SS:MS)"
  }
  ```
- **Validation**:
  - Player name: Required, 1-50 characters, sanitized
  - Finish time: Required, exactly 8 characters
- **Response**: `"Success"`

### Medium Difficulty Endpoints

#### Get All Medium Scores

- **GET** `/medium-leader-board/all-medium-scores`

#### Get Medium Score by ID

- **GET** `/medium-leader-board/medium-score-by-id?id={id}`

#### Add Medium High Score

- **POST** `/medium-leader-board/add-medium-top-scorer`

### Hard Difficulty Endpoints

#### Get All Hard Scores

- **GET** `/hard-leader-board/all-hard-scores`

#### Get Hard Score by ID

- **GET** `/hard-leader-board/hard-score-by-id?id={id}`

#### Add Hard High Score

- **POST** `/hard-leader-board/add-hard-top-scorer`

_Note: Medium and Hard endpoints follow the same structure as Easy endpoints_

## 🏗️ Project Structure

```
memory-game-backend/
├── app.js                      # Main application entry point
├── package.json               # Project dependencies and scripts
├── controllers/               # Request handlers
│   ├── easyLeaderBoardController.js
│   ├── mediumLeaderBoardController.js
│   └── hardLeaderBoardController.js
├── db/                        # Database layer
│   ├── pool.js               # PostgreSQL connection pool
│   ├── easyLeaderBoardQueries.js
│   ├── mediumLeaderBoardQueries.js
│   └── hardLeaderBoardQueries.js
├── routes/                    # API route definitions
│   ├── easyLeaderBoardRouter.js
│   ├── mediumLeaderBoardRouter.js
│   └── hardLeaderBoardRouter.js
├── validation/                # Input validation
│   ├── validationRules.js
│   └── validation-examples.js
└── errorMiddleware/           # Error handling
    └── errorMiddleware.js
```

## 🛡️ Security Features

- **Input Validation**: All inputs are validated using express-validator
- **SQL Injection Prevention**: Parameterized queries with pg library
- **XSS Prevention**: Input sanitization with escape functions
- **CORS Configuration**: Controlled cross-origin resource sharing

## 🔧 Development

### Code Quality Tools

- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **express-validator**: Input validation and sanitization

### Running with Development Tools

```bash
# Run ESLint
npx eslint .

# Format code with Prettier
npx prettier --write .
```

## 🌐 Frontend Integration

This backend is designed to work with the [Poke-Mem frontend application](https://github.com/aamcn/memory-game). The frontend makes requests to these endpoints to:

1. **Submit high scores** when players complete games
2. **Retrieve leaderboard data** for display in the leaderboard page
3. **Filter scores by difficulty** for different game modes

## 📊 Database Schema

### Leaderboard Tables

Each difficulty level has its own table with identical structure:

| Column        | Type               | Description                |
| ------------- | ------------------ | -------------------------- |
| `id`          | SERIAL PRIMARY KEY | Unique identifier          |
| `player_name` | VARCHAR(50)        | Player's name              |
| `finish_time` | VARCHAR(8)         | Completion time (MM:SS:MS) |

## 👨‍💻 Author

**Aaron McNulty**

- GitHub: [@Aaronmcnulty](https://github.com/aamcn)
- Project Link: [Memory Game Backend](https://github.com/aamcn/memory-game-backend)

## 🙏 Acknowledgments

- Built to support the Poke-Mem memory game
- Uses PostgreSQL for reliable data persistence
- Express.js framework for robust API development
