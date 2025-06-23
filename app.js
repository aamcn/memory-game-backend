require('dotenv').config()
const express = require('express')
const app = express()
const hardLeaderBoardRouter = require('./routes/hardLeaderBoardRouter')
const mediumLeaderBoardRouter = require('./routes/mediumLeaderBoardRouter')

const port = 3000


app.use('/hard-leader-board', hardLeaderBoardRouter)
app.use('/medium-leader-board', mediumLeaderBoardRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
}) 
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})