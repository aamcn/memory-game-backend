const express = require('express')
const router = express.Router()
const leaderBoardRouter = router
const leaderBoardController = require('../controllers/leaderBoardController')


leaderBoardRouter.get('/all-scores', leaderBoardController.getAllScores)
leaderBoardRouter.get('/score-by-id', leaderBoardController.getScoreById)

leaderBoardRouter.post('/top-scorer', leaderBoardController.addHighScorer)


module.exports = leaderBoardRouter

