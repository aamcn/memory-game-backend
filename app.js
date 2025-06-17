require('dotenv').config()
const express = require('express')
const app = express()
const leaderBoardRouter = require('./routes/leaderBoardRouter')


const port = 3000


app.use('/leaderboard', leaderBoardRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
}) 
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})