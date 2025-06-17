const pool = require ('./pool')

async function test(){
    return await pool.query('SELECT * FROM leader_board;')
}

module.exports = {
    test 
}