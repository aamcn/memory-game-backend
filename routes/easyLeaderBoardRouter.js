const express = require('express')
const router = express.Router()
const easyLeaderBoardRouter = router
const easyLeaderBoardController = require('../controllers/easyLeaderBoardController')


easyLeaderBoardRouter.get('/all-easy-scores', easyLeaderBoardController.getAllEasyScores)
easyLeaderBoardRouter.get('/easy-score-by-id', easyLeaderBoardController.getEasyScoreById)

easyLeaderBoardRouter.post('/add-easy-top-scorer', easyLeaderBoardController.addEasyHighScorer)


module.exports = easyLeaderBoardRouter

