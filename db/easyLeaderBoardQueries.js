const pool = require("./pool");

// Get all entries from the easy leaderboard table
async function getAllEasyScores() {
  return await pool.query("SELECT * FROM easy_leader_board;");
}

// Get a specific entry from the easy leaderboard table by id.
async function getEasyScoreById(id) {
  return await pool.query(
    "SELECT * FROM easy_leader_board WHERE id = $1;",
    [id],
  );
}

// Add a new high scorer to the easy leaderboard table.
async function addEasyHighScorer(playerName, finishTime) {
  await pool.query(
    "INSERT INTO easy_leader_board (player_name, finish_time) VALUES ($1, $2)",
    [playerName, finishTime],
  );
}

module.exports = {
  getAllEasyScores,
  getEasyScoreById,
  addEasyHighScorer,
};
