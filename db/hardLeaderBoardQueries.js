const pool = require("./pool");

async function getAllHardScores() {
  return await pool.query("SELECT * FROM hard_leaderboard;");
}

async function getHardScoreById(id) {
  return await pool.query(
    "SELECT * FROM hard_leaderboard WHERE id = $1;",
    [id],
  );
}

async function addHardHighScorer(playerName, finishTime) {
  await pool.query(
    "INSERT INTO hard_leaderboard (player_name, finish_time) VALUES ($1, $2)",
    [playerName, finishTime],
  );
}

module.exports = {
  getAllHardScores,
  getHardScoreById,
  addHardHighScorer,
};
