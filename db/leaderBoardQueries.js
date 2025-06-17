const pool = require ('./pool')

async function getAllScores(){
    return await pool.query('SELECT * FROM leader_board;')
}

async function getScoreById(id){
    return await pool.query(`SELECT * FROM leader_board WHERE id = ${id};`)
}

async function addHighScorer(id, name, time, score){
    await pool.query('INSERT INTO leader_board (id, name, time, score) VALUES ($1, $2, $3, $4)', [id, name, time, score])
}

module.exports = {
    getAllScores,
    getScoreById, 
    addHighScorer
}