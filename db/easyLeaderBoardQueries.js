const pool = require("./pool");

async function getAllEasyScores() {
  return await pool.query("SELECT * FROM easy_leader_board;");
}

async function getEasyScoreById(id) {
  return await pool.query(
    "SELECT * FROM easy_leader_board WHERE id = $1;",
    [id],
  );
}

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
