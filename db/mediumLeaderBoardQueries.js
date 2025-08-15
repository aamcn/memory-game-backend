const pool = require("./pool");

// Get all entries from the medium leaderboard table
async function getAllMediumScores() {
  return await pool.query("SELECT * FROM medium_leaderboard;");
}

// Get a specific entry from the medium leaderboard table by id.
async function getMediumScoreById(id) {
  return await pool.query(
    "SELECT * FROM medium_leaderboard WHERE id = $1;",
    [id],
  );
}

// Add a new high scorer to the medium leaderboard table.
async function addMediumHighScorer(playerName, finishTime) {
  await pool.query(
    "INSERT INTO medium_leaderboard (player_name, finish_time) VALUES ($1, $2)",
    [playerName, finishTime],
  ); 
}

module.exports = {
  getAllMediumScores,
  getMediumScoreById,
  addMediumHighScorer,
};
 